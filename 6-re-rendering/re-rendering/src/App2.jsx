//두번째 메모이제이션 예제 : 변수 메모이제이션 useMemo()의 사용
import './App.css';
import { useState, memo } from 'react';
import {Child1} from "./components/Child1";
import { Child4 } from './components/Child4';
import { useCallback } from 'react';
import { useMemo } from 'react';

export const App= memo(() => {
  console.log("App 랜더링")

  const [num, setNum] = useState(0)

  //☆전등 켜고 끄는 상태 만듦
  const [light, setLight] = useState("전등 켜짐")
  const onToggleLight = () =>{
      if(light=="전등 켜짐") setLight("전등 꺼짐")
      else setLight("전등 켜짐")
  }

  const onClickButton = () =>{
    setNum(num+100)
  }  

  // ☆1)변수 메모이제이션 적용 전
  const complexValue = () =>{
    console.log("complex value");
    return num * num;
  };
  // ☆2)변수 메모이제이션 적용 후 콘솔창 확인하면 
  const memoizedValue = useMemo(() => {
    console.log("complex value");
    return num * num;
  }, [num]);

  return (
    <>
      <button onClick={onClickButton}>버튼</button>
      {/* ☆전등 스위치 */}
      <button onClick={onToggleLight}>전등 스위치</button>
      <p>{num}</p>      
      {/* complexValue()호출시 ()를 넣는다!! */}
      {/* <span>☆복잡한 값 : {complexValue()}</span> */}
      <span>☆복잡한 값 : {memoizedValue}</span>
    </>
  );
});

export default App;
