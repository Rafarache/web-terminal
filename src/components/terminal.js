// Imports
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

// Css
import Style from "./css/terminalStyle.css";

class Terminal extends React.Component {
  state = {
    date: new Date(),
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    var monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const newDate = new Date()
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const hour = newDate.getHours();
    const minute = newDate.getMinutes();
    const seconds = newDate.getSeconds();


    return (
      <Draggable handle="strong" bounds="body" {...dragHandlers}>
        <div className="box no-cursor container resize">
          <strong className="cursor">
            <div className="bar">
              desktop - zsh - 80x24
              <div className="close-button unselectable">X</div>
            </div>
          </strong>
          <div className="text-area">
              Last login: {date} {monthsArray[month]} {hour}:{minute}:{seconds} on ttys000
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Terminal;
