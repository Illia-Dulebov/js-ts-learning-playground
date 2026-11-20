import Task from './task-model.js';

export default class TaskManager {
    #tasks = [];
    #nextId = 0;

    addTask(title) {
        this.#nextId++;
        const task = new Task(this.#nextId, title);
        this.#tasks.push(task);

        return new Task(task.id, task.title, task.completed);
    }

    completeTask(id) {
        const task = this.#tasks.find((task) => task.id === id);

        if (task === undefined) {
            return undefined;
        }
        
        this.#tasks = this.#tasks.map(task => task.id === id ? new Task(task.id, task.title, true) : task);
        
        return new Task(task.id, task.title, true);
    }

    findTask(id) {
        const task = this.#tasks.find((task) => task.id === id);

        if (task === undefined) {
            return undefined;
        }
        
        return new Task(task.id, task.title, task.completed);
    }

    getCompletedTasks() {
        return this.#tasks.filter(task => task.completed).map(task => new Task(task.id, task.title, task.completed));
    }

    getTasksCount() {
        return this.#tasks.length;
    }
}