import React from 'react';

let simpleComponent=0;

const SimpleComponent = () => {
    simpleComponent++;
    console.log(`simpleComponent 렌더링 횟수: ${simpleComponent}`);
    
    return (
        <div>
            <h2>간단한 컴포넌트</h2>
            <p>이 컴포넌트는 렌더링이 간단합니다.</p>
        </div>
    );
};

export default SimpleComponent;
