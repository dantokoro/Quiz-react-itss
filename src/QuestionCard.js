import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Form } from "react-bootstrap";

class QuestionCard extends Component {
    render() {
        return (
            <div>
                <Card className="Question-card">
                    <Card.Header>{this.props.item.question}</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Check
                                name="question"
                                type="radio"
                                id="default-radio"
                                label={`a: ${this.props.item.a}`}
                            />
                            <Form.Check
                                name="question"
                                type="radio"
                                id="default-radio"
                                label={`b: ${this.props.item.b}`}
                            />
                            <Form.Check
                                name="question"
                                type="radio"
                                id="default-radio"
                                label={`c: ${this.props.item.c}`}
                            />
                            <Form.Check
                                name="question"
                                type="radio"
                                id="default-radio"
                                label={`d: ${this.props.item.d}`}
                            />
                        </Form>
                        <div>Answer: {this.props.item.answer}</div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default QuestionCard;
