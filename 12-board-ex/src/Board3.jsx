import React, { useState } from 'react';
import './Board.css';

// 3단계: 새로운 게시물 추가 기능
// 이 단계에서는 새로운 게시물을 추가할 수 있는 입력 필드와 버튼을 추가합니다.

const BoardStep3 = () => {
    // 게시물 목록 상태: 초기값으로 세 개의 게시물 객체를 설정
    const [posts, setPosts] = useState([
        { id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물의 내용입니다.' },
        { id: 2, title: '두 번째 게시물', content: '두 번째 게시물의 내용입니다.' },
        { id: 3, title: '세 번째 게시물', content: '세 번째 게시물의 내용입니다.' }
    ]);

    // ☆새로운 게시물의 제목을 저장하는 상태
    const [newTitle, setNewTitle] = useState('');
    // ☆새로운 게시물의 내용을 저장하는 상태
    const [newContent, setNewContent] = useState('');
    // 선택된 게시물 상태: 초기값으로 null을 설정
    const [selectedPost, setSelectedPost] = useState(null);

    // ☆새로운 게시물을 추가하는 함수
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
            // setPosts([...posts, newPost]);
            setPosts([posts].push(newPost));
            // 입력 필드 초기화
            setNewTitle('');
            setNewContent('');
        }
    };

    // 게시물 선택 함수: 클릭한 게시물을 선택 상태로 설정
    const selectPost = (post) => {
        setSelectedPost(post);
    };

    return (
        <div className="board-app">
            <h1>게시판 앱 - 3단계</h1>
            <div className="input-section">
                {/* ☆제목 입력 필드 */}
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="제목 입력"
                />
                {/* ☆내용 입력 필드 */}
                <textarea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="내용 입력"
                ></textarea>
                {/* ☆게시물 추가 버튼 */}
                <button onClick={addPost}>추가</button>
            </div>
            <div className="post-list">
                <h2>게시물 목록</h2>
                {/* 게시물 목록을 반복하여 각 게시물을 화면에 출력 */}
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="post-item"
                        onClick={() => selectPost(post)} // 게시물 클릭 시 선택된 게시물 상태로 설정
                    >
                        <h3>{post.title}</h3> {/* 게시물 제목 출력 */}
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

export default BoardStep3;
