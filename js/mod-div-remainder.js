(function(){

let num = document.getElementById("num"),
    opr = document.getElementById("opr"),
    numCalc = document.getElementById("number"),
    result = document.getElementById("result");

function mod(num, mod) {
  var remain = num % mod;
  return Math.floor(remain >= 0 ? remain : remain + mod);
}

function rem(num, denom) {
  return Math[num > 0 ? 'floor' : 'ceil'](num % denom);
}

function div(num, denom) {
  return Math[num > 0 ? 'floor' : 'ceil'](num / denom);
}

function showResult(number, method, opr) {
  // console.log(method);
  let output = "output here";
  switch(method) {
    case "mod":
      output = mod(number, opr);
      break;
    case "rem":
      output = rem(number, opr);
      break;
    case "div":
      output = div(number, opr);
      break;
    default:
      output = "no value";
  }
  let resultString = `${number} ${method} ${opr} = ${output}`;
  return resultString;
}

let radios = document.forms["number"].elements["calculation"];
let calcMethod = "";
for (let i=0, iLen=radios.length; i<iLen; i++) {
  radios[i].onclick = function() {
    calcMethod = this.value;
  };
  showValue();
}

function showValue() {
  result.innerHTML = showResult(num.value, calcMethod, opr.value);
  return false;
}

// Listens for a form submit action: 
if (typeof event === "undefined") {
  numCalc.onsubmit = showValue; // for Firefox
}
else {
  numCalc.addEventListener("submit", showValue);
  event.preventDefault();
}

})();
