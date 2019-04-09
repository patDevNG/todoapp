const Todo = require("../models/todo");
const todoStore = require("../data/todo");

module.exports = {
  addTodo: (req, res) => {
    const todoData = req.body;
    const todo = new Todo(todoData.id, todoData.title, todoData.completed);
    todoStore.push(todo);
    return res.status(201).send("Todo Added");
  },
  getAllTodo: (req, res) => {
    return res.status(200).json(todoStore);
  },
  getTodoById: (req, res) => {
    const singleTodo = todoStore.map(todoId => {
      todoId.id === req.body.id;
    });
    res.status(200).send("Todo sent");
    return singleTodo;
  },
  deleteTodo: (req, res) => {
    const remainingTodo = todoStore.map(todoId => {
      todoId.id !== req.body.id;
      res.status(200).send('Todo Deleted');
      return remainingTodo;
    });
  }
};