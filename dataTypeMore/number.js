// 숫자 표기법
let millionaire = 1000000000;
let myNumber = 1e9; // 지수 표기법

console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);

console.log(25e5 === 2500000); // e 왼쪽 수에 오른쪽 수만큼 10의 거듭제곱을 곱한 값
console.log(16e-5 === 0.00016); // e 왼쪽 수에 오른쪽 수만큼 10의 거듭제곱을 나눈 값

// 16진법 (Hexadecimal)
let hex1 = 0xff;
let hex2 = 0xFF;

// 8진법 (Octal)
let octal = 0o377;

// 2진법 (binary numeral system)
let binary = 0b11111111;

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);