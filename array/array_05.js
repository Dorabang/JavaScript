let fruits = ['사과', '바나나', '포도']

// 배열의 항목들을 순환하며 처리하기
fruits.forEach(function (item, index, array) {
  console.log(item, index)
})

// 인덱스 위치에서부터 여러개의 항목 제거하기

let vegetables = ['양배추', '순무', '무', '당근']
console.log(vegetables)
// ["양배추", "순무", "무", "당근"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// 배열에서 항목을 제거하는 방법
// pos 인덱스부터 n개의 항목을 제거함

console.log(vegetables)
// ["양배추", "당근"] (원 배열 vegetables의 값이 변함)

console.log(removedItems)
// ["순무", "무"] 삭제된 값 확인