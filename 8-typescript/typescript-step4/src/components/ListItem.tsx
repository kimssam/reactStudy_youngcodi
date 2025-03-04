//ListItem.tsx

//사용자 정보 타입 정의
/* type User={
    id:number;
    name:string;
    age:number;
    personalColor:string;
  } */
import type {User} from "../types/user";
import type {FC} from "react";
//FC함수 컴포넌트 자체 타입 정의의 FC는 타입 정의에 암묵적으로 children을 포함한다
export const ListItem:FC<User> = (props)=>{
    const {id, name, age, personalColor, hobbies }= props;
    return(
        <p style={{color:personalColor}}>
            {id} : {name} ({age}) [취미 : {hobbies?.join(" / ")}]
        </p>
    )
}