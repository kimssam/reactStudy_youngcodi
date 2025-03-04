//04_분할 대입 =========

//1)기존의 분할 대입을 사용하지 않았을 경우 코드

const myProfile = {
    name : "김이름",
    age : 20
}
const msg =`내이름은 ${myProfile.name}입니다. 나이는 ${myProfile.age}살입니다.`
console.log(msg)

//2)es6의 객체 분할 대입
const herProfile = {
    herName : "김삼순",
    herAge : 30,
    herAddress : "서울시"
}
const {herName, herAge} = herProfile;
const msg2 =`그녀 이름은 ${herName}입니다. 나이는 ${herAge}살입니다.`
console.log(msg2)

//일부만 추출
const {herAddress} = herProfile;
console.log(herAddress);

//추출한 속성에 :으로 별명 지정
const yourProfile ={
    name : "니이름",
    age : 25
}
const {name:yourName, age:yourAge} = yourProfile
const msg3 = `내 이름은 ${yourName}이고 나이는 ${yourAge} 살입니다.`
console.log(msg3)

//배열 인덱스를 지정해서 분할 대입
const hisProfile = ["현빈", 27]
const msg4 = `그의 이름은 ${hisProfile[0]}이고 나이는  ${hisProfile[1]} 살입니다.`
console.log(msg4)
const [hisName, hisAge] = hisProfile
const msg5 = `그의 이름은 ${hisName}이고 나이는  ${hisAge} 살입니다.`
console.log(msg5)

const [hisName2] = hisProfile
console.log(hisName2)