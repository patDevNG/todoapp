import React, { Component } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import uuid from "uuid"

export class Todo extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Learn Flutter",
        completed: false,
        created: Date.now()
      },
      {
        id: uuid.v4(),
        title: "Learn Travis CI",
        completed: false,
        created: Date.now()
      },
      {
        id: uuid.v4(),
        title: "Learn React Router",
        completed: true,
        created: Date.now()
      }
    ]
  };
  // Toogle todo
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  // delete todo from Ui
  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id;
        }) 
    });
  };
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  };
  render() {
    
    return ([
      <AddTodo addTodo = {this.addTodo} />,
        this.state.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        )),
      
    ])
    
  }
}

export default Todo;
