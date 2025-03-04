console.log("test")
const hello = document.getElementById("title")
hello.style="color:red"

//스타일이 덮어쓰기 된다.
const title2 = document.querySelector("#title")
title2.style="border:1px solid blue"

const container1 = document.getElementsByClassName("container1")
container1[0].style = "border:3px dotted purple"

const container2 = document.querySelector(".container2")
container2.style = "border:5px dashed pink; padding:5px; background-color:beige"

//dom생성: createElement("button"), 추가 :appendChild(), prepend()
const buttonEl1 = document.createElement("button")
buttonEl1.textContent="첫번째 버튼"
container2.appendChild(buttonEl1)

const container3 = document.querySelector(".container3")
container3.style = "border:5px dotted purple; padding:5px; background-color:lightblue; margin:5px"

const buttonEl2 = document.createElement("button")
buttonEl2.textContent="두번째 버튼"
container3.prepend(buttonEl2)

//dom삭제 : removeChild()
const bodyEl = document.querySelector("body")
// bodyEl.removeChild(hello)
// bodyEl.remove()

