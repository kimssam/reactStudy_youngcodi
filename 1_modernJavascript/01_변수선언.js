 /*리액트 실습폴더는 c 드라이브에 direct로 reactStudy폴더 만들고 시작한다!!!*/
// 01_변수선언 =========

// 1)기존의 var를 이용한 변수선언
var val1 = "var변수"
console.log(val1)

val1 = "var 변수 덮어쓰기"
console.log(val1)

var val1 = "var변수를 재선언"
console.log(val1)

//2)es6의 let을 이용한 변수선언
let val2 = "let 변수"
console.log(val2)

val2="let변수는 덮어쓰기 가능하나 재선언은 안됨"
console.log(val2)

// let val2 = "let변수는 덮어쓰기 가능하나 재선언은 안됨"

//3)es6의 const를 이용한 변수선언
const val3= "const  변수"
console.log(val3)

// val3 = "let 덮어쓰기도 안되고 재선언도 안됨"

// const val3 ="let 덮어쓰기도 안되고 재선언도 안됨"

console.log("const가 기본타입은 덮어쓰기가 안되나 오브젝트 타입은 덮어쓰기가 가능함")

const obj1 ={
    name : "김이름",
    age : 20
}
// JSON : javascript object notation 자바스크립트 문법의 오브젝트 표기법
console.log(obj1)

obj1.name = "다른이름"
console.log(obj1)

obj1.address = "수원시"
console.log(obj1)

const arr1 = ["dog","cat"]
console.log(arr1)

arr1[0] ="bird"
console.log(arr1)

arr1.push("monkey")
console.log(arr1)

console.log("리액트에서는 const를 가장 많이 사용한다. 대부분은 const를 사용하고 State로 관리하지 않으면서 처리 도중에 값을 덮어써야 하는 경우만 변수 선언하는데 let을 사용")