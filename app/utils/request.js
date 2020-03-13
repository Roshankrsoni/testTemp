import { BASIC_AUTH } from '../api_constants';
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, opts) {
  const options = Object.assign({}, opts);
  if (!options) {
    options = {};
  }

  options.url = url;
  // if (!options.credentials) {
  //   options.credentials = 'include';
  // }

  if (!options.headers) {
    options.headers = {
      'Accept': 'application/json',
      'Content-type': 'application/json; charset=utf-8',
    };
    if (options.formdata) {
      options.headers = {};
    }
  }
  const accessToken = localStorage.getItem('accessToken');
  let authHeader = '';
  if (accessToken && accessToken.length > 1) {
    if (options.headers && !options.headers.Authorization) {
      options.headers.Authorization = `Bearer ${accessToken}`;
      authHeader = options.headers.Authorization;
    }
  } else {
    options.headers.Authorization = `Basic ${BASIC_AUTH}`;
  }

  if (options.body && typeof (options.body) !== 'string') {
    options.body = JSON.stringify(options.body);
  }

  if (options.formdata) {
    const formdata = options.formdata;
    const filedata = new FormData();
    const keys = Object.keys(options.formdata);

    keys.forEach((item) => {
      if (formdata[item]) {
        filedata.append(item, formdata[item]);
      }
    });
    if (!options.method) {
      options.method = 'post';
    }
    options.body = filedata;
    options.credentials = 'include';
  }
  if (options.emptyHeader) {
    delete options.headers;
    delete options.credentials;
  }

  return fetch(url, options)
    .then(checkStatus)
    .then((res) => {
      if (options.isBlob) {
        return res.blob();
      }
      return parseJSON(res);
    })
}
