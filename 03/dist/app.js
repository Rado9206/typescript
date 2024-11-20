const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('.add-btn');
const tasksContainerElement = document.querySelector('.tasks');
const tasks = [
    {
        name: 'Wyrzucić śmieci',
        done: false,
    },
    {
        name: 'Umyć zęby',
        done: true,
    },
    {
        name: 'Nakarmić koty',
        done: false,
    },
];
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        const id = `task-${index}`;
        const labelElement = document.createElement('label');
        labelElement.innerText = task.name;
        labelElement.setAttribute('for', id);
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener('change', () => {
            task.done = !task.done;
        });
        taskElement.appendChild(checkboxElement);
        taskElement.appendChild(labelElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
    taskNameInputElement.value = '';
});
