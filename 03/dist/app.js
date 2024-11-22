import { Category } from './types/types.js';
import render from './helpers/render-tasks.helper.js';
import { renderCategories } from './helpers/render-categories.helper.js';
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('.add-btn');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector('.categories');
let selectedCategory;
const categories = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY];
const tasks = [
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
];
const addTask = (task) => {
    tasks.push(task);
};
const upadateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    render(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, upadateSelectedCategory);
render(tasks, tasksContainerElement);
