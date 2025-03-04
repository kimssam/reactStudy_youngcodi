import {useState, useEffect} from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = ()=>{
    

    console.log("랜더링")
    //state정의
    const [num, setNum] = useState(0);

    const onClickButton = () => {
      // alert("버튼 클릭됨")
      setNum(num+1)
    }   
    const [opinion, setOpinion] = useState('나의 의견')
    const agreeButton = () =>{
      if(opinion=='나의 의견') setOpinion('찬성')
      else setOpinion(opinion=='찬성' ? '반대' : '찬성')
    }

    //☆useEffect의 역할 : 어떤 값이 변했을 때 한해서만 어떤 처리를 한다.
    useEffect(()=>{
      alert("테스트")
    },[num, opinion]) //useEffect()의 두번째 인자로 꼭 배열을 넣어야 하는데 배열안의 변수값이 변했을 때에만 첫번째 인자의 함수가 동작한다. 두번째 인수에 []을 지정하면 재랜더링을 빼고 랜더링시에만 함수가 동작하겠다라는 의미임

    // useEffect(()=>{
    //   alert("테스트")
    // },[])


    //분홍색 스타일
    /*
    const contentPinkStyle={
      color:"pink",
      fontSize:"20px"
    }
    */
    // return null;
    //return 이후에는 한개의 태그로 둘러싸여 있어야 한다.
    return (
      <>
        {console.log("test")}
        <h1 style={{color:"red"}}>안녕하세요. 리액트입니다.</h1>        
        <ColoredMessage color="blue">반갑다. 리액트!</ColoredMessage>
        <ColoredMessage color="pink">리액트! 널 정복하겠어!</ColoredMessage>
        <mark>JSX의 중요한 규칙 중 하나는 return 이후는 한 개의 태그로 감싸야 한다!!</mark>
        <button onClick={onClickButton}>좋아요 버튼</button>
        <h1>👍{num}</h1>
        <button onClick={agreeButton}>찬성/반대 투표</button>
        <h1>{opinion}</h1>
      </>
    )
    //html파일 안에서 javascript를 기술할 때에는 {}안에 기술한다. 함수명은 ()생략
  }