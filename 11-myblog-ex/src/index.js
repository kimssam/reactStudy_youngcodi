import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './app.css';
import App from './App2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//기본 세팅된 Index 파일에 써있는것 처럼 reportWebVitals() 에 console.log를 넣어주면 개발창을 통해 앱의 퍼포먼스시간들을 분석하여 object형태로 보여줍니다.
reportWebVitals();
