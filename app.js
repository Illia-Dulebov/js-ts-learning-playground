import assert from "node:assert/strict";
import TaskManager from "./task-1/tasks-manager.js";

const taskManager = new TaskManager();

const addedTask = taskManager.addTask("Cook dinner");
addedTask.title = "Changed outside";

assert.equal(taskManager.findTask(addedTask.id).title, "Cook dinner");

const completedTask = taskManager.completeTask(addedTask.id);
assert.equal(completedTask.completed, true);

completedTask.title = "Changed again";
assert.equal(taskManager.findTask(addedTask.id).title, "Cook dinner");
assert.equal(taskManager.findTask(addedTask.id).completed, true);

const completedTasks = taskManager.getCompletedTasks();
assert.equal(completedTasks.length, 1);

completedTasks[0].title = "Changed in list";
completedTasks.pop();

const freshCompletedTasks = taskManager.getCompletedTasks();
assert.equal(freshCompletedTasks.length, 1);
assert.equal(freshCompletedTasks[0].title, "Cook dinner");

assert.equal(taskManager.completeTask(999), undefined);

console.log("All task manager checks passed.");