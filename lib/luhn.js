function luhnFormula (number){
  console.log(typeof number);
  //  convert to array and start from the digit before the last one
  var arrayNum = number.toString().split("").slice(0, -1);
  console.log(arrayNum);
  var doubbleDigit = 0;
  //  loop backward through the number
  // leave the even index and put them in new array, double the num in
  //  the odd index/check if its >9 if so substract from 9 and then put
  //  in the new array
  for ( var i = (arrayNum.length - 1); i >= 0; i -= 2){
    arrayNum[i] = Number(arrayNum[i]) + Number(arrayNum[i]);
    if (arrayNum[i] > 9){
      arrayNum[i] -= 9 ;
    }
  }
  var arrayNumber = arrayNum.map(Number);
  var initSum = arrayNumber.reduce(function(a, b){
    return a + b;
  });
  var lastDigit = number.toString().slice(-1)[0];
  var sum = initSum + Number(lastDigit) ;
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
luhnFormula(79927398713)
module.exports = luhnFormula;


