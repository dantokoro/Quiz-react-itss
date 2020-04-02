import React, { Component } from "react";
import "./App.css";
import data from "./components/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionList: data
    };
  }
  render() {
    return (
    <div className="App">
      {this.state.questionList.map((item, index) => (
        <p>{item.question}</p>
      ))}
    </div>
    );
  }
}

export default App;
