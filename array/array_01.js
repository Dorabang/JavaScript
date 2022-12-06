// 배열 (Array's Method)
let members = ['unknown0123','안녕', '심심해','힘들다','이름입니다'];

console.log(members);

/* 
// delete 로 배열 삭제 시, empty 값이 남아있음

delete members[0];
console.log(members); */

// splice : 배열 삭제 (startIndex, deleteCount, item)
members.splice(0, 1); // 첫번째 값은 위치를 지정, 두번째 값은 삭제할 갯수 지정
console.log(members);

// splice : 배열 추가 (item)
members.splice(0, 1, 'hellow', 'what'); // 첫번째 값은 위치를 지정, 두번째 값은 삭제할 갯수 지정
console.log(members);

// splice : 배열 수정
members.splice(2, 1, '따분해'); // 첫번째 값은 위치를 지정, 두번째 값은 삭제할 갯수 지정
console.log(members);