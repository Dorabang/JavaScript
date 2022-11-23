let userOrder1 = {
  카페라떼: 3500,
  아메리카노: 1500,
  초코라떼: 5500,
  자몽티: 4500,
  카푸치노: 4500,
};

let userOrder2 = {
  요거트스무디: 5500,
  아메리카노: 1500,
  딸기바나나주스: 6500,
  녹차라떼: 4800,
  흑당버블티: 5500,
  아이스티: 4500,
};

function priceCalc(order) {
  let totalPrice = 0;

  for (let price in order) {
    totalPrice += order[price];
  }

  console.log(`총 결제금액은 ${totalPrice}원 입니다.`);

  if (totalPrice >= 25000) {
    console.log("2만5천원 이상 결제 시 무료로 배달됩니다.");
  } else {
    console.log("2만 5천원 미만 결제 시 배달비 3,000원이 추가됩니다.");
  }
}

priceCalc(userOrder1);
priceCalc(userOrder2);