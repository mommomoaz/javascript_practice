function getRandomInt(1, 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
if (n%3===0&&n===0) {   
    console.log('짝');    
}
else{
    console.log(n);
}

//3의 배수일때 짝을 내놓고, 아닐때 n을 내놓게 하는것은 이전에 해본 유형이라 상상할 수 있었다.
//다만 랜덤숫자를 범위 없이 지정하는 부분을 모르겠다...


const n = prompt('숫자를 입력하세요.');

if (n%3 == 0) { // 나머지 연산 %는 n을 3으로 나누었을때 몫이 아닌 나머지 값을 반환합니다.
    console.log('짝');
} else {
    console.log(n);
}
// 너무 복잡하게 생각한것같다.ㅋㅋ 세미콜론 찍는거 까먹지 말기.