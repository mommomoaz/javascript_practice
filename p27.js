var myObj = new Object();

myObj.name = 'yujin';
myObj['point'] = 70;

myObj.hello = function(){
    return `이름은 ${this.name}이고,수학점수는 ${this.point}입니다.`;
};

console.log(myObj); 

// const keys = prompt('이름을 입력하세요').split(' ');
// const values = prompt('점수를 입력하세요').split(' ');
// const obj = {};

// for (let i=0; i<keys.length; i++) {
//   obj[keys[i]] = parseInt(values[i], 10);
// }

// console.log(obj);
//parseint 문자열을 정수로 바꾸는 함수 