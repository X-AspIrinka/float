function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  
  function numberToFloat(value) {
    function calculateExponent(str) {
      let firstOneIndex = str.indexOf('1');
      let dotIndex = str.indexOf('.');
      if (dotIndex == -1){
          return -str.length+1;
      } 
      else{
        if (firstOneIndex < dotIndex) {
            return dotIndex - firstOneIndex - 1;
      }     
        else {
            return dotIndex - firstOneIndex;
      }
      }
    }
    
    let isNegative = value < 0 ? 1 : 0;

    let normalizedValue = Math.abs(value);
    let Binary = normalizedValue.toString(2);
    let binaryString = Binary.toString();
    console.log(binaryString);
    let exponent = calculateExponent(binaryString);
    console.log(exponent);
    mantissa = '';
    for (let i = binaryString.indexOf('1')+1; i < binaryString.length;i++){
    if (binaryString[i]=='.') continue;
    else mantissa+=binaryString[i];
}
console.log(mantissa);

    let biasedExponent = exponent + 127;
  
    let signBinary = isNegative.toString(2);
    let exponentBinary = biasedExponent.toString(2).padStart(8, '0');
    let mantissaBinary = mantissa.padEnd(23, '0');
  
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
  