var stringToNumber = function(s) {
  var isNeg = s[0] === "-";
  var i = isNeg ? 1 : 0;
  var ret = 0;

  for (;i < s.length; ++i) {
    ret *= 10;
    ret += parseInt(s[i]);
  }

  return isNeg ? -ret : ret;
};

console.log(stringToNumber("1234") === 1234);
console.log(stringToNumber("-1234") === -1234);
console.log(stringToNumber("0") === 0);


var numberToString = function(num) {
  if (num === 0) {
    return "0";
  }
  var isNeg = false;
  var s = "";

  if (num < 0) {
    isNeg = true;
    num *= -1;
  }

  while (num) {
    s += (num % 10);
    num = Math.floor(num / 10);
  }
  return (isNeg ? "-" : "") + s.split("").reverse().join("");
};

console.log(numberToString(1234) === "1234");
console.log(numberToString(-1234) === "-1234");
console.log(numberToString(0) === "0");