export const renderCategories = (categories, categoriesContainerElement, selectedCategory) => {
    categories.forEach(category => {
        const categoryElement = document.createElement('li');
        const radioImputElement = document.createElement('input');
        radioImputElement.type = 'radio';
        radioImputElement.name = 'category';
        radioImputElement.value = category;
        radioImputElement.id = `category-${category}`;
        radioImputElement.addEventListener('change', () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement('label');
        labelElement.setAttribute('for', `categoty-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioImputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
