import React from "react";
import ReactDOM from "react-dom"
import {App} from "./App"


//ReactDOM이 render()함수를 제공한다. 첫번째 인수로 render하는 대상(함수), 두번째 인수로 render의 위치를 지정한다.
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
, document.getElementById("root"));
