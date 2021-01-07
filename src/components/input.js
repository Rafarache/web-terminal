// Imports
import React, { Component, useState, createClass } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

// Css
import Style from "./css/terminalInputOutputStyle.css";

const enter = 13
const preInput = "user@my-pc % "

class Input extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          text : preInput,
          enterPressed : false
        }

        this.inpuputFullNameRef = React.createRef()

      this.escFunction = this.escFunction.bind(this);
      this.handleText = this.handleText.bind(this)
    }
    escFunction(event){
      if(event.keyCode === enter && !this.state.enterPressed) {
        this.setState({enterPressed : true})
        var newCommand = this.state.text.split('% ')
        newCommand = newCommand[1]
        this.props.appendCommand(newCommand)
      }
    }
    componentDidMount(){
      document.addEventListener("keydown", this.escFunction, false);
      this.inpuputFullNameRef.current.focus()
    }
    componentWillUnmount(){
      document.removeEventListener("keydown", this.escFunction, false);
    }

    handleText(e) {
        if(e.target.value !== "user@my-pc %"){
            this.setState({text: e.target.value});
        } else {
            this.setState({text: preInput});
        }
    }

    render(){
      return (  
        <div className="line_input">
            {this.state.enterPressed?
                this.state.text
                :
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleText}
                    spellcheck="false"
                    className="input"
                    ref={this.inpuputFullNameRef}
                />
            }
        </div>
      )
    }
  }

  export default Input