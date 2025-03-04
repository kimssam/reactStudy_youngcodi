import React, { useState } from 'react';
import './Board.css';

// 4단계: 게시물 삭제 기능 추가
// 이 단계에서는 게시물을 삭제할 수 있는 기능을 추가합니다.

const BoardStep4 = () => {
    // 게시물 목록 상태: 초기값으로 세 개의 게시물 객체를 설정
    const [posts, setPosts] = useState([
        { id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물의 내용입니다.' },
        { id: 2, title: '두 번째 게시물', content: '두 번째 게시물의 내용입니다.' },
        { id: 3, title: '세 번째 게시물', content: '세 번째 게시물의 내용입니다.' }
    ]);

    // 새 게시물의 제목과 내용을 저장하는 상태
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    // 선택된 게시물 상태: 초기값으로 null을 설정
    const [selectedPost, setSelectedPost] = useState(null);

    // 새 게시물 추가 함수
    const addPost = () => {
        // 제목과 내용이 비어있지 않은 경우에만 게시물 추가
        if (newTitle.trim() && newContent.trim()) {
            // 새로운 게시물 객체 생성
            const newPost = {
                id: posts.length + 1, // 새 게시물의 ID는 현재 게시물 수 + 1
                title: newTitle, // 새로운 제목
                content: newContent // 새로운 내용
            };
            // 기존 게시물 배열에 새로운 게시물 추가
            setPosts([...posts, newPost]);
            // 입력 필드 초기화
            setNewTitle('');
            setNewContent('');
        }
    };

    // 게시물 선택 함수: 클릭한 게시물을 선택 상태로 설정
    const selectPost = (post) => {
        setSelectedPost(post);
    };

    // ☆게시물 삭제 함수: 주어진 ID의 게시물을 삭제
    const deletePost = (postId) => {
        // 주어진 ID와 일치하지 않는 게시물만 필터링하여 새 배열 생성
        setPosts(posts.filter(post => post.id !== postId));
        // 삭제한 게시물이 현재 선택된 게시물인 경우 선택 상태를 해제하려고 하는데 동작안함=>
        // if (selectedPost && selectedPost.id === postId) {
        //     setSelectedPost(null);
        // }
    };

    // =>선택된 게시물 상태를 업데이트하는 useEffect : 해당 코드에서 selectedPost 상태를 초기화하는 부분이 작동하지 않는 이유는, setPosts 상태 업데이트 함수가 비동기적으로 실행되기 때문일 수 있습니다. 이로 인해 setPosts가 완료되기 전에 if (selectedPost && selectedPost.id === postId) 조건이 평가될 수 있습니다.이 문제를 해결하기 위해 setPosts의 업데이트가 완료된 후 setSelectedPost(null)를 호출하는 방법을 사용할 수 있습니다. React에서는 setState 업데이트 이후 상태를 읽을 때, useEffect 훅을 사용할 수 있습니다. some() 함수는 JavaScript의 배열 메서드 중 하나로, 배열의 요소 중 하나라도 주어진 조건을 만족하는지 검사합니다. 조건을 만족하는 요소가 하나라도 있으면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
    useEffect(() => {
        if (selectedPost && !posts.some(post => post.id === selectedPost.id)) {
            setSelectedPost(null);
        }
    }, [posts, selectedPost]);

    return (
        <div className="board-app">
            <h1>게시판 앱 - 4단계</h1>
            <div className="input-section">
                {/* 제목 입력 필드 */}
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="제목 입력"
                />
                {/* 내용 입력 필드 */}
                <textarea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="내용 입력"
                ></textarea>
                {/* 게시물 추가 버튼 */}
                <button onClick={addPost}>추가</button>
            </div>
            <div className="post-list">
                <h2>게시물 목록</h2>
                {/* 게시물 목록을 반복하여 각 게시물을 화면에 출력 */}
                {posts.map((post) => (
                    <div key={post.id} className="post-item">
                        {/* 게시물 제목을 클릭하면 해당 게시물 선택 */}
                        <h3 onClick={() => selectPost(post)}>{post.title}</h3>
                        {/* ☆게시물 삭제 버튼: 클릭 시 deletePost 함수 호출 */}
                        <button onClick={() => deletePost(post.id)}>삭제</button>
                    </div>
                ))}
            </div>
            {/* 선택된 게시물이 있을 때만 아래 영역 표시 */}
            {selectedPost && (
                <div className="post-detail">
                    <h2>{selectedPost.title}</h2> {/* 선택된 게시물의 제목 출력 */}
                    <p>{selectedPost.content}</p> {/* 선택된 게시물의 내용 출력 */}
                </div>
            )}
        </div>
    );
};

export default BoardStep4;
