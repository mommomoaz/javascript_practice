// const a= prompt('이름을 입력해주세요');

// if (a=='김다정') {
//     console.log("안녕하세요. 저는 김다정입니다.");
// }


const name = prompt('이름을 입력하세요.');

console.log(`안녕하세요. 저는 ${name}입니다.`); 
/*
* es6부터는 backtick 문자열(``) 안에서 $와 중괄호로 표현식을 사용할 수 있습니다. 
* 이를 템플릿 리터럴(Template literals)이라 합니다.
*/

// 템플릿 리터럴에서는 아래와 같이 $와 중괄호{}를 사용하여 표현식을 표기할 수 있습니다.
// let a = 20;
// let b = 8;
// let c = "자바스크립트";
// let str = `저는 ${a+b}살이고 ${c}를 좋아합니다.`;
// console.log(str);   //저는 28살이고 자바스크립트를 좋아합니다.

// 문제를 이해를 잘못함.