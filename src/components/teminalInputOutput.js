// Imports
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

// Css
import Style from "./css/terminalInputOutputStyle.css";

// Componets
import Input from "./input"


class TerminalInputOutput extends React.Component {
    
    handleAppendCommand = (command) => {
        // Constants
        var newArray = this.state.responses
        newArray.push(<div>{command}</div>)

        this.setState({responses : newArray})
        
        this.pushInput()
    }
    
    pushInput = () => {
        var newArray = this.state.responses
        newArray.push(<Input appendCommand={this.handleAppendCommand}/>)
        
        console.log(newArray)
        this.setState({responses : newArray})
    }
    
    state = {
      responses : [<Input appendCommand={this.handleAppendCommand}/>],
      status : true
    };

  render(){
    var monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const newDate = new Date()
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const hour = newDate.getHours();
    const minute = newDate.getMinutes();
    const seconds = newDate.getSeconds();

    return (
        <div className="text-area">
            Last login: {date} {monthsArray[month]} {hour}:{minute}:{seconds} on ttys000
            <div>
                {this.state.responses}
            </div>
        </div>
    );
  }
}

export default TerminalInputOutput;