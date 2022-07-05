import React, { Component } from "react";
import "./StatusBar.css";

class StatusBar extends Component {
  render() {
    return (
      <div className="StatusBar">
        <span
          className={`StatusBar-Items ${
            this.props.status === "all" ? "active" : ""
          }`}
          onClick={() => {
            this.props.changeStatus("all");
          }}
        >
          All
        </span>
        <span
          className={`StatusBar-Items ${
            this.props.status === "active" ? "active" : ""
          }`}
          onClick={() => {
            this.props.changeStatus("active");
          }}
        >
          Active
        </span>
        <span
          className={`StatusBar-Items ${
            this.props.status === "completed" ? "active" : ""
          }`}
          onClick={() => {
            this.props.changeStatus("completed");
          }}
        >
          Completed
        </span>
      </div>
    );
  }
}

export default StatusBar;
