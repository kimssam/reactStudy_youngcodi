import React, { useState } from 'react';
import './Board.css';

// 2단계: 게시물 목록과 선택된 게시물 보기
// 이 단계에서는 게시물 목록을 보여주고, 특정 게시물을 클릭하면 해당 게시물의 내용을 표시하는 기능을 구현합니다.

const BoardStep2 = () => {
    // 게시물 목록 상태: 초기값으로 세 개의 게시물 객체를 설정
    const [posts, setPosts] = useState([
        { id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물의 내용입니다.' },
        { id: 2, title: '두 번째 게시물', content: '두 번째 게시물의 내용입니다.' },
        { id: 3, title: '세 번째 게시물', content: '세 번째 게시물의 내용입니다.' }
    ]);

    // ☆선택된 게시물 상태: 초기값으로 null을 설정
    const [selectedPost, setSelectedPost] = useState(null);

    // ☆게시물 선택 함수: 클릭한 게시물을 선택 상태로 설정
    const selectPost = (post) => {
        setSelectedPost(post);
    };

    return (
        <div className="board-app">
            <h1>게시판 앱 - 2단계</h1>
            <div className="post-list">
                <h2>게시물 목록</h2>
                {/* 게시물 목록을 반복하여 각 게시물을 화면에 출력 */}
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="post-item"
                        onClick={() => selectPost(post)} // ☆게시물 클릭 시 선택된 게시물 상태로 설정, // 이벤트 동작시 함수호출 구문을 direct로 넣으면 컴포넌트가 재랜더링이 될 때마다 함수호출이 되어 무한호출이 발생하므로 익명함수를 호출하여 ()=>{함수호출구문()}을 사용해서 이벤트 발생시에만 함수가 호출하는 구문이 만들어진다!!
                    >
                        <h3>{post.title}</h3> {/* 게시물 제목 출력 */}
                    </div>
                ))}
            </div>
            {/* &&연산자는 왼쪽이 true라고 판정하면 오른쪽 반환한다.
            ||연산자는 왼쪽이 false라고 판정하면 오른쪽 반환한다. 
            null은 false라고 판정한다!! */}
            
            {/* 선택된 게시물이 있을 때만 아래 영역 표시 => selectedPost가 null이 아닌 경우에만 게시물의 상세 내용(post-detail)이 화면에 표시됩니다.
            
            =>조건부 렌더링: 
            {selectedPost && ( ... )}는 논리 AND (&&) 연산자를 사용한 조건부 렌더링입니다. 이 방식은 JavaScript에서 조건이 true일 때만 다음 표현식을 평가하고 렌더링합니다.
            selectedPost가 null이거나 false인 경우에는 && 연산자의 오른쪽 부분이 렌더링되지 않습니다. 반면, selectedPost가 실제 게시물 객체일 경우, && 연산자의 오른쪽 부분이 렌더링됩니다.
            조건이 참일 때:
            selectedPost가 null이 아닌 경우, 즉 선택된 게시물이 있을 때만 다음 JSX 코드 블록이 실행됩니다.
            이 블록 안의 코드는 <div className="post-detail">를 화면에 렌더링합니다. 

            => 조건부 렌더링을 통해, selectedPost 상태가 유효한 게시물 객체일 때만 상세 내용이 화면에 표시되도록 합니다. selectedPost가 null일 때는 아무 것도 렌더링되지 않으며, 게시물 선택 시에만 상세 내용을 볼 수 있습니다.*/}
                        {selectedPost && (
                <div className="post-detail">
                    <h2>{selectedPost.title}</h2> {/* 선택된 게시물의 제목 출력 */}
                    <p>{selectedPost.content}</p> {/* 선택된 게시물의 내용 출력 */}
                </div>
            )}
        </div>
    );
};

export default BoardStep2;
