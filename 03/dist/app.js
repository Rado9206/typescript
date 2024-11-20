/*
<li>
    <label for="task-1">Wyrzucić śmieci</label>
    <input type="checkbox" id="task-1" name="Wyrzucić śmieci">
</li> */
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('.add-btn');
const tasksContainerElement = document.querySelector('.tasks');
const tasks = ['Wyrzucić śmieci', 'Umyć zęby', 'Nakarmić koty'];
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
    taskNameInputElement.value = '';
});
render();
