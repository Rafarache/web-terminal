// Imports
import React from "react";
import Draggable from "react-draggable";

// Css
import "./css/terminalStyle.css";

// Components
import TerminalInputOutput from "./teminalInputOutput"

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
     return (
      <Draggable handle="strong" bounds="body" {...dragHandlers}>
        <div className="box no-cursor container resize">
          <strong className="cursor">
            <div className="bar">
              desktop - zsh - 80x24
              <div className="close-button unselectable">X</div>
            </div>
          </strong>
          <TerminalInputOutput/>
        </div>
      </Draggable>
    );
  }
}

export default Terminal;
