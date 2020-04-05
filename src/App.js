import React, { Component } from "react";
import "./App.css";
import data from "./components/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import CategoryBar from "./CategoryBar.js";
import QuestionCard from "./QuestionCard.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionList: data,
      category: "All"
    };
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
  render() {
    const categorySet = new Set();
    this.state.questionList.map(item => {
      categorySet.add(item.category);
    });
    const categoryList = Array.from(categorySet);
    const questions = this.state.questionList.map(item => {
      if (this.state.category === "All") {
        return (
          <Col md={4}>
            <QuestionCard item={item} />
          </Col>
        );
      } else {
        if (this.state.category === item.category) {
          return (
            <Col md={4}>
              <QuestionCard item={item} />
            </Col>
          );
        }
      }
    });
    return (
      <div className="App">
        <Container>
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
          <Row className="mt-3">
            {questions}
          </Row>
        </Container>
      </div >
    );
  }
}
// {this.state.questionList.map((item, index) => (
//   <p>{item.question}</p>
// ))}
export default App;
