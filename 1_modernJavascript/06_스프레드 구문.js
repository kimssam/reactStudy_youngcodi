//06_es6의 스프레드 구문 : 배열 내부의 값을 순서대로 꺼낼 수 있다.

const arr1 = [1,2]
console.log(arr1)
console.log(...arr1) //배열안의 값만 결과로 출력

const summaryFunc = (num1, num2) => console.log(num1+num2)

//일반적으로 배열값을 전달하는 경우
summaryFunc(arr1[0],arr1[1])
//스프레드 구문을 이용하는 경우
console.log("스프레드 구문을 이용하는 경우")
summaryFunc(...arr1)

//배열 분할기법에서 남은 요소를 변수에 담을 때 스프레드 구문 활용가능
const arr2=[1,2,3,4,5]
const[num1,num2,...arr3] = arr2
console.log(num1)
console.log(num2)
console.log(arr3)

//요소 복사와 결합
const arr4 = [10,20]
const arr5 = [30,40]

console.log("==arr4를 복사하는데 spread구문을 활용==")
const arr6 = [...arr4]

console.log(arr4)
console.log(arr6)

//두 개의 배열 결합
const arr7 = [...arr4,...arr5]
console.log(arr7)

//객체에도 복사나 결합을 활용 가능
const obj2 = {
    val1:10, 
    val2:20
}
const obj3 = {
    val3:30, 
    val4:40
}

console.log("===스프레드 구문을 활용하여 복사===")
const obj4 = {...obj2}
console.log(obj4)

console.log("===스프레드 구문을 활용하여 결합===")
const obj5 = {...obj2, ...obj3}
console.log(obj5)

//등호를 이용해서 복사하면 안되는 이유
const arr8 = arr4;
console.log(arr8)
arr8[0] = 100
console.log("arr8 : "+arr8)
console.log("arr4 : "+arr4)

console.log("===스프레드 구문을 활용하여 복사시===")
const arr9 = [...arr4]
arr9[0] = 200
console.log("arr9 : "+arr9)
console.log("arr4 : "+arr4)
console.log("스프레드 구문을 사용하면 '완전히 새로운 배열'을 만들기 때문에 기존 배열에 영향을 주지 않는다.")

