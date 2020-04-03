import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col } from "react-bootstrap";

class CategoryBar extends Component {
  render() {
    const categories = this.props.titles.map(item => {
      return (
        <Col md="auto">
          <Button
            className="px-5"
            variant="outline-primary"
            onClick={() => this.props.onClick(item)}
          >
            {item}
          </Button>
        </Col>
      );
    });
    return categories;
  }
}
export default CategoryBar;
