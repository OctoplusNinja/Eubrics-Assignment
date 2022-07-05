import React, { Component } from "react";
import "./InputContainer.css";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { todoInput: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ todoInput: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let task = this.state.todoInput.trim();
    if (task.length) {
      this.props.addTodo(task);
      this.setState({ todoInput: "" });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Input-Container">
        <input
          value={this.state.todoInput}
          type="text"
          placeholder="add details"
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default InputContainer;
