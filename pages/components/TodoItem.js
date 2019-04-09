import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      color: this.props.todo.completed ? "#c1c1c1" : "#002000",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      backgroundColor: "#fafafa",
      padding: "5px",
    };
  };

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <ul className="list-group">
          <li className="list-group-item">
          <input type="checkbox" className="float-left mx-2" onChange = {this.props.markComplete.bind(this, id)} />
            {this.props.todo.title}
            <a onClick = {this.props.delTodo.bind(this, id)} className = "float-right" style = {icon} role= "button" ><i className="far fa-1.5x fa-trash-alt"></i></a>
          </li>
        </ul>
      </div>
    );
  }
}
const icon = {
    color: 'red',
    cursor: 'pointer'   
}
// Prop-Types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
export default TodoItem;