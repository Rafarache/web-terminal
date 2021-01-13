// Imports
import React from "react";
import Draggable from "react-draggable";

// Css
import "./css/terminalStyle.css";

// Assets
import Folder from "../assets/folder-icon.png"

// Components
import TerminalInputOutput from "./teminalInputOutput"

var w = window.innerWidth;
var h = window.innerHeight;


class Terminal extends React.Component {
  state = {
    date: new Date(),
    visible: true
  };

  closeWindow = () => {
      this.setState({visible: false})
  }

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    if(!this.state.visible) {
        return(<></>)
    } else {
        return (
         <Draggable handle="strong" bounds="body" defaultPosition={{x: (w/2 - 500/2), y: (h/2 - 400/2)}} {...dragHandlers}>
           <div className="box no-cursor container resize">
             <strong className="cursor">
               <div className="bar">
                   <div className="terminal-title">
                       <img src={Folder} alt="folder"/>
                        root -- zsh -- 80x24
                   </div>
                 <div className="close-button unselectable" onClick={this.closeWindow}>X</div>
               </div>
             </strong>
             <TerminalInputOutput/>
           </div>
         </Draggable>
       );
    }
  }
}

export default Terminal;
