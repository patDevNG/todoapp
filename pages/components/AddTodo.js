import React, { Component } from "react";

export class AddTodo extends Component {
    state = {
        title : '',
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = (e) => {
        this.props.addTodo(this.state.title);
        this.setState({title : '' });
        e.preventDefault();
    }
  render() {
    return (
      <div style = {{borderRadius: '0.25rem', border: '1px solid grey', margin: '1rem 0'}}>
        <form onSubmit = {this.onSubmit} style = {{display: 'flex'}}>
          <input type="text"
          name="title"
          placeholder="Add Todo..."
          style = {{flex: '10', padding: '0.5rem', border:'none'}}
          value = {this.state.title}
          onChange = {this.onChange}
          />
          <input type="submit" value="Submit" className = "btn btn-primary" style = {{flex:'1'}}/>
        </form>
      </div>
    );
  }
}

export default AddTodo;