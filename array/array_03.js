// 배열 (Array's Method)
let members = ['unknown0123','안녕', '심심해','힘들다','이름입니다'];

console.log(members);

// 배열의 첫 요소를 삭제: shift()
members.shift();
console.log(members);

// 배열의 마지막 요소를 삭제: pop()
members.pop();
console.log(members);

// 배열의 첫 요소로 값 추가 : unshift(value);
members.unshift('unknown987');
console.log(members);

// 배열의 마지막 요소로 값 추가 : push(value);
members.push('성명');
console.log(members);