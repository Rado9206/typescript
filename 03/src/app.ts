/*
<li>
    <label for="task-1">Wyrzucić śmieci</label>
    <input type="checkbox" id="task-1" name="Wyrzucić śmieci">
</li> */

const taskNameInputElement: HTMLInputElement = document.querySelector('#name')
const addButtonElement: HTMLButtonElement = document.querySelector('.add-btn')
const tasksContainerElement: HTMLElement = document.querySelector('.tasks')

const tasks: string[] = ['Wyrzucić śmieci', 'Umyć zęby', 'Nakarmić koty']

const render = () => {
	tasksContainerElement.innerHTML = ''
	tasks.forEach(task => {
		const taskElement: HTMLElement = document.createElement('li')
		taskElement.innerText = task
		tasksContainerElement.appendChild(taskElement)
	})
}

const addTask = (task: string) => {
	tasks.push(task)
}

addButtonElement.addEventListener('click', (event: Event) => {
	event.preventDefault()
	addTask(taskNameInputElement.value)
	render()
    taskNameInputElement.value = ''
})

render()
