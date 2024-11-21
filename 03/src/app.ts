const taskNameInputElement: HTMLInputElement = document.querySelector('#name')
const addButtonElement: HTMLButtonElement = document.querySelector('.add-btn')
const tasksContainerElement: HTMLElement = document.querySelector('.tasks')
const categoriesContainerElement: HTMLElement = document.querySelector('.categories')

let selectedCategory: Category

type Category = 'general' | 'work' | 'gym' | 'hobby'

interface Task {
	name: string
	done: boolean
	category?: Category
}

const categories: Category[] = ['general', 'work', 'gym', 'hobby']

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

const renderCategories = () => {
	categories.forEach(category => {
		const categoryElement: HTMLElement = document.createElement('li')
		const radioImputElement: HTMLInputElement = document.createElement('input')
		radioImputElement.type = 'radio'
		radioImputElement.name = 'category'
		radioImputElement.value = category
		radioImputElement.id = `category-${category}`
		radioImputElement.addEventListener('change', () => {
			selectedCategory = category
		} )

		const labelElement: HTMLLabelElement = document.createElement('label')
		labelElement.setAttribute('for', `categoty-${category}`)
		labelElement.innerText = category

		categoryElement.appendChild(radioImputElement)
		categoryElement.appendChild(labelElement)
		
		categoriesContainerElement.appendChild(categoryElement)
	})
}

const addTask = (task: Task) => {
	tasks.push(task)
}

addButtonElement.addEventListener('click', (event: Event) => {
	event.preventDefault()
	addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory })
	render()
	taskNameInputElement.value = ''
})
renderCategories()
render()
