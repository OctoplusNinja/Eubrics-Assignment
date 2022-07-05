import React, { Component } from "react";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
import DeleteAllCompleted from "../DeleteAllCompleted/DeleteAllCompleted";

class TodoList extends Component {
  fetchTodos(completed) {
    return this.props.todolist.todos.filter(
      (todo) => todo.completed === completed
    );
  }
  showAllTodos() {
    const { todos } = this.props.todolist;
    if (todos.length === 0) {
      return <h4>No Tasks Added</h4>;
    }
    return (
      <ul>
        {todos.map((todo) => (
          <Todo
            deleteTodo={this.props.deleteTodo}
            toggleStatus={this.props.toggleStatus}
            updateTodo={this.props.updateTodo}
            key={todo.id}
            tab="all"
            todo={todo}
          />
        ))}
      </ul>
    );
  }
  showActiveTodos() {
    const activeTodo = this.fetchTodos(false);
    if (activeTodo.length === 0) {
      return <h4>No Active Tasks</h4>;
    }
    return (
      <ul>
        {activeTodo.map((todo) => (
          <Todo
            deleteTodo={this.props.deleteTodo}
            toggleStatus={this.props.toggleStatus}
            updateTodo={this.props.updateTodo}
            key={todo.id}
            tab="active"
            todo={todo}
          />
        ))}
      </ul>
    );
  }
  showCompletedTodos() {
    const completedTodo = this.fetchTodos(true);
    if (completedTodo.length === 0) {
      return <h4>No Completed Tasks</h4>;
    }
    return (
      <>
        <ul>
          {completedTodo.map((todo) => (
            <Todo
              deleteTodo={this.props.deleteTodo}
              toggleStatus={this.props.toggleStatus}
              updateTodo={this.props.updateTodo}
              key={todo.id}
              tab="completed"
              todo={todo}
            />
          ))}
        </ul>
        <DeleteAllCompleted deleteAll={this.props.deleteAllCompleted} />
      </>
    );
  }
  render() {
    return (
      <div className={styles.TodoList}>
        {this.props.todolist.status === "active"
          ? this.showActiveTodos()
          : this.props.todolist.status === "completed"
          ? this.showCompletedTodos()
          : this.showAllTodos()}
      </div>
    );
  }
}

export default TodoList;
