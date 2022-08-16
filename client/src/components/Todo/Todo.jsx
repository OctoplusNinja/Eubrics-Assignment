import React, { Component } from "react";
import styles from "./Todo.module.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Modal, Input, notification } from "antd";
const { confirm } = Modal;

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editInput: this.props.todo.task,
      isModalVisible: false,
    };
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ editInput: e.target.value });
  }
  updateTodo(e) {
    confirm({
      title: "Edit Todo",
      content: (
        <Input
          onChange={this.handleChange}
          defaultValue={this.state.editInput}
        />
      ),
      okText: "Edit",
      cancelText: "Cancel",
      icon: null,
      onOk: () => {
        return new Promise((resolve, reject) => {
          console.log(
            this.props.updateTodo(
              this.props.todo.id,
              this.state.editInput,
              this.props.todo.completed
            )
          );
          // this.props
          //   .updateTodo(
          //     this.props.todo.id,
          //     this.state.editInput,
          //     this.props.todo.completed
          //   )
          //   .then(() => {
          //     resolve();
          //     notification.success({
          //       message: "Todo Updated",
          //       description: this.state.editInput,
          //     });
          //   })
          //   .catch(() => {
          //     console.log("bruh");
          //     reject();
          //     notification.error({
          //       message: "Todo Could not be Edited",
          //       description: this.state.editInput,
          //     });
          //   });
          // setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel: () => {
        this.setState({ editInput: this.props.todo.task });
      },
    });
    // this.props.updateTodo(this.props.todo.id);
  }
  deleteTodo(e) {
    confirm({
      title: "Do you Want to delete the Todo?",
      content: this.props.todo.task,
      okText: "Yes",
      cancelText: "No",
      okType: "danger",
      onOk: () => {
        this.props.deleteTodo(this.props.todo.id);
      },
    });
  }
  toggleCompleted(e) {
    this.props.toggleStatus(this.props.todo.id);
  }
  render() {
    return (
      <>
        <li className={this.props.todo.completed ? styles.Todo_Completed : ""}>
          <div className={styles.todo_section}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name=""
              id=""
              checked={this.props.todo.completed}
              onChange={this.toggleCompleted}
            />
            <span>{this.props.todo.task}</span>
          </div>
          <div className={styles.button_section}>
            <div onClick={this.updateTodo} className={styles.delete_section}>
              <EditOutlined style={{ color: "deepskyblue" }} />
            </div>
            <div onClick={this.deleteTodo} className={styles.delete_section}>
              <DeleteOutlined style={{ color: "red" }} />
            </div>
          </div>
        </li>
      </>
    );
  }
}

export default Todo;
