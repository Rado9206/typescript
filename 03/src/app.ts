import { Task, Category } from './types/types.js'
import render from './helpers/render-tasks.helper.js'
import { renderCategories } from './helpers/render-categories.helper.js'
import { TaskClass } from './classes/task.js'

const taskNameInputElement: HTMLInputElement = document.querySelector('#name')
const addButtonElement: HTMLButtonElement = document.querySelector('.add-btn')
const tasksContainerElement: HTMLElement = document.querySelector('.tasks')
const categoriesContainerElement: HTMLElement = document.querySelector('.categories')

let selectedCategory: Category

const categories: Category[] = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY]

const tasks: Task[] = [
	new Task('Wyrzucić smieci', false, Category.HOBBY),
	new Task('Pójść na trening', false, Category.GYM),
	new Task('Nakarmić koty', false, Category.GENERAL),
]

const addTask = (task: Task) => {
	tasks.push(task)
}

const upadateSelectedCategory = (newCategory: Category) => {
	selectedCategory = newCategory
}

addButtonElement.addEventListener('click', (event: Event) => {
	event.preventDefault()
	addTask(new Task(taskNameInputElement.value, false, selectedCategory))
	render(tasks, tasksContainerElement)
})

type TaskAsTuple = [string, Category, boolean]

const task: TaskAsTuple = ['zrobić klatę', Category.GYM, false]

const taskName = task[0]
const taskCategory = task[1]
const taskDoneStatus = task[2]

renderCategories(categories, categoriesContainerElement, upadateSelectedCategory)
render(tasks, tasksContainerElement)

type TaskType = {
	name: string
	done: boolean
	category?: Category
}

interface TaskInterface {
	name: string
	done: boolean
	category?: Category
}

let newTask: TaskInterface

newTask = {
	name: 'nowy task',
	done: true,
}

const taskClassInstance = new TaskClass('Zadanie z constructora', false)

taskClassInstance.logCreationDate('!!!')
