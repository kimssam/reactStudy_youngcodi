import React, { useState } from 'react';
import './Board.css';

// 5단계: 게시물 입력 시 날짜와 시간 추가
// 이 단계에서는 게시물을 입력할 때 현재 날짜와 시간을 추가하여 게시물 목록과 상세보기에서 해당 정보를 표시합니다.

const BoardStep5 = () => {
    // 게시물 상태를 관리합니다. 각 게시물은 id, title, content, date를 포함합니다.
    const [posts, setPosts] = useState([
        { id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물의 내용입니다.', date: '2023-07-23 10:30' },
        { id: 2, title: '두 번째 게시물', content: '두 번째 게시물의 내용입니다.', date: '2023-07-23 11:00' },
        { id: 3, title: '세 번째 게시물', content: '세 번째 게시물의 내용입니다.', date: '2023-07-23 12:15' }
    ]);

    // 새 게시물의 제목과 내용을 관리하는 상태
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [selectedPost, setSelectedPost] = useState(null);
    
    //날짜 출력 테스트
    const [todayNow, setTodayNow] = useState('');
    const now = new Date();
    useEffect(()=>{
        setTodayNow(`${now.getFullYear()}-${now.getMonth()}`);
    },[])

    // 게시물을 추가하는 함수
    const addPost = () => {
        if (newTitle.trim() && newContent.trim()) {
            // ☆현재 날짜와 시간을 가져와서 yyyy-MM-dd HH:mm 형식으로 포맷팅: padStart() 메서드는 JavaScript의 String 객체 메서드로, 문자열의 시작 부분에 지정된 문자(들)를 추가하여 주어진 길이를 만족시킵니다. 이 메서드는 주로 숫자를 두 자리로 맞추거나, 문자열을 특정 길이로 맞추기 위해 사용됩니다. str.padStart(targetLength [, padString]) =>targetLength: 목표로 하는 문자열의 길이. 이 길이에 맞출 때까지 패딩 문자가 추가됩니다.padString (선택 사항): 목표 길이에 도달할 때까지 문자열의 시작 부분에 추가될 문자열. 기본 값은 " " (공백)입니다.
            const now = new Date();
            const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

            // 새 게시물 객체를 생성합니다. 
            const newPost = {
                id: posts.length + 1,
                title: newTitle,
                content: newContent,
                //☆현재 날짜와 시간을 포함합니다.
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
    };

    // 게시물을 삭제하는 함수
    const deletePost = (postId) => {
        // 주어진 ID와 일치하지 않는 게시물만 필터링하여 새 배열을 생성합니다.
        setPosts(posts.filter(post => post.id !== postId));

        // 삭제한 게시물이 현재 선택된 게시물인 경우 하단의 세부내용도 같이 삭제!!
         // if (selectedPost && selectedPost.id === postId) {
        //     setSelectedPost(null);
        // }

        //=>하지만 위 코드 동작안함, 해당 코드에서 selectedPost 상태를 초기화하는 부분이 작동하지 않는 이유는, setPosts 상태 업데이트 함수가 비동기적으로 실행되기 때문일 수 있습니다. 이로 인해 setPosts가 완료되기 전에 if (selectedPost && selectedPost.id === postId) 조건이 평가될 수 있습니다.이 문제를 해결하기 위해 setPosts의 업데이트가 완료된 후 setSelectedPost(null)를 호출하는 방법을 사용할 수 있습니다. React에서는 setState 업데이트 이후 상태를 읽을 때, useEffect 훅을 사용할 수 있습니다.
       
    };

    //그래서 useEffect를 사용!!
    useEffect(()=>{
        if(selectedPost && !posts.some(post=>post.id === selectedPost.id)){
            setSelectedPost(null)
        }
    },[posts, selectedPost]);

    return (
        <div className="board-app">
            <h1>게시판 앱 - 5단계</h1>
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
                {/* 날짜 출력 테스트 */}
                <mark>{todayNow}</mark> 
                {posts.map((post) => (
                    <div key={post.id} className="post-item">
                        <h3 onClick={() => selectPost(post)}>{post.title}</h3>
                        {/* ☆새로 추가된 게시물의 날짜 및 시간 표시 */}
                        <p>{post.date}</p>
                        <button onClick={() => deletePost(post.id)}>삭제</button>
                    </div>
                ))}
            </div>
            {selectedPost && (
                <div className="post-detail">
                    <h2>{selectedPost.title}</h2>
                    <p>{selectedPost.content}</p>
                    {/* ☆선택된 게시물의 날짜 및 시간 표시 */}
                    <p>{selectedPost.date}</p>
                </div>
            )}
        </div>
    );
};

export default BoardStep5;
