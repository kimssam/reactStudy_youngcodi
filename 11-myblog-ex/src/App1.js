import React, { useState } from 'react';
import { jsx } from '@emotion/react';

const App = () => {
    // let name ="김액트"
    //let name = useState("김액트") //state는 변수처럼 사용되는 공간이며 let 변수이름 = useState(초기값) 으로 사용한다.

    // state에 저장된 데이터를 변경하고 싶을 때는 어떻게 해야 할까?
    let [name,setName] = useState("맑음🌝")
    //  setName라는 함수는 state값을 '교체'하기 위해서 사용되는 함수
    //setName("리액트") //이렇게 하면 렌더 과정에서 state를 변화하는 함수가 있다면 반복해서 리렌더링 하게 됩니다.setState는 콜백으로 다시 렌더링을 트리거하기 때문이에요.그 과정 중에서 무한루프에 빠지게 되어 이런 에러가 발생한 거예요.
    let changeName = ()=>{
        // setName("흐림")
        (name=="맑음🌝") ? setName("흐림☔") : setName("맑음🌝")
    }

   
    return (
        <>
            <div className='app'>
                <header className='header'>
                    <h3>여행 블로그</h3>
                </header>
            </div>
            <button onClick={changeName}>오늘의 기분 선택</button> {name}

           
        </>
    );
};

export default App;