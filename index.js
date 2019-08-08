module.exports = (inputString) => {

  let params = inputString.split(/\s/);
  return params.reduce((parsedParams, param) => {
    let kvPair = param.split('=');
    if (kvPair.length !== 2) {
      return parsedParams;
    }
    parsedParams[kvPair[0]] = kvPair[1];
    return parsedParams;
  }, {});

};