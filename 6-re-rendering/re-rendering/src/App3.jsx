//세번째 메모이제이션 예제

// App.js
import React, { useState } from 'react';
import UnmemoizedExample from './UnmemoizedExample';
import MemoizedExample from './MemoizedExample';

const App = () => {
    const [showUnmemoized, setShowUnmemoized] = useState(true);

    return (
        <div>
            <button onClick={() => setShowUnmemoized(!showUnmemoized)}>
                {showUnmemoized ? '메모이제이션 적용 전' : '메모이제이션 적용 후'}
            </button>
            {showUnmemoized ? <UnmemoizedExample /> : <MemoizedExample />}
        </div>
    );
};

export default App;
