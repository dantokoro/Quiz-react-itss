import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "./style.css";

class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);

  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  onCategoryChange() {
   // this.setState({ showModal: true });
  }
  render() {
    return (
      <div>
        <Button variant="warning" className="btn-circle" onClick={this.open}>
          <FaPlus />
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>新しいクイズを作成する</Modal.Title>
          </Modal.Header>
          <Modal.Body className="question">
            <input type="text" name="question_name" placeholder="質問" />
            <input type="text" name="choice-a" placeholder="1" />
            <input type="text" name="choice-b" placeholder="2" />
            <input type="text" name="choice-c" placeholder="3" />
            <input type="text" name="choice-d" placeholder="4" />
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>答え</Form.Label>
                <Form.Control as="select" custom>
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
                {/* {this.state.data.map((item, key) =>
                <option key={key} value={item.category} />
                )} */}
                <option value="ahihi" />
                <option value="ahihiaaaa" />

            </datalist>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={this.close}>
          閉じる
          </Button>
          <Button variant="primary" onClick={this.close}>
          作成
          </Button>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CreateQuestion;
