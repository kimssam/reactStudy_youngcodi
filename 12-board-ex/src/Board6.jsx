import React, { useState } from 'react';
import './Board.css';

//6단계 : 게시물 상세 영역에서 해당 게시물을 수정할 수 있도록 추가

const BoardStep6 = () => {
    // 초기 게시물 목록 상태
    const [posts, setPosts] = useState([
        { id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물의 내용입니다.', date: '2023-07-23 10:30' },
        { id: 2, title: '두 번째 게시물', content: '두 번째 게시물의 내용입니다.', date: '2023-07-23 11:00' },
        { id: 3, title: '세 번째 게시물', content: '세 번째 게시물의 내용입니다.', date: '2023-07-23 12:15' }
    ]);

    // 새 게시물의 제목과 내용을 관리하는 상태
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    
    // 선택된 게시물 관리하는 상태
    const [selectedPost, setSelectedPost] = useState(null);

    //☆수정 모드를 관리하는 상태 추가
    const [editMode, setEditMode] = useState(false);

    // 새 게시물을 추가하는 함수
    const addPost = () => {
        if (newTitle.trim() && newContent.trim()) {
            // 현재 날짜와 시간을 가져와서 yyyy-MM-dd HH:mm 형식으로 포맷팅
            const now = new Date();
            const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

            // 새 게시물 객체를 생성합니다. 현재 날짜와 시간을 포함합니다.
            const newPost = {
                id: posts.length + 1,
                title: newTitle,
                content: newContent,
                date: formattedDate
            };
            // 게시물 목록에 새 게시물을 추가하고 입력 필드를 비웁니다.
            setPosts([...posts, newPost]);
            setNewTitle('');
            setNewContent('');
        }
    };

    // 게시물을 선택하는 함수
    const selectPost = (post) => {
        setSelectedPost(post);
        // ☆게시물 선택 시 수정 모드를 비활성화
        setEditMode(false); 
    };

    // 게시물을 삭제하는 함수
    const deletePost = (postId) => {
        // 주어진 ID와 일치하지 않는 게시물만 필터링하여 새 배열을 생성합니다.
        setPosts(posts.filter(post => post.id !== postId));
        // 삭제한 게시물이 현재 선택된 게시물인 경우 선택 상태를 해제합니다.
        if (selectedPost && selectedPost.id === postId) {
            setSelectedPost(null);
            setEditMode(false); // 삭제 후 수정 모드도 비활성화
        }
    };

    // ☆선택된 게시물을 업데이트하는 함수
    const updatePost = () => {
        // 현재 날짜와 시간을 가져와서 yyyy-MM-dd HH:mm 형식으로 포맷팅
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

        // 게시물 목록에서 선택된 게시물 목록을 업데이트
        const updatedPosts = posts.map(post =>
            post.id === selectedPost.id
                ? { ...post, title: selectedPost.title, content: selectedPost.content, date: formattedDate } // 수정된 날짜와 내용으로 업데이트
                : post
        );
        // 상태 업데이트
        setPosts(updatedPosts);
        // 선택된 게시물의 세부내용 중 날짜부분도 업데이트
        setSelectedPost({ ...selectedPost, title: selectedPost.title, content: selectedPost.content, date: formattedDate });
        setEditMode(false); // 수정 후 수정 모드 비활성화
    };

    return (
        <div className="board-app">
            <h1>게시판 앱 - 7단계</h1>
            <div className="input-section">
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="제목 입력"
                />
                <textarea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="내용 입력"
                ></textarea>
                <button onClick={addPost}>추가</button>
            </div>
            <div className="post-list">
                <h2>게시물 목록</h2>
                {posts.map((post) => (
                    <div key={post.id} className="post-item">
                        <h3 onClick={() => selectPost(post)}>{post.title}</h3>
                        {/* 게시물의 날짜 및 시간 표시 */}
                        <p>{post.date}</p>
                        <button onClick={() => deletePost(post.id)}>삭제</button>
                    </div>
                    // 이벤트 동작시 함수호출 구문을 direct로 넣으면 컴포넌트가 재랜더링이 될 때마다 함수호출이 되어 무한호출이 발생하므로 익명함수를 호출하여 ()=>{함수호출구문()}을 사용해서 이벤트 발생시에만 함수가 호출하는 구문이 만들어진다!!
                ))}
            </div>
            {selectedPost && (
                <div className="post-detail">
                    {editMode ? (
                        <>
                            {/* ☆수정 모드에서는 제목과 내용을 입력할 수 있는 필드와 저장 버튼을 표시 */}
                            <input
                                type="text"
                                value={selectedPost.title}
                                onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })}
                            />
                            <textarea
                                value={selectedPost.content}
                                onChange={(e) => setSelectedPost({ ...selectedPost, content: e.target.value })}
                            ></textarea>
                            <button onClick={updatePost}>저장</button>
                        </>
                    ) : (
                        <>
                            {/* 일반 모드에서는 게시물의 제목, 내용, 날짜를 표시하고 수정 버튼을 표시 */}
                            <h2>{selectedPost.title}</h2>
                            <p>{selectedPost.content}</p>
                            <p>{selectedPost.date}</p>
                            <button onClick={() => setEditMode(true)}>수정</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default BoardStep6;
