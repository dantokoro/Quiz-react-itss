import React, { Component } from "react";
import "./App.css";
import data from "./components/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Row, Col, Container } from "react-bootstrap";
import CategoryBar from "./components/CategoryBar.js";
import Header from "./components/Header.component.js";
import CreateQuestion from "./components/CreateQuestion.component.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionList: data,
      category: "All"
    };
    this.createQuestion = this.createQuestion.bind(this);
  }
  handleClickAll() {
    this.setState({
      category: "All"
    });
  }
  handleClickCategory(category) {
    this.setState({
      category: category
    });
  }
  createQuestion(questionObject){
    this.setState({
      questionList: [...this.state.questionList, questionObject]
    });
  }
  render() {
    const categorySet = new Set();
    this.state.questionList.map(item => {
      categorySet.add(item.category);
    });
    const categoryList = Array.from(categorySet);
    const questions = this.state.questionList.map(item => {
      if (this.state.category === "All") {
        return <p>{item.question}</p>;
      } else {
        if (this.state.category === item.category) {
          return <p>{item.question}</p>;
        }
      }
    });
    return (
      <div className="App">
        <Container>
          <Header></Header>
          <Row className="mt-3 justify-content-md-center">
            <Col>
              <Button
                className="px-5"
                variant="outline-primary"
                onClick={() => this.handleClickAll()}
              >
                All
              </Button>
            </Col>
          </Row>
          <Row className="mt-3 justify-content-md-center">
            <CategoryBar
              titles={categoryList}
              onClick={category => this.handleClickCategory(category)}
            ></CategoryBar>
          </Row>
          <Row className="mt-3 justify-content-md-center">
            <CreateQuestion categoryList={categoryList} createQuestion={this.createQuestion}></CreateQuestion>
          </Row>
        </Container>
        {questions}
      </div>
    );
  }
}
export default App;
