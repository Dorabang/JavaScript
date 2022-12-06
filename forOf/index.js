// for of 구문
let influencer = ['suwonlog', 'small.tiger', 'Minam.ludens', 'cu_convenience24']

// for
for (let i = 0; i < influencer.length; i++) {
  console.log(influencer[i]);
}

// for of
for (let element of influencer) {
  console.log(element);
}

// for in
for (let index in influencer) {
  console.log(influencer[index]);
}