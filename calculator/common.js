const calculator = {
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