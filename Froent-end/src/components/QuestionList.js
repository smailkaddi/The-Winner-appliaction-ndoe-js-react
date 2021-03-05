import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class QuestionList extends Component {

  constructor(props) {
    super(props);
    this.state = {Questions: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('api/Questions')
      .then(response => response.json())
      .then(data => this.setState({Questions: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/api/Question/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      console.log("Remove Done!");
      let updatedQuestions = [...this.state.Questions].filter(i => i._id !== id);
      this.setState({Questions: updatedQuestions});
    });
  }

  render() {
    const {Questions, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const QuestionList = Questions.map(Question => {
      return <tr key={Question._id}>
        <td style={{whiteSpace: 'nowrap'}}>{Question.Cateogory}</td>
        <td>{Question.main_question}</td>
        <td>{Question.anser_quesion}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/Questions/" + Question._id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(Question._id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/Questions/new">Add Question</Button>
          </div>
          <h3>Question List</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="auto">Categorie</th>
                <th width="auto">Question</th>
                <th width="auto">Answer</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {QuestionList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default QuestionList;