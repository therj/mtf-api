const axios = require(`axios`);
const { isEmpty, merge, assign } = require(`lodash`);

const singleton = Symbol(`singleton`);
const singletonEnforcer = Symbol(`singleton enforcer`);

class Axios {
  static #axiosClient;

  static #xyz;

  static axiosInstance;

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error(`Cannot initialize Axios client single instance`);
    }

    // Axios.#xyz = axios.create();
    this[singleton] = axios.create();
  }

  static get instance() {
    // Try to get an efficient singleton
    if (!this[singleton]) {
      this[singleton] = new Axios(singletonEnforcer);
    }
    return this[singleton];
  }

  /**
   * @param  {{baseURL: string, headers?: object, rest: any}} configure
   */
  setConfigure(configure) {
    const { baseURL, headers = {}, ...rest } = configure;

    this[singleton].defaults.baseURL = baseURL;
    this[singleton].defaults.headers = {
      ...merge(this[singleton].defaults.headers, headers),
    };
    this[singleton].defaults = {
      ...this[singleton].defaults,
      ...rest,
    };
  }

  /**
   * @param  {string=''} userToken
   */
  setHeaderToken(userToken = ``) {
    const jwt =
      /^([A-Za-z0-9\-_~+]+[=]{0,2})\.([A-Za-z0-9\-_~+]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+]+[=]{0,2}))?$/;

    if (jwt.test(userToken)) {
      this[
        singleton
      ].defaults.headers.common.Authorization = `Bearer ${userToken}`;
    }
  }

  /**
   * @param  {string} resource
   * @param  {} slug=''
   * @param  {} config={}
   */
  get(resource, slug, config = {}) {
    const requestURL = isEmpty(slug) ? `${resource}` : `${resource}/${slug}`;
    return this[singleton].get(requestURL, {
      data: null,
      ...merge({ headers: this[singleton].defaults.headers }, config),
    });
  }

  /**
   * @param  {string} resource
   * @param  {object} data
   * @param  {} config={}
   */
  post(resource, data, config = {}) {
    return this[singleton].post(
      `${resource}`,
      data,
      assign(config, this[singleton].defaults.headers)
    );
  }

  /**
   * @param  {string} resource
   * @param  {object} data
   * @param  {} config={}
   */
  update(resource, data, config = {}) {
    return this[singleton].put(
      `${resource}`,
      data,
      assign(config, this[singleton].defaults.headers)
    );
  }

  /**
   * @param  {string} resource
   * @param  {object} data
   * @param  {} config={}
   */
  put(resource, data, config = {}) {
    return this[singleton].put(
      `${resource}`,
      data,
      assign(config, this[singleton].defaults.headers)
    );
  }

  /**
   * @param  {string} resource
   * @param  {object} data
   * @param  {} config={}
   */
  patch(resource, data, config = {}) {
    return this[singleton].patch(
      `${resource}`,
      data,
      assign(config, this[singleton].defaults.headers)
    );
  }

  /**
   * @param  {string} resource
   * @param  {object} data
   * @param  {} config={}
   */
  delete(resource, data, config = {}) {
    return this[singleton].delete(`${resource}`, {
      params: data,
      ...assign(config, this[singleton].defaults.headers),
    });
  }
}

module.exports = { axiosSingleton: Object.freeze(Axios.instance) };
