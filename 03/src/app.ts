import { Task, Category } from './types/types.js'
import render from './helpers/render-tasks.helper.js'
import { renderCategories } from './helpers/render-categories.helper.js'

const taskNameInputElement: HTMLInputElement = document.querySelector('#name')
const addButtonElement: HTMLButtonElement = document.querySelector('.add-btn')
const tasksContainerElement: HTMLElement = document.querySelector('.tasks')
const categoriesContainerElement: HTMLElement = document.querySelector('.categories')

let selectedCategory: Category

const categories: Category[] = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY]

const tasks: Task[] = [
	{
		name: 'Wyrzucić śmieci',
		done: true,
		category: Category.GENERAL,
	},
	{
		name: 'Pójść na trening',
		done: false,
		category: Category.GYM,
	},
	{
		name: 'Nakarmić koty',
		done: false,
		category: Category.GENERAL,
	},
]

const addTask = (task: Task) => {
	tasks.push(task)
}

const upadateSelectedCategory = (newCategory: Category) => {
	selectedCategory = newCategory
}

addButtonElement.addEventListener('click', (event: Event) => {
	event.preventDefault()
	addTask({
		name: taskNameInputElement.value,
		done: false,
		category: selectedCategory,
	})
	render(tasks, tasksContainerElement)
})

renderCategories(categories, categoriesContainerElement, upadateSelectedCategory)
render(tasks, tasksContainerElement)
