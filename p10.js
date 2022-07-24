var star = '';
for (var i = 0; i < 5; i++) {
    for (var j = 4; j > i; j--) {
        star += ' ';
    }
    for (var k = 0; k <= (i * 2); k++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);



// 중첩 if문 

// 중첩 if문은 바깥쪽에 있는 조건문인 조건식1을 만족해야만 안쪽의 있는 조건문인 조건식2를 검사한다.