/* const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function(a, b){
    console.log(a - b);
  },
  divide: function(a, b){
    console.log(a / b);
  },
  multiplication: function(a, b){
    console.log(a * b);
  },
  power: function(a, b) {
    console.log(a ** b);
  }
};

calculator.add(5, 8);
calculator.minus(63, 18);
calculator.multiplication(7, 19);
calculator.power(2, 5);
 */


const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function(a, b){
    return a - b;
  },
  divide: function(a, b){
    return a / b;
  },
  multiplication: function(a, b){
    return a * b;
  },
  power: function(a, b) {
    return a ** b;
  }
};

const addResult = calculator.add(5, 8);
const minusResult = calculator.minus(63, addResult);
const multiResult = calculator.multiplication(minusResult, 19);
const powerResult = calculator.power(multiResult, 5);

// console.log 사용 시에는 값을 저장하는 것이 아니라, 일시저장의 느낌이 강함. 일회성 값.
// return 사용 시, console.log를 사용했을 때와 달리 값을 저장하여 보여주고 서로 상호연결하여 사용할 수 있음.

console.log(addResult);
console.log(minusResult);
console.log(multiResult);
console.log(powerResult);