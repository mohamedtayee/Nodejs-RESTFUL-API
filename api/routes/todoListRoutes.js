'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/todoListController');

	// todoList Routes
	app.route('/tasks')
		.get(todoList.ALLTodos)
		.post(todoList.CreateTask);

	app.route('/tasks/:taskId')
		.get(todoList.ReadTask)
		.put(todoList.updateTask)
		.delete(todoList.DeleteTask);
};
