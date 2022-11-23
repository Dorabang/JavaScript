let current = 1; // 현재 값을 할당할 변수 선언
let previous = 0; // 이전 값을 할당할 변수 선언

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous; // 이전 값 저장
  previous = current; // 이전 값에 현재 값을 넣어
  current = previous + temp; // 이전 값과 현재 값의 합을 구함
}