//02_템플릿 문자열 =========

//1)기존의 문자열과 변수 결합 방법

const name1="김이름"
const age=20
const msg = "내 이름은"+name1+"입니다. 나이는"+age+"살입니다."

console.log(msg)

//2)es6의 템플릿 문자열 사용시에는 백틱(역따옴표)을 사용하고 ${변수이름}을 넣을 수 있다.
const msg2 = `내 이름은 ${name1} 입니다. 나이는 ${age}살입니다.`
console.log(msg2)

function sayHello(){
    return "안녕하세요"
}

//3)${} 안에서 변수값 연산도 가능하다.
const month = 1
const msg3 = `여러분 ${sayHello()}! 오늘부터 ${month*3}월입니다.`
console.log(msg3)









