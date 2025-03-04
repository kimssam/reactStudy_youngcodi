import { useState , memo, useCallback } from "react";
import {Child1} from "./components/Child1";
import {Child4} from "./components/Child4";

//첫번째 메모이제이션 예제

export const App = memo(() =>{
  console.log("App 랜더링");

  const [num, setNum] = useState(0);

  const onClickButton = () =>{
    setNum(num+1);
  }

  // const onClickReset =()=>{
  //   setNum(0);
  // }

  //함수 메모이제이션
  const onClickReset = useCallback(() =>{
    setNum(0);
  },[])

  return (
    <>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset}/>
      <Child4/>
    </>
  )
});