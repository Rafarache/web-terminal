// Imports
import React from "react";

// Css
import "./css/terminalInputOutputStyle.css";

// Classes
import File from "../classes/file"

// Componets
import Input from "./input"

// Scripts
import commandOutput from "../scripts/outputHandler";

const newDate = new Date()
const date = newDate.getDate();
const month = newDate.getMonth();
const hour = newDate.getHours();
const minute = newDate.getMinutes();
const seconds = newDate.getSeconds();

class TerminalInputOutput extends React.Component {
    
    handleAppendCommand = (command) => {
        // Output
        var output = this.handleCommand(command)
        var newArray = this.state.responses
        newArray.push(<div>{output}</div>)
        this.setState({responses : newArray})
        
        this.pushInput()
    }

    setCurrentFile = (file) => {
        this.setState({currentFile : file})
    }

    handleCommand = (command) => {
        var currentFile = this.state.currentFile
        return commandOutput(command, currentFile, this.setCurrentFile)
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