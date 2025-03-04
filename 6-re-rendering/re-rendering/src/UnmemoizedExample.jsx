//두번째 메모이제이션 예제 =>1)메모이제이션 적용 전

// UnmemoizedExample.js
import React, { useState } from 'react';

// 계산 비용이 높은 컴포넌트
const ExpensiveComponent = () => {
    console.log('메모이제이션 적용 전 :ExpensiveComponent 렌더링');
    // 긴 계산을 시뮬레이션
    for (let i = 0; i < 10000000000; i++) {}
    return <div>Expensive Component</div>;
};

const UnmemoizedExample = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <ExpensiveComponent />
        </div>
    );
};

export default UnmemoizedExample;
