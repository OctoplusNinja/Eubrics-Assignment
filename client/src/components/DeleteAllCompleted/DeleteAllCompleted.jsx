import React, { Component } from "react";
import "./DeleteAllCompleted.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";
const { confirm } = Modal;

class DeleteAllCompleted extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    confirm({
      title: "Do You Want To Delete All Completed Todos?",
      okText: "Yes",
      cancelText: "No",
      okType: "danger",
      onOk: () => {
        this.props.deleteAll();
      },
    });
  }
  render() {
    return (
      <div className="Delete-Button-Container">
        <button onClick={this.handleClick}>
          <DeleteOutlined /> delete all
        </button>
      </div>
    );
  }
}

export default DeleteAllCompleted;
