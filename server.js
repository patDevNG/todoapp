const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
// const todo = require('./routes/todo');
const todoStore = require("./data/todo");
const Todo = require("./models/todo");
const uuid = require("uuid");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = 3500;

app
  .prepare()
  .then(() => {
    const server = express();

    // body parsermiddleware
    server.use(bodyParser.json());

    server.post("/todo", (req, res) => {
      const todoData = req.body;
      const todo = new Todo(todoData.id, todoData.title, todoData.completed);
      todo.id = uuid.v4();
      todo.completed = false;
      todoStore.push(todo);
      return res.status(201).json(todoStore);
    });

    server.get("/todo", (req, res) => {
      return res.status(200).json(todoStore);
    });

    // server.get("/todo/delete/:id", (req, res) => {
    //   const remainingTodo = todoStore.filter(todo => {
    //     return todo.id !== req.params.id;
    //   });
    //   res.status(200).send(remainingTodo);
    //   return remainingTodo;
    // });

    // server.get("/todo/:id", (req, res) => {
    //   const singleTodo = todoStore.map(todo => {
    //     return todo.id === req.params.id;
    //   });
    //   res.status(200).send(singleTodo);
    //   return singleTodo;
    // });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`Server Started at http://localhost:${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });