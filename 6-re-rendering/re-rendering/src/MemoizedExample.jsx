//두번째 메모이제이션 예제 =>1)메모이제이션 적용 후

// MemoizedExample.js
import React, { useState, memo } from 'react';

// 메모이제이션을 사용한 컴포넌트
const ExpensiveComponent = memo(() => {
    console.log('메모이제이션 적용 후 : ExpensiveComponent 렌더링');
    // 긴 계산을 시뮬레이션
    for (let i = 0; i < 1000000000; i++) {}
    return <div>Expensive Component</div>;
});

const MemoizedExample = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <ExpensiveComponent />
        </div>
    );
};

export default MemoizedExample;
