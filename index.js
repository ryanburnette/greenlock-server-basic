'use strict';

require('dotenv').config({});

var proxy = require('http-proxy').createProxyServer({
  xfwd: true
});

proxy.on('error', function(err, req, res) {
  console.error(err);
  res.statusCode = 500;
  res.end();
  return;
});

require('greenlock-express')
  .create({
    server:
      process.env.NODE_ENV == 'production'
        ? 'https://acme-v02.api.letsencrypt.org/directory'
        : 'https://acme-staging-v02.api.letsencrypt.org/directory',
    email: process.env.EMAIL,
    agreeTos: true,
    telemetry: true,
    communityMember: true,
    configDir: '~/.config/acme/',
    store: require('greenlock-store-fs'),
    approvedDomains: process.env.DOMAINS.split(','),
    app: function(req, res) {
      proxy.web(req, res, {
        target: process.env.TARGET || 'http://localhost:3000'
      });
      return;
    }
  })
  .listen(80, 443);
