import { Category } from '../types/types.js'

const handleCategoryChange = (category: Category) => {
	if (category === Category.GENERAL) {
		console.log('Zmiana na general')
	} else if (category === Category.GYM) {
		console.log('Zmiana na gym')
	} else if (category === Category.HOBBY) {
		console.log('Zmiana na hobby')
	} else if (category === Category.WORK) {
		console.log('Zmiana na work')
	} else {
		const never: never = category
		console.log(never)
	}
}

export const renderCategories = (
	categories: Category[],
	categoriesContainerElement: HTMLElement,
	inputChangeCallback: (category: Category) => void
) => {
	categories.forEach(category => {
		const categoryElement: HTMLElement = document.createElement('li')
		const radioImputElement: HTMLInputElement = document.createElement('input')
		radioImputElement.type = 'radio'
		radioImputElement.name = 'category'
		radioImputElement.value = category
		radioImputElement.id = `category-${category}`
		radioImputElement.addEventListener('change', () => {
			inputChangeCallback(category)
			handleCategoryChange(category)
		})

		const labelElement: HTMLLabelElement = document.createElement('label')
		labelElement.setAttribute('for', `categoty-${category}`)
		labelElement.innerText = category

		categoryElement.appendChild(radioImputElement)
		categoryElement.appendChild(labelElement)

		categoriesContainerElement.appendChild(categoryElement)
	})
}