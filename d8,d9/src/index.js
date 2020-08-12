import "./styles.css";

const PENDING_LS = "pending",
  FINISHED_LS = "finished",
  form = document.querySelector(".js-form"),
  formInput = form.querySelector("input"),
  pendingList = document.querySelector(".toDos-pending"),
  finishedList = document.querySelector(".toDos-finished");

function saveLocalInHtml() {}

function switchToDo() {}

function paintToDos(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = text;
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const switchBtn = document.createElement("button");
  switchBtn.innerText = "✅";
  // if (li.parentNode.className === "toDos-pending") {
  //   switchBtn.innerText = "✅";
  // } else {
  //   switchBtn.innerText = "🔄";
  // }
  // pendingList에 appendChild되고나서 parentNode를 접근할 수 있으므로
  // 이후에 이 기능을 추가해야댐
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(switchBtn);
  pendingList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = formInput.value;
  paintToDos(currentValue);
}

function loadToDos() {
  const currentPending = localStorage.getItem(PENDING_LS);
  const currentFinished = localStorage.getItem(FINISHED_LS);
  if (currentPending !== null) {
  }

  if (currentFinished !== null) {
  }
}

function init() {
  // 1.불러와 2.입력한거 받아 3.받은거 넣어
  // 4.버튼누르면 변경 5.넣은거 세이브해
  loadToDos();
  form.addEventListener("submit", handleSubmit);
}

init();
