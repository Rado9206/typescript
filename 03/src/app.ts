import { Task, Category } from "./types/types"
import render from "./helpers/render-tasks.helper.js"
import { renderCategories } from "./helpers/render-categories.helper.js"

const taskNameInputElement: HTMLInputElement = document.querySelector('#name')
const addButtonElement: HTMLButtonElement = document.querySelector('.add-btn')
const tasksContainerElement: HTMLElement = document.querySelector('.tasks')
const categoriesContainerElement: HTMLElement = document.querySelector('.categories')

let selectedCategory: Category


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


const addTask = (task: Task) => {
	tasks.push(task)
}

addButtonElement.addEventListener('click', (event: Event) => {
	event.preventDefault()
	addTask({ 
		name: taskNameInputElement.value, 
		done: false, 
		category: selectedCategory 

	})
	render(tasks, tasksContainerElement)
})

renderCategories(categories, categoriesContainerElement, selectedCategory)
render(tasks, tasksContainerElement)
