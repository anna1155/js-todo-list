const taskContainer = document.querySelector('.task');
const new_task = document.querySelector(".task input");
const add_btn = document.querySelector(".task button");
const tasks = document.querySelector(".tasks");

function addTask(e) {

    e.preventDefault();
    if(new_task.value === '') return;

    const task = createTask(new_task.value);

    tasks.appendChild(task);

    new_task.value = '';
}

function createTask(taskName) {

    const task = document.createElement('p');
    task.innerHTML = 
    `
    <div class='tasky'>
    <label>${taskName}</label>
    <button class='del'>&times;</button>
    </div>
    `
    ;

    const del = task.querySelector('.del');
    del.addEventListener("click", deleteTask);

    return task;
}

function deleteTask(e) {
    e.target.parentElement.remove();
}

taskContainer.addEventListener("submit", addTask);