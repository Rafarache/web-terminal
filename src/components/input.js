// Imports
import React from "react";

// Css
import "./css/terminalInputOutputStyle.css";

const enter = 13
const preInput = "user@my-pc"

class Input extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          text : preInput + " " + props.dirName + " % ",
          limit : preInput + " " + props.dirName + " %",
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
        if(e.target.value.length < this.state.limit.length) {
            this.setState({text: this.state.limit + " "});
        } else if(e.target.value !== this.state.limit){
            this.setState({text: e.target.value});
        } else {
            this.setState({text: this.state.text});
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