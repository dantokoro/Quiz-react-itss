import React, { Component } from "react";
import "./App.css";
import data from "./components/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import Header from "./components/Header.component.js";
import CreateQuestion from "./components/CreateQuestion.component.js";


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
      <Container>
      <Header></Header>
      <CreateQuestion></CreateQuestion>
      {/* {this.state.questionList.map((item, index) => (
        <p>{item.question}</p>
      ))} */}
      </Container>
    </div>
    );
  }
}

export default App;
