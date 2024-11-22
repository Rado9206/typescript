import { Task, Category } from './types/types.js';
import render from './helpers/render-tasks.helper.js';
import { renderCategories } from './helpers/render-categories.helper.js';
import { TaskClass } from './classes/task.js';
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('.add-btn');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector('.categories');
let selectedCategory;
const categories = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY];
const tasks = [
    new Task('Wyrzucić smieci', false, Category.HOBBY),
    new Task('Pójść na trening', false, Category.GYM),
    new Task('Nakarmić koty', false, Category.GENERAL),
];
const addTask = (task) => {
    tasks.push(task);
};
const upadateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    addTask(new Task(taskNameInputElement.value, false, selectedCategory));
    render(tasks, tasksContainerElement);
});
const task = ['zrobić klatę', Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
renderCategories(categories, categoriesContainerElement, upadateSelectedCategory);
render(tasks, tasksContainerElement);
let newTask;
newTask = {
    name: 'nowy task',
    done: true,
};
const taskClassInstance = new TaskClass('Zadanie z constructora', false);
taskClassInstance.logCreationDate('!!!');
