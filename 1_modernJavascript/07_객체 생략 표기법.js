//07_객체 생략(shorthand) 표기법 : 객체의 속성명과 설정할 변수값이 같으면 생략할 수 있다.

const name = "김이름"
const age=25

const user={
    name : name,
    age : age,
}
console.log(user)

const user2={
    name,
    age,
}
console.log(user2)

