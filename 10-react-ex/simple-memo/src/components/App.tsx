import {useState, ChangeEvent, useCallback} from "react"
import styled from "styled-components";
import { MemoList } from "./MemoList";
import {useMemoList} from "../hooks/useMemoList";

export const App = () =>{
    //사용자 정의 훅으로 각각 얻기
    const {memos, addTodo, deleteTodo} = useMemoList();
    //텍스트 박스 useState
    const [text, setText] = useState<string>("");
    //텍스트 박스 입력시 입력 내용을 state에 설정
    const onChangeText = (e:ChangeEvent<HTMLInputElement>)=> setText(e.target.value);

    //[추가]버튼 클릭시
    const onClickAdd = () =>{
        addTodo(text);
        setText("");
    }
    //[삭제]버튼 클릭시
    const onClickDelete = useCallback(
        (index:number)=>{
            deleteTodo(index);
        },[deleteTodo]
    );

    return(
        <div>
            <h1>간단 메모 애플리케이션</h1>
            <input type="text" value={text} onChange={onChangeText}/>
            <SButton onClick={onClickAdd}>추가</SButton>
            <MemoList memos={memos} onClickDelete={onClickDelete}/>
        </div>
    )   
}

const SButton = styled.button`
    margin-left:15px;
`