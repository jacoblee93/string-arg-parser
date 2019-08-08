# README

Simple package that parses string arguments in the form of "name=value".

# Usage

```
const argParser = require('string-arg-parser');

let params = argParser.parse('argName=value argName2=value2');
console.log(params);
/**
{
  argName: value,
  argName2: value2
}
*/
```
