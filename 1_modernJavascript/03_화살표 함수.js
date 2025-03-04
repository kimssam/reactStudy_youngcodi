//03_화살표 함수 =========

// 1)기존의 함수 사용방법

function fun1(val){
    return val
}

console.log(fun1("function1 입니다."))

const fun2 = function (value){
    return value
}
console.log(fun2("function2 입니다."))

//2)es6의 화살표 함수
const fun3 = (val)=>{
    return val;
}
console.log(fun3("function3 입니다."))

//3)화살표 함수 사용시 주의사항 : 매개변수가 하나일 때에는 ()생략가능, 2개이상일 때에는 () 생략 불가능
const fun4 = val =>{
    return val
}
console.log(fun4("function4 입니다."))

/* 함수의 매개변수가 2개이상일 때에는 ()를 꼭 넣는다!
const fun5 = val1,val2 =>{
    return val1+val2;
} 
*/

const fun5 = (val1,val2) =>{
    return val1+val2
}
console.log(fun5("소괄호","생략가능,불가능 여부"))

const fun6 = (num1, num2) => num1+num2
console.log(fun6(10,20))

//반환값이 여러 행일 때에는 ()로 감싼후 리턴 가능
const fun7 = (val1, val2) => (
    {
        name:val1,
        age:val2
    }
)
console.log(fun7("김이름",20))



