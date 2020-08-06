import React from "react";

import "./App.css";
import Timer from "./timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      num1: 1,
      num2: 1,
      ans: "",
      status: true,
      message: "",
    };

    // here we add a timer
  }

  render() {
    if (this.state.score === 30) {
      return (
        <div>
          <h1 id="winner">
            You won! <br></br>You are a true Math wiz!!
          </h1>
          <div>
            <button className="btn btn-warning" onClick={this.restart}>
              play again
            </button>
          </div>
        </div>
      );
    }
    
    return (
      <div className="container">
        <Timer/>
        <p id="score"> Your score is: {this.state.score}</p>
        <p>
          <i>Once you rich a score of 30 with two minute you win!</i>
        </p>
        <p id="countdown"></p>
        <div id="problem">
          {this.state.num1} + {this.state.num2}
        </div>
        <input
          className="form-control"
          placeholder="type your answer here"
          onChange={this.updateAns}
          onKeyPress={this.inputKey}
          value={this.state.ans}
        ></input>
        <div className="message">{this.state.message}</div>
      </div>
    );
  }
  restart = () => {
    this.setState({
      score: 0,
    });
  };
  updateAns = (event) => {
    //get the answer here
    this.setState({
      ans: event.target.value,
    });
  };
  inputKey = (event) => {
    if (event.key === "Enter") {
      this.check();
    }
  };
  check = () => {
    //check if the answer is correct
    if (this.state.num1 + this.state.num2 === parseInt(this.state.ans)) {
      console.log("answer correct");
      this.setState((state) => ({
        score: state.score + 1,
        num1: state.num1 + Math.floor(Math.random() * 11),
        num2: state.num2 + Math.floor(Math.random() * 11),
        status: true,
        ans: "",
        message: "You are correct!",
      }));
    } else {
      this.setState((state) => ({
        ans: "",
        status: false,
        message: "You are wrong!",
      }));
    }
  };
}

export default App;
