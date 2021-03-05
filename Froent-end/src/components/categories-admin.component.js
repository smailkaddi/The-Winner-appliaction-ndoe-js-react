import React, { Component } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import UserService from "../services/user.service";
import { Link } from 'react-router-dom';
export default class QtsAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }


  
  render() {
    return (
      <div>
      <Container>
      ADD CATEGORIES
        <Form>
          <FormGroup>
            <Label for="firstname">Categories</Label>
            <Input type="text" name="firstname" id="firstname" 
                   onChange={this.handleChange} autoComplete="firstname"/>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/admin">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
    );
  }
}

