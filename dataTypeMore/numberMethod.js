// Number
let myNumber = 0.36684;

// toFixed(0 ~ 100)
console.log(myNumber.toFixed(2));
console.log(typeof myNumber.toFixed(2)); // 문자열로 인식

console.log(Number(myNumber.toFixed(2))); // 숫자열로 형변환
console.log(typeof Number(myNumber.toFixed(2)));
console.log(+myNumber.toFixed(2)); // 변수 앞에 +를 붙여주면 숫자열로 형변환
console.log(typeof +myNumber.toFixed(2));


// toString (2 ~ 36) 파라미터에 전달된 숫자의 진수로 변환하여 문자열로 표기
let myNumber2 = 255;

console.log(myNumber2.toString(2));
console.log(myNumber2.toString(8));
console.log(myNumber2.toString(16));

// console.log(255.toString(2)); ---> 소수점으로 인식
console.log(255..toString(2));
console.log((255).toString(8));