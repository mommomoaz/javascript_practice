// let n = prompt("반지름의 길이를 입력해주세요")
// console log(n*n*3.14)

// /정수로 바꾸는 법을 모르겠다.
//함수로 구하라고 했으므로..

function circle(n) {
const result = n * n *3.14;

return result;
} 

const r = prompt("원의 반지름을 입력하세요.");
console.log(circle(r));