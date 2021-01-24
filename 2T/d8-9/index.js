const form = document.querySelector('.js_form'),
    input = form.querySelector('.js_input'),
    pending = document.querySelector(".list_pending"),
    finished = document.querySelector(".list_finished");

const PENDING = 'pending',
    FINISHED = 'finished';

let pendingList = [],
    finishedList = [];

function findInFinished(id){
    return finishedList.find(task => {
        return task.id === id;
    })
}
function findInPending(id){
    return pendingList.find(task => {
        return task.id === id;
    })
}

function handleChangeClick(e){
    e.preventDefault();
    const li = e.target.parentNode;
    

    if(li.parentNode.className == 'list_pending'){
        const changedTask = findInPending(li.id);
        paintFinished(changedTask);
        pendingList = pendingList.filter(task => {
            return task.id !== li.id;
        })
        finishedList.push(changedTask)

    }else{
        const changedTask = findInFinished(li.id);
        paintPending(changedTask);
        finishedList = finishedList.filter(task => {
            return task.id !== li.id;
        })
        pendingList.push(changedTask);
    }

    saveState();
    li.parentNode.removeChild(li);
}

function handleDelClick(e){
    e.preventDefault();

    const li = e.target.parentNode;
    
    if(li.parentNode.className == 'list_pending'){
        console.log(li.id);
        pendingList = pendingList.filter(task => {
            return task.id !== li.id;
        })
    }else{
        finishedList = finishedList.filter(task => {
            return task.id !== li.id;
        })
    }
    saveState();
    li.parentNode.removeChild(li);
}

function saveState(){
    const parsedPending = JSON.stringify(pendingList),
        parsedFinished = JSON.stringify(finishedList);
    
    localStorage.setItem(PENDING, parsedPending);
    localStorage.setItem(FINISHED, parsedFinished);
}

function saveToPending(pendingObj){
    pendingList.push(pendingObj);
}

function paintPending(task){
    const li = document.createElement('li'),
        span = document.createElement('span'),
        delBtn = document.createElement('button'),
        changeBtn = document.createElement('button');

    span.innerText = task.task;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", handleDelClick);
    changeBtn.innerText = '✅';
    changeBtn.addEventListener("click", handleChangeClick);

    li.append(span, delBtn, changeBtn);
    li.id = task.id;
    
    pending.append(li);
}

function paintFinished(task){
    const li = document.createElement('li'),
        span = document.createElement('span'),
        delBtn = document.createElement('button'),
        changeBtn = document.createElement('button');

    span.innerText = task.task;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", handleDelClick);
    changeBtn.innerText = '✅';
    changeBtn.addEventListener("click", handleChangeClick);

    li.append(span, delBtn, changeBtn);
    li.id = task.id;

    finished.append(li);
}

function generateObj(task){
    const obj = {
        id: String(Date.now()),
        task: task
    };
    return obj;
}

function handleSubmit(event){
    event.preventDefault();
    const taskObj = generateObj(input.value);
    input.value = "";

    paintPending(taskObj);
    saveToPending(taskObj);
    saveState();
}

function restoreTasks(){
    pendingList.forEach(task => {
        paintPending(task);
    });
    finishedList.forEach(task => {
        paintFinished(task);
    })
}

function loadTasks(){
    pendingList = JSON.parse(localStorage.getItem(PENDING)) || [];
    finishedList = JSON.parse(localStorage.getItem(FINISHED)) || [];

    if(pendingList != null || finishedList != null) restoreTasks();
}

function init(){
    form.addEventListener('submit', handleSubmit);
    loadTasks();
}

init();