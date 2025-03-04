import { memo } from "react";
const style ={
    height : "200px",
    backgroundColor : "beige",
    padding : "10px"
}



export const Child4 = memo(() =>{
    console.log("Child4 랜더링");

    return(
        <div style={style}>
            <p>Child4</p>
        </div>
    );
})