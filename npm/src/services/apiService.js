const config = require('config');
const { axiosSingleton } = require(`../clients/axiosInstance`);
const baseURL = config.get('baseURL')

const axiosInstance = axiosSingleton;

axiosInstance.setConfigure({
  baseURL,
  headers: {
    common: {
      'Content-Type': `application/json`,
    },
  },
});

axiosInstance.setHeaderToken(`YOUR_TOKEN`);

module.exports = { axiosInstance };
