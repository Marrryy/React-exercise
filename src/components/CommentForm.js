import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Label ,Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

// const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Comment extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isModalOpen: false
  };
  
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
  }

  render() {
    return(
      <div className="container">
        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}> Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Col md={12}>

                <Label htmlFor="rating" >Ratings</Label>
                <Control.select model=".rating" name="rating"
                  className="form-control" >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={12}>


                <Label htmlFor="name">Your Name</Label>
                <Control.text model=".name" id="name" name="name"
                  className="form-control" 
                  validators={{
                      minLength: minLength(3), maxLength: maxLength(15)
                  }}/>
                <Errors
                className="text-danger"
                model=".name"
                show="touched"
                messages={{
                    minLength: 'Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less'
                }}/>
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={12}>
                <Label htmlFor="message">Comment</Label>
                <Control.textarea model=".message" id="message" name="message"
                  rows="6"
                  className="form-control" />
                </Col>
              </Row>
              <Button type="submit" color="primary" onClick={this.toggleModal}>Login</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Comment;