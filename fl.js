function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  
  function numberToFloat(value) {
    let isNegative = value < 0 ? 1 : 0;
  
    let normalizedValue = Math.abs(value);
    let exponent = Math.floor(Math.log2(normalizedValue));
    let mantissa = normalizedValue / Math.pow(2, exponent) - 1;
  
    let biasedExponent = exponent + 127;
  
    let signBinary = isNegative.toString(2);
    let exponentBinary = biasedExponent.toString(2).padStart(8, '0');
    let mantissaBinary = mantissa.toString(2).substring(2).padEnd(23, '0');
  
    let result = signBinary + exponentBinary + mantissaBinary;
  
    return result;
  }
  
  let fs = require('fs');
  let value = parseFloat(fs.readFileSync("input.txt").toString());
  
  if (isNumber(value)) {
    let result = numberToFloat(value);
    fs.writeFileSync('result.txt', result);
    console.log(result);
  } else {
    console.log("The input is not a number!");
  }
  