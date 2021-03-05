import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/user.service";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
<div class="container">
  <div class="jumbotron1">
    <Link to={"/user"} className="btn btn-warning">START GAME</Link>
  </div> 
</div>
    );
  }
}
