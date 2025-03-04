import React, { useState } from 'react';
import './Board.css';

// 1단계: 기본 게시물 목록과 선택된 게시물 보기
// 이 단계에서는 게시물 목록을 세 개 만들어서 보여줍니다. 게시물을 클릭하면 해당 게시물의 상세 정보가 표시됩니다.

const BoardStep1 = () => {
    // 게시물 목록 상태: 상태 초기화 => posts 상태는 초기값으로 세 개의 게시물 객체 배열을 설정
    const [posts, setPosts] = useState([
        { id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물의 내용입니다.' },
        { id: 2, title: '두 번째 게시물', content: '두 번째 게시물의 내용입니다.' },
        { id: 3, title: '세 번째 게시물', content: '세 번째 게시물의 내용입니다.' }
    ]);


    //렌더링:
    return (
        <div className="board-app">
            <h1>게시판 앱 - 1단계</h1>
            <div className="post-list">
                <h2>게시물 목록</h2>
                {/* 게시물 목록을 반복하여 각 게시물의 제목을 화면에 출력합니다. 각 게시물은 클릭 가능한 div 요소로 렌더링됩니다. */}
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="post-item"
                    >
                        <h3>{post.title}</h3> {/* 게시물 제목 출력 */}
                    </div>
                ))}
            </div>
            
            
        </div>
    );
};

export default BoardStep1;
