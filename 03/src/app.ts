const taskNameInputElement: HTMLInputElement = document.querySelector('#name')
const addButtonElement: HTMLButtonElement = document.querySelector('.add-btn')
const tasksContainerElement: HTMLElement = document.querySelector('.tasks')

interface Task {
	name: string
	done: boolean
	category?: 'general' | 'work' | 'gym' | 'hobby'
}

const categories: string[] = ['general', 'work', 'gym', 'hobby']

const tasks: Task[] = [
	{
		name: 'Wyrzucić śmieci',
		done: true,
	},
	{
		name: 'Pójść na trening',
		done: false,
		category: 'gym',
	},
	{
		name: 'Nakarmić koty',
		done: false,
		category: 'work',
	},
]

const render = () => {
	tasksContainerElement.innerHTML = ''

	tasks.forEach((task, index) => {
		const taskElement: HTMLElement = document.createElement('li')
		if (task.category) {
			taskElement.classList.add(task.category)
		}

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
addTask({ name: 'zrobić szpagat', category: 'gym', done: false })
render()
