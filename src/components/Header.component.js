import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Image
            src="https://quiztime123.000webhostapp.com/img/logo.png"
            className="logo"
          />
          <hr/>
        </Container>
      </div>
     
    );
  }
}

export default Header;
