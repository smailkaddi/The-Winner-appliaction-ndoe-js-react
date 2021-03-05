import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import UserService from "../services/user.service";
import { Link } from 'react-router-dom';
export default class BoardAdmin extends Component {
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
      <Container fluid>
        <div className="float-right">
          <Button color="success" tag={Link} to="/QtsAdmin">Add Customer</Button>
        </div>
        <h3>Customer List</h3>
        <Table className="mt-4">
          <thead>
            <tr>
              <th width="auto">Categories</th>
              <th width="10%">Actions</th>
            </tr>
          </thead>
          <tbody>
          <td>tech</td>
          <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link}>Edit</Button>
            <Button size="sm" color="danger" >Delete</Button>
          </ButtonGroup>
        </td>
          </tbody>
        </Table>
      </Container>
    </div>

    );
  }
}
