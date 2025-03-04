//MemoList.tsx
import {FC} from "react"
import styled from "styled-components"; 
type Props={
    memos:string[];
    onClickDelete:(index:number)=>void;
}
export const MemoList:FC<Props> = (props) =>{
    const {memos, onClickDelete} = props;

    return(
        <Scontainer>
            <p>메모 목록</p>
            <ul>
                {memos.map((memo, index)=>(
                    <li key={index}>
                        <SMemoWrapper>
                            <p>{memo}</p>
                            <SButton onClick={()=>{onClickDelete(index)}}>삭제</SButton>
                        </SMemoWrapper>
                    </li>
                ))}
            </ul>
        </Scontainer>
    )
}


const SButton = styled.button`
    margin-left:15px;
`
const Scontainer = styled.div`
    border:1px solid gray;
    padding:20px;
    margin:10px;
`
const SMemoWrapper = styled.div`
    display:flex;
    align-items :center;
`