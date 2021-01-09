// Imports
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

// Css
import Style from "./css/terminalInputOutputStyle.css";

// Classes
import File from "../classes/file"

// Componets
import Input from "./input"

// Scripts
import commandOutput from "../scripts/outputHandler";
import decodeCommand from "../scripts/decodeCommand"

class TerminalInputOutput extends React.Component {
    
    handleAppendCommand = (command) => {
        // Output
        var output = this.handleCommand(command)
        var newArray = this.state.responses
        newArray.push(<div>{output}</div>)
        this.setState({responses : newArray})
        
        this.pushInput()
    }

    changeCurrentDir = (newDirName) => {
        var newDir = this.state.currentFile.content.find(dir => dir.name === newDirName)
        if(newDir !== undefined) {
            console.log(newDir)
            this.setState({currentFile : newDir})
        }
    }

    moveToLocation = (newDir) => {
        this.setState({currentFile : newDir})
    }

    isDir = (fileName) => {
        var dir = this.state.currentFile.content.find(dir => dir.name === fileName)
        if(dir  === undefined) {
            return false
        } else if (dir.type === ".dir") {
            return true
        }
        return false
    }

    handleCommand = (command) => {
        var decodedCommand = decodeCommand(command)
        var instruction = decodedCommand[0]
        if(instruction === "cd") {
            var argument = decodedCommand[1]
            if (argument === "..") {
                this.moveToLocation(this.state.currentFile.location)
            } else if (this.isDir(argument)) {
                // Do noting
            } else {
                this.changeCurrentDir(argument)
            }
        }
        var currentFile =this.state.currentFile
        return commandOutput(command, currentFile)
    }
    
    pushInput = () => {
        var newArray = this.state.responses
        newArray.push(<Input appendCommand={this.handleAppendCommand} dirName={this.state.currentFile.name}/>)
        
        this.setState({responses : newArray})
    }

    componentDidMount = () => {
        var root = this.state.currentFile
        root.content.push(
            new File("Portifolio",".dir",[],root),
            new File("Sobre",".exe","",root)
        )
        this.setState({currentFile : root})
    }
    
    state = {
      responses : [<Input appendCommand={this.handleAppendCommand} dirName={"root"} />],
      currentFile : new File("root",".dir",[],"root")
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