# mtf-api

## Node.js client library for MTF API
![Release](https://img.shields.io/npm/v/mtf-api)
![Downloads](https://img.shields.io/npm/dw/mtf-api)
[![License](https://img.shields.io/:license-mit-blue.svg?style=flat)](https://opensource.org/licenses/MIT)

📚 [Documentation](#documentation) - 🚀 [Getting Started](#getting-started) - 💻 [API Reference](#api-reference) - 💬 [Feedback](#feedback)

## Documentation

- [FAQs](https://github.com/therj/mtf-api/blob/master/FAQ.md) - frequently asked questions about mtf-api.
- [Docs Site](https://mtf-api.rjoshi.net) - explore our docs site and learn more about MTF API

## Getting Started

### Requirements

This library supports the following tooling versions:

- Node.js: `>=8.3.0`

### Installation

Using [npm](https://npmjs.org) in your project directory run the following command:

```bash
npm install mtf-api
```

### Configure the API Client

Initialize your client class with an API v1 token and a domain.

```js
const MtfClient = require('mtf-api');

const mtf = new MtfClient({
  token: '{YOUR_API_V1_TOKEN}'
});
```

For other examples see the [EXAMPLES.md](https://github.com/therj/mtf-api/blob/master/EXAMPLES.md) document.

## API Reference

- [The Monotype Fonts API](https://developers.monotype.com/docs/worldoffonts/1/routes/authorize/refresh/get)

## Feedback

<!---
### Contributing

We appreciate feedback and contribution to this repo! Before you get started, please see the following:
--->

### Raise an issue

To provide feedback or report a bug, please [raise an issue on our issue tracker](https://github.com/therj/mtf-api/issues).
