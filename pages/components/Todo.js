import React, { Component } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import uuid from "uuid";
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";
import swal from "sweetalert2";

export class Todo extends Component {
  state = {
    todos: this.props.props.todos,
   
  }

  // Toogle todo
  markComplete = id => {
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
  delTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    });
    swal.fire({
      position: 'top-end',
      type: 'success',
      title: '<h4>Todo Deleted</h4>',
      showConfirmButton: false,
      width: '300px',
      height: '150px',
      timer: 2000
    })
  };
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
    swal.fire({
      position: 'top-end',
      type: 'success',
      title: '<h4>Todo Added</h4>',
      showConfirmButton: false,
      width: '300px',
      height: '150px',
      timer: 2000
    })
    async () => {
      const res = await fetch("http://localhost:3500/todo", {
        method : 'POST',
        body: newTodo,
        headers: new Headers ({
          'content-type' : 'application/x-wwww-form-urlencoded; charset=utf-8',
          'Accept': 'application/json'
        })
      });
      const data = await res.json();
    
      console.log('my added todos', data);
      // return {
      //   todos: data
      // };
    };
  };
  render() {
    // console.log('inside todo component', this.props.props.todos);
    return [
      <AddTodo addTodo={this.addTodo} />,
      this.state.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      ))
    ];
  }
}
// Prop-Types
Todo.propTypes = {
  todos: PropTypes.object.isRequired
};
export default Todo;