//08_map과 filter의 활용

//1)기존 배열에 루프를 돌려 처리하는 for문
const nameArr = ['송혜교','채정안','김희선']
for(let index=0; index<nameArr.length; index++){
    console.log(nameArr[index])
}

//2)map() 함수의 활용 :for문에 비해서 간단하게 루프를 돌릴 수 있다.
const nameArr2 = nameArr.map((name)=>{
    return name;
});
console.log(nameArr2)
console.log("==map()함수를 이용해서 루프를 돌려 원소를 하나씩 출력==")
nameArr.map((name)=>console.log(name))

//3)filter() 함수의 활용 : 조건에 일치하는 값만 배열로부터 추출 가능하다.
const numArr = [1,2,3,4,5]
const oddNumArr = numArr.filter((num)=>{
    return num%2==1
})
console.log(oddNumArr)

//4)for문의 index를 이용해 요소를 순서대로 추출
for(let i=0; i<nameArr.length; i++){
    console.log(`${i+1}번째는 ${nameArr[i]}입니다.`)
}

//5)map()함수의 인수를 이용해 요소를 순서대로 추출
console.log("==map()함수의 인수를 이용해 요소를 순서대로 추출==")
nameArr.map((name,i)=>console.log(`${i+1}번째는 ${name}입니다.`))

//selfEX)다음의 배열 중 세종대왕을 제외한 나머지 위인들에는 이름 뒤에 "장군"을 붙여 콘솔창에 찍어주세요(map함수를 활용)
const generalArr=['강감찬','세종대왕','이순신','맥아더']

const generalArrResult = generalArr.map((name)=>{
    if(name==='세종대왕'){
        return name;
    }else{
        return `${name} 장군`
    }
})
console.log(generalArrResult)

//값도 같고 타입까지 같을 때 ===을 사용
const numArr2 = [1,1,"1",1]
const plusNumArr = numArr2.map((num)=>{
    if(num===1){ //===가 값과 타입이 모두 다름을 의미
        return num+1
    }else{
        return "숫자가 아님"
    }
})
console.log(plusNumArr)













