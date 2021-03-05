import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';


class CategorieEdit extends Component {

  emptyCategorie = {
    caty_name: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyCategorie
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const Categorie = await (await fetch(`/api/Categorie/${this.props.match.params.id}`)).json();
      this.setState({item: Categorie});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/api/Categorie', {
      method: (item._id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/Categories');
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit Categorie' : 'Add Categorie'}</h2>;

    return <div>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="caty_name">Categorie</Label>
            <Input type="text" name="caty_name" id="caty_name" value={item.caty_name || ''}
                   onChange={this.handleChange} autoComplete="caty_name"/>
          </FormGroup>    
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/Categories">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(CategorieEdit);