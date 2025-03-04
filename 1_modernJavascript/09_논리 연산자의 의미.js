//09_논리 연산자 (&&, ||)의 의미

//논리 연산자를 이용한 조건 분기
const flag1 = true
const flag2 = false

if(flag1 || flag2){
    console.log("두 플래그 중 어느 하나는 true입니다.")
}
if(flag1 && flag2){
    console.log("두 플래그가 모두 true입니다.")
}

//case1)
const num = null;
const fee = num || "금액을 설정하지 않았습니다."
console.log(fee)
const num2 = 100;
const fee2 = num2 || "금액을 설정하지 않았습니다."
console.log(fee2)
console.log('||연산자는 연산자의 왼쪽이 false라고 판정하면 오른쪽 반환한다.')

//case2)
const num3 = 1000
const fee3 = num3 && "무언가가 설정되었습니다."
console.log(fee3)
console.log('&&연산자는 연산자의 왼쪽이 true라고 판정하면 오른쪽 반환한다.')

console.log("======es6의 정리=========")
console.log(
    '1)변수를 선언할 때에는 const와 let을 사용한다.'+
    '2)템플릿 문자열을 이용하면 문자열 안에서 쉽게 자바스크립트를 전개할 수 있다.'+
    '3)화살표 함수에는 표기법을 포함해 다양한 특징이 있다.'+
    '4)분할 대입을 이용해서 객체나 배열로부터 값을 추출할 수 있다.'+
    '5)인수나 분할 대입시 디폴트값을 사용할 수 있다.'+
    '6)스프레드 구문을 이용해 배열이나 객체를 모으거나 복사할 수 있다.'+
    '7)for문을 사용하지 않고도 map, filter함수를 이용해서 루프 처리를 할 수 있다.'+
    '8)삼항 연산자를 이용해 분기를 짧게 작성할 수 있다.'+
    '9)논리 연산자 &&와 ||의 올바른 의미를 알고 사용하자!'

)




