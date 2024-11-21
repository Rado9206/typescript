const taskNameInputElement: HTMLInputElement = document.querySelector('#name')
const addButtonElement: HTMLButtonElement = document.querySelector('.add-btn')
const tasksContainerElement: HTMLElement = document.querySelector('.tasks')

interface Task {
	name: string
	done: boolean
}

const tasks: Task[] = [
	{
		name: 'Wyrzucić śmieci',
		done: false,
	},
	{
		name: 'Umyć zęby',
		done: false,
	},
	{
		name: 'Nakarmić koty',
		done: false,
	},
]

const render = () => {
	tasksContainerElement.innerHTML = ''

	tasks.forEach((task, index) => {
		const taskElement: HTMLElement = document.createElement('li')

		const id: string = `task-${index}`

		const labelElement: HTMLLabelElement = document.createElement('label')
		labelElement.innerText = task.name
		labelElement.setAttribute('for', id)

		const checkboxElement: HTMLInputElement = document.createElement('input')
		checkboxElement.type = 'checkbox'
		checkboxElement.name = task.name
		checkboxElement.id = id
		checkboxElement.checked = task.done
		checkboxElement.addEventListener('change', () => {
			task.done = !task.done
		})

		taskElement.appendChild(checkboxElement)
		taskElement.appendChild(labelElement)

		tasksContainerElement.appendChild(taskElement)
	})
}

const addTask = (task: Task) => {
	tasks.push(task)
}

addButtonElement.addEventListener('click', (event: Event) => {
	event.preventDefault()
	addTask({ name: taskNameInputElement.value, done: false })
	render()
	taskNameInputElement.value = ''
})

render()
