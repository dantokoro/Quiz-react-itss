import React, { Component } from "react";
import "./App.css";
import data from "./components/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Container } from "react-bootstrap";
import CategoryBar from "./components/CategoryBar.js";
import Header from "./components/Header.component.js";
import Footer from "./components/Footer.component.js";
import CreateQuestion from "./components/CreateQuestion.component.js";
import QuestionCard from "./components/QuestionCard.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionList: data,
      category: "All"
    };
    const categorySet = new Set();
    this.state.questionList.map(item => {
      categorySet.add(item.category);
    });
    //const categoryList = Array.from(categorySet);
    this.state.categorySet = categorySet;
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
  createQuestion(questionObject) {
    const categorySet = new Set(this.state.categorySet);
    categorySet.add(questionObject.category);
    this.setState({
      questionList: [...this.state.questionList, questionObject],
      categorySet: categorySet
    });
  }
  render() {
    // const categorySet = new Set();
    // this.state.questionList.map(item => {
    //   categorySet.add(item.category);
    // });
    const categoryList = Array.from(this.state.categorySet);
    const questions = this.state.questionList.map((item, index) => {
      if (this.state.category === "All") {
        return (
          <Col md={4}>
            <QuestionCard item={item} index={index} />
          </Col>
        );
      } else {
        if (this.state.category === item.category) {
          return (
            <Col md={4}>
              <QuestionCard item={item} index={index} />
            </Col>
          );
        }
      }
    });
    return (
      <div className="App">
        <Header></Header>
        <Container>
          <Row className="mt-3 justify-content-md-center">
            <Col>
              <Button
                className="btn-size"
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
          <Row className="mt-3">
            {questions}
          </Row>
        </Container>
        <Footer></Footer>
      </div >
    );
  }
}
export default App;
