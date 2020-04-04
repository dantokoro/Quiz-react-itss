import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Form } from "react-bootstrap";

class QuestionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }
    handleSelect = (option) => {
        this.setState({ selected: option })
    }
    render() {
        return (
            <div>
                <Card className="Question-card">
                    <Card.Header>{this.props.item.question}</Card.Header>
                    <Card.Body>
                        <Form className="Question-form">
                            <Form.Check
                                name="option"
                                type="radio"
                                id="default-radio"
                                label={`a: ${this.props.item.a}`}
                                onChange={() => this.handleSelect('a')}
                            />
                            <Form.Check
                                name="option"
                                type="radio"
                                id="default-radio"
                                label={`b: ${this.props.item.b}`}
                                onChange={() => this.handleSelect('b')}
                            />
                            <Form.Check
                                name="option"
                                type="radio"
                                id="default-radio"
                                label={`c: ${this.props.item.c}`}
                                onChange={() => this.handleSelect('c')}
                            />
                            <Form.Check
                                name="option"
                                type="radio"
                                id="default-radio"
                                label={`d: ${this.props.item.d}`}
                                onChange={() => this.handleSelect('d')}
                            />
                        </Form>
                        { this.state.selected !== null ? <div>Answer: {this.props.item.answer}</div> : null }
                        
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default QuestionCard;
