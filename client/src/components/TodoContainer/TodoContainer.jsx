import React, { Component } from "react";
import axios from "axios";
import StatusBar from "../StatusBar/StatusBar";
import InputContainer from "../InputContainer/InputContainer";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoContainer.module.css";

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "all",
      todos: [],
    };
    this.changeStatus = this.changeStatus.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.updateTodoContent = this.updateTodoContent.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.deleteAllCompleted = this.deleteAllCompleted.bind(this);
  }
  async componentDidMount() {
    const todos = await (
      await axios.get(
        `http://localhost:8000/${this.props.behaviour.tables_name}`
      )
    ).data;
    if (todos && todos.length !== 0) {
      this.setState({ todos });
    }
  }
  async componentDidUpdate(prevProp) {
    if (this.props.behaviour !== prevProp.behaviour) {
      const todos = await (
        await axios.get(
          `http://localhost:8000/${this.props.behaviour.tables_name}`
        )
      ).data;
      if (todos) {
        console.log(todos);
        this.setState({ todos });
      }
    }
  }
  changeStatus(status) {
    this.setState({ status });
  }
  async addTodo(todo) {
    // let newTodo = { task: todo, completed: false, id: uuidv4() };
    const newTodo = (
      await axios.post(
        `http://localhost:8000/${this.props.behaviour.tables_name}`,
        {
          todo,
        }
      )
    ).data;
    // console.log(newTodo);
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  async deleteTodo(id) {
    const deletedTodo = (
      await axios.delete(
        `http://localhost:8000/${this.props.behaviour.tables_name}`,
        {
          data: {
            id,
          },
        }
      )
    ).data;
    console.log(deletedTodo);
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }
  async deleteAllCompleted() {
    await axios.post(
      `http://localhost:8000/${this.props.behaviour.tables_name}/deleteCompletedTodo`
    );
    const updatedTodos = this.state.todos.filter((todo) => {
      return !todo.completed;
    });
    console.log(updatedTodos);
    this.setState({ todos: updatedTodos });
  }
  async updateTodo(todo) {
    // console.log(todo);
    axios.put(`http://localhost:8000/${this.props.behaviour.tables_name}`, {
      todo: todo.task,
      id: todo.id,
      completed: todo.completed,
    });
    const updatedTodos = this.state.todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, task: todo.task };
      }
      return t;
    });
    this.setState({ todos: updatedTodos });
  }
  async updateTodoContent(id, task, completed) {
    this.updateTodo({ task, id, completed });
  }
  toggleStatus(id) {
    const currentTodo = this.state.todos.find((todo) => todo.id === id);
    this.updateTodo({ ...currentTodo, completed: !currentTodo.completed });
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    console.log(this.props.behaviour);
    return (
      <>
        <h1 className={styles.TodoContainer_Title}>
          {this.props.behaviour.table_description}
        </h1>
        <StatusBar
          changeStatus={this.changeStatus}
          status={this.state.status}
        />

        {this.state.status !== "completed" ? (
          <InputContainer addTodo={this.addTodo} />
        ) : (
          ""
        )}

        <TodoList
          updateTodo={this.updateTodoContent}
          deleteTodo={this.deleteTodo}
          deleteAllCompleted={this.deleteAllCompleted}
          toggleStatus={this.toggleStatus}
          todolist={this.state}
        />
      </>
    );
  }
}

export default TodoContainer;
