module.exports = {
  parse: (inputString) => {
    let params = inputString.match(/(("|').*?("|')|[^("|')\s]+)+(?=\s*|\s*$)/g);
    return params.reduce((parsedParams, param) => {
      let kvPair = param.split('=');
      if (kvPair.length !== 2) {
        return parsedParams;
      }
      parsedParams[kvPair[0]] = kvPair[1].replace(/(^")|("$)/g, '');
      return parsedParams;
    }, {})
  }
};