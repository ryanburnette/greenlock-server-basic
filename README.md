# greenlock-server-basic

A very basic greenlock-express server.

## Usage

Download the repository.

```bash
git clone https://github.com/ryanburnette/greenlock-server-basic
cd greenlock-server-basic
```

Install dependencies.

```bash
npm install
```

Set up the environment.

```
# .env
NODE_ENV=production
EMAIL=ryan.burnette@gmail.com
DOMAINS=mysite.com,www.mysite.com
```

The target is assumed to be `http://localhost:3000`, but can be set as
`process.env.TARGET`.

Use [go-serviceman][2] to set up greenlock and the site service.

[1]: https://github.com/ryanburnette/greenlock-server-basic
[2]: https://git.coolaj86.com/coolaj86/go-serviceman
