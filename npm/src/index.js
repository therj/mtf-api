require('dotenv').config();
// const { axiosInstance } = require('./services/apiService');
const axios = require('axios');
class Mtf {
  constructor(options = {}) {
    this.init(options);
    this.baseURL = 'https://pp-api.monotype.com/v1'

    if (!options.refreshToken) {
      throw new Error('refreshToken is required');
    }
  }
  async init(options) {
    const { refreshToken, accessToken, scope, expiresAt, tokenType } = options;
    this.refreshToken = refreshToken;
    this.accessToken = accessToken;
    this.scope = scope;
    this.expiresAt = expiresAt;
    this.tokenType = tokenType;
  }
  _isTokenValid() {
    if (!this.accessToken) {
      return false;
    }
    const now = Date.now();
    if (this.expiresAt && this.expiresAt < now) {
      return false;
    }
    return true;

  }
  async authorize() {
    try {
      const { data } = await axios.get(`${this.baseURL}/authorize/refresh`, {
        params: { refreshToken: this.refreshToken }
      })
      this.accessToken = data.access_token;
      this.expiresAt = data.expires_at;
      this.tokenType = data.token_type;
      this.scope = data.scope;
      return [data, null];
    } catch (error) {
      return [null, error.response ?? error]
    }
  }

  async _fonts(fontId, options = {}) {
    !this._isTokenValid() && await this.authorize();
    let url = `${this.baseURL}/fonts`
    if (fontId) {
      url += `/${fontId}`
    }
    try {
      const { data } = await axios.get(url, {
        params: {
          ...options
        },
        headers: {
          'Content-Type': 'application/json',
          authorization: `${this.tokenType} ${this.accessToken}`
        }
      })

      return [data, null];
    } catch (error) {
      return [null, error.response ?? error]
    }
  }
  async fonts(options = {}) {
    return this._fonts(null, options)
  }
  async font(fontId, options = {}) {
    if (!fontId) {
      return [null, new Error('fontId is required')]
    }
    return this._fonts(fontId, options)

  }
  async download(fontId) {
    if (!fontId) {
      return [null, new Error('fontId is required')]
    }
    !this._isTokenValid() && await this.authorize();

    const url = `${this.baseURL}/fonts/${fontId}/download`

    try {
      const { data } = await axios.get(url, {
        params: {},
        headers: {
          'Content-Type': 'application/json',
          authorization: `${this.tokenType} ${this.accessToken}`
        }
      })

      return [data, null];
    } catch (error) {
      return [null, error.response ?? error]
    }

  }
}

module.exports = Mtf
