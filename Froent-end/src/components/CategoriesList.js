import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class CategorieList extends Component {

  constructor(props) {
    super(props);
    this.state = {Categories: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('api/Categories')
      .then(response => response.json())
      .then(data => this.setState({Categories: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/api/Categorie/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      console.log("Remove Done!");
      let updatedCategories = [...this.state.Categories].filter(i => i._id !== id);
      this.setState({Categories: updatedCategories});
    });
  }

  render() {
    const {Categories, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const CategorieList = Categories.map(Categorie => {
      return <tr key={Categorie._id}>
        <td style={{whiteSpace: 'nowrap'}}>{Categorie.caty_name}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/Categories/" + Categorie._id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(Categorie._id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/Categories/new">Add Question</Button>
          </div>
          <h3>Categorie List</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="auto">Question</th>
                <th width="10%">Answer</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {CategorieList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default CategorieList;