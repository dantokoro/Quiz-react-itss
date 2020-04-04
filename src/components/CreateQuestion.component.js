import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "./style.css";

class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      answer: "",
      category: ""
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.onQuestionChange = this.onQuestionChange.bind(this);
    this.onAChange = this.onAChange.bind(this);
    this.onBChange = this.onBChange.bind(this);
    this.onCChange = this.onCChange.bind(this);
    this.onDChange = this.onDChange.bind(this);
    this.onAnswerChange = this.onAnswerChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onCreateQuestionClick = this.onCreateQuestionClick.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  onQuestionChange(e) {
    this.setState({
      question: e.target.value
    });
  }
  onAChange(e) {
    this.setState({
      a: e.target.value
    });
  }
  onBChange(e) {
    this.setState({
      b: e.target.value
    });
  }
  onCChange(e) {
    this.setState({
      c: e.target.value
    });
  }
  onDChange(e) {
    this.setState({
      d: e.target.value
    });
  }
  onAnswerChange(e) {
    this.setState({
      answer: e.target.value
    });
  }
  onCategoryChange(e) {
    this.setState({
      category: e.target.value
    });
  }
  
  onCreateQuestionClick() {
    const newQuestion = {
      question: this.state.question,
      a: this.state.a,
      b: this.state.b,
      c: this.state.c,
      d: this.state.d,
      answer: this.state.answer,
      category: this.state.category
    };
    this.props.createQuestion(newQuestion);
    this.close();
  } 
  render() {
    return (
      <div>
        <Button
          variant="outline-primary"
          className="btn-circle"
          onClick={this.open}
        >
          <FaPlus />
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>新しいクイズを作成する</Modal.Title>
          </Modal.Header>
          <Modal.Body className="question">
            <input type="text" name="question_name" placeholder="質問" onChange={this.onQuestionChange}/>
            <input type="text" name="choice-a" placeholder="1" onChange={this.onAChange}/>
            <input type="text" name="choice-b" placeholder="2" onChange={this.onBChange} />
            <input type="text" name="choice-c" placeholder="3" onChange={this.onCChange} />
            <input type="text" name="choice-d" placeholder="4" onChange={this.onDChange} />
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>答え</Form.Label>
                <Form.Control as="select" onChange={this.onAnswerChange} custom>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
            </Form>
            カテゴリ
            <input type="text" list="data" onChange={this.onCategoryChange} />
            <datalist id="data">
              {this.props.categoryList.map((item, key) => (
                <option key={key} value={item} />
              ))}
            </datalist>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.close}>
              閉じる
            </Button>
            <Button variant="primary" onClick={() => this.onCreateQuestionClick()}>
              作成
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CreateQuestion;
