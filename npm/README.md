![Monotype](https://www.monotype.com/sites/default/files/styles/width_810/public/2020-06/monotype-legal-logo_0.webp?itok=7mnk2ets)

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

- Node.js: `>=18.15.0`

### Installation

Using [npm](https://npmjs.org) in your project directory run the following command:

```bash
npm install mtf-api
```

### Configure the API Client

Initialize your client class with a refresh token.

### Response type
With the exception of constructor, all methods return in comma ok pattern.
*Example:*
```js
const [value, err] = await mtf.someMethod(params)
if(err){
// something went wrong
}
// use value

```

```js
const MtfClient = require('mtf-api');

const mtf = new MtfClient({
  refreshToken: '{YOUR_API_V1_REFRESH_TOKEN}' // required
  accessToken: '' // optional
  scope: '' // optional
  expiresAt: '' // optional
  tokenType: '' // optional
});
```
###

### Authorize
All requests will be authorized before API call if token has expired. Only necessary to force generate new access token.

Uses `refreshToken` from the instance.

```js
  const [authData, err] =  await mtf.authorize();

```

### Fonts
[Documentation: valid options](https://developers.monotype.com/docs/worldoffonts/1/routes/fonts/get)

```js
  const [fonts, err] = await mtf.fonts({
    // options
  })
```

### Font Details

[Documentation: valid options](https://developers.monotype.com/docs/worldoffonts/1/routes/fonts/%7BfontId%7D/get)
```js
  const [font, err] = await mtf.font(fontId, {
    // options
  })
```
### Font Download
*Does not support options, successful response is an object with downloadLink*

[Download Documentation](https://developers.monotype.com/docs/worldoffonts/1/routes/fonts/%7BfontId%7D/download/get)
```js
  const [download, downloadError] = await mtf.download(sampleFontId)
 // download -> {downloadLink: URL}
```

###
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
