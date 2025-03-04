//05_디폴트값 : 값이 존재하지 않을 때 초기값을 설정하는 방법으로 많이 사용됨

 const sayHello = (name) => console.log(`${name}님, 안녕하세요`)
 sayHello("손예진")
 sayHello()

 const sayHello2 = (name="게스트") => console.log(`${name}님, 안녕하세요`)
 sayHello2()
 sayHello2("현빈") //매개변수를 넣으면 디폴트값보다 우선해서 사용된다!

 const herProfile={
    age : 25
 }
console.log("==객체 분할 대입 시에도 디폴트값을 이용할 수 있다.==")
 const {name2} = herProfile
 const msg = `${name2}님, 안녕하세요`
 console.log(msg)
 const {name1="한혜진"} = herProfile
 const msg2 = `${name1}님, 안녕하세요`
 console.log(msg2)

 