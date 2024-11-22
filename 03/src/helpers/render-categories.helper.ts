import { Category } from "../types/types"

export const renderCategories = (categories: Category[], categoriesContainerElement: HTMLElement, selectedCategory: Category) => {
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