import React, { useState } from 'react';
import { jsx } from '@emotion/react';

const App = () => {
    // let name ="김액트"
    //let name = useState("김액트") //state는 변수처럼 사용되는 공간이며 let 변수이름 = useState(초기값) 으로 사용한다.

    // state에 저장된 데이터를 변경하고 싶을 때는 어떻게 해야 할까?
    let [name,setName] = useState("맑음")
    //  setName라는 함수는 state값을 '교체'하기 위해서 사용되는 함수
    //setName("리액트") //이렇게 하면 렌더 과정에서 state를 변화하는 함수가 있다면 반복해서 리렌더링 하게 됩니다.setState는 콜백으로 다시 렌더링을 트리거하기 때문이에요.그 과정 중에서 무한루프에 빠지게 되어 이런 에러가 발생한 거예요.
    let changeName = ()=>{
        // setName("흐림")
        (name=="맑음") ? setName("흐림") : setName("맑음")
    }

    const changeInput = (event)=>{
        setInputData(event.target.value)
        console.log(inputData)
    }

    let [title, setTitle] = useState(['항공권 예약하기', '여행지 맛집 검색하기', '여행가방 준비하기'])
    
    let [num, changeNum] = useState([0,0,0])

    let [inputData, setInputData] = useState('')

    let [modal,setModal] = useState(0) // 플래그, 0 이면 비출력, 1이면 출력 => false라면 비출력, true라면 출력

    let [titleIdx, setTitleIdx] = useState(0)  // 제목을 클릭하면 해당 제목의 인덱스를 기억하는 스테이트

    return (
        <>
            <div className='App'>
                <header className='header'>
                    <h3>여행 블로그</h3>
                </header>
            </div>
            <button onClick={changeName} className='conditionBtn'>오늘의 기분 선택</button> {name}

            {/* 코드추가 */}
            <br /><input type="text" onChange={changeInput} placeholder='글제목' className='titleInput'/> <button onClick={()=>{
                let copyTitle = [...title]
                let copyNum = [...num]
                copyTitle.unshift(inputData)
                copyNum.unshift(0)
                setTitle(copyTitle)
                changeNum(copyNum)
            }}>게시판 글 발행하기</button>
            {/* npm install styled-components 설치, npm install @emotion/react @emotion/styled 설치  */}
            <br/>
           
            <button onClick={function(){
                if(modal == 0){
                setModal(1);
                }else{
                setModal(0);
                }
            }}>상세보기 스위치</button>

            {title.map(function(a,b){
                return(
                    <div className='list' key={b}>
                        <Title a={a} b={b} setTitle={setTitleIdx} num={num} changeNum={changeNum} title={title} setTitle={setTitle} setModal={setModal}>
                        </Title>
                    </div>
                );
            })
            }

            {
                modal == 1 ? <Modal name="글쓴이" title={title} idx={titleIdx} ></Modal> : null
            }

            <style jsx>{`
                *{
                    margin:0;
                    padding:0
                }
                .header{
                    background-color: black;
                    width: 100%;
                    color: white;
                    padding: 50px;
                    text-align: center;
                }
                .list{
                    padding:20px;
                    border-bottom:2px solid gray;
                }
                .conditionBtn{
                 margin-left:5px;
                 }
                .titleInput{
                padding:10px;
                width:70%;
                margin-left:5px;
                }
                .titleInput+button{
                padding:10px;
                }
                
                .modal{
                margin-top: 20px;
                padding: 20px;
                background-color: darkgrey;
                text-align: left;
                }

            `}</style>
        </>
    );
};

//함수 생성
function Title(props){
    return(
        <div>
            <h2 onClick={function(){
                // 1. 제목을 클릭시 상세보기가 열려야 한다.
                props.setModal(1);
                // 2. 제목을 클릭시 해당 인덱스를 저장
                props.setTitleIdx(props.b);
                }}>{props.a}
                <span onClick={function(){
                    let copyNum = [...props.num];
                    copyNum[props.b] = copyNum[props.b]+1;
                    props.changeNum(copyNum);
                    }}>👍</span>{props.num[props.b]}
                <p>{new Date().getMonth()+1}월 {new Date().getDate()}일</p>
                <button onClick={()=>{
                    props.setModal(0);  // 상세보기 끄기
                    let copyTitle = [...props.title]
                    let copyNum = [...props.num]
                    copyTitle.splice(props.b,1)
                    copyNum.splice(props.b,1)
                    props.setTitle(copyTitle)
                    props.changeNum(copyNum)
                }}>삭제</button>
            </h2>
            
        </div>
    );
}

function Modal(props){  // 컴포넌트

    let [test,setTest] = useState('주제에 맞는 자세한 내용을 적어주세요');
  
      // 부모 컴포넌트가 넣어준 속성을 꺼내 볼수 있다.
    return(
      <div className='modal'>
        <h4>{props.name}</h4>
        <p>{props.title[props.idx]}</p>
        <p>상세 내용 : {test}</p>
      </div>
    );
  }
  
  


export default App;