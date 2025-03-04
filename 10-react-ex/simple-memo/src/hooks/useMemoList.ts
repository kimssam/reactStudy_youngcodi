//useMemoList.ts

import { useCallback, useState } from "react"


//메모 목록에 관한 사용자 정의 훅
export const useMemoList = () =>{
    //메모 목록 state
    const [memos, setMemos] = useState<string[]>([]);
    
    //메모 추가 로직
    const addTodo = useCallback((text:string)=>{
        //상태변경을 감지하는 새로운 배열생성
        const newMemos = [...memos];
        //텍스트 박스 입력 내용을 메모 배열에 추가
        newMemos.push(text);
        setMemos(newMemos);
    },[memos]);

    //메모 삭제 로직
    const deleteTodo = useCallback((index:number)=>{
        const newMemos = [...memos];
        //slice()는 배열의 일부분을 추출하여 새로운 배열을 반환하여 원본 배열은 변경되지 않고, splice()는 원본배열에서 일부분을 추출하여 원본배열을 바꿔준다!
        newMemos.splice(index,1);
        setMemos(newMemos);
    },[memos]);

    return {memos, addTodo, deleteTodo}


}