import { memo } from "react";
const style ={
    height : "50px",
    backgroundColor : "lightgray",
}



export const Child2 = memo(() =>{
    console.log("Child2 랜더링");

    return(
        <div style={style}>
            <p>Child2</p>
        </div>
    );
})