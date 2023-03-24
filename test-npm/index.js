const MtfClient = require('mtf-api');

async function main() {
  const mtf = new MtfClient({
    accessToken: '{YOUR_API_V1_TOKEN}',
    refreshToken: process.env.REFRESH_TOKEN,
  });
  const sampleFontId = '3fe16b4af7212a2bb36205151b6c3141';

  // not explicitly required
  const [authData, authError] =  await mtf.authorize();


  const [fonts, fontsError] = await mtf.fonts({
    // options
  })
  const [font, fontError] = await mtf.font(sampleFontId, {
    // options
  })

  const [download, downloadError] = await mtf.download(sampleFontId)

  console.log('🚀 ~ file: index.js:16 ~ main ~ fonts:', fonts);

}

(async () => {
  await main();
})()
