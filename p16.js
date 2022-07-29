// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거
// 문장이 거꾸로 출력되는 프로그램 
function reverse(str) {
    let reverStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        // 1.
        //reverStr += str.charAt(i); // str의 i번째 빈 문자열에 추가
 
        // 2.
        reverStr += str[i]
    }
    return reverStr;
}
 
console.log(reverse("거꾸로")); // olleH