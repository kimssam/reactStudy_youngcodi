//추가 버튼 클릭시 실행하는 함수
const onClickAdd = ()=>{
    //input태그
    const textEl = document.getElementById("add-text")
    const text = textEl.value
    //입력창에 텍스트 입력후 추가 버튼 클릭시 텍스트 초기화
    textEl.value=""

    //태그 생성
    const li = document.createElement("li")
    const div = document.createElement("div")
    const p = document.createElement("p")

    //입력창에 텍스트 입력하면 메모목록 추가
    p.textContent= text
    const button = document.createElement("button")
    button.textContent = "삭제"

    div.appendChild(p)
    div.appendChild(button)
    li.appendChild(div)
    document.getElementById("memo-list").appendChild(li)

    //버튼 클릭시, 행 삭제 처리
    button.addEventListener("click",()=>{
        //closest()는 부모 요소와 일치하는 문자열을 찾는 메소드
        const deleteTarget = button.closest("li")
        document.getElementById("memo-list").removeChild(deleteTarget)
    })
}

//버튼 클릭시 , onClickAdd()를 호출
document.getElementById("add-button").addEventListener("click",()=>onClickAdd());