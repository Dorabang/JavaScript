// 배열에서 특정 값 찾기 (indexOf / lastIndexOf)

let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];

/* 배열에서 특정 값을 찾으려면 indexOf 메소드를 사용하면 됩니다. array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인할 수 있습니다.

만약 포함되어 있다면, item이 있는 인덱스가 리턴됩니다.
포함되어 있지 않다면, -1이 리턴됩니다.
여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴됩니다. */
console.log(brands.indexOf('Kakao'));
console.log(brands.indexOf('Daum'));

// indexOf 와 반대로 탐색을 뒤에서 부터 시작하는 lastIndexOf
console.log(brands.lastIndexOf('Kakao'));
console.log(brands.lastIndexOf('Daum'));

// 배열에서 특정 값이 있는지 확인하기 (includes)
console.log(brands.includes('Kakao'));
console.log(brands.includes('Daum'));

// 배열 뒤집기 (reverse)
console.log(brands);
brands.reverse();
console.log(brands);

// 배열 메소드 참고 링크
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array