import React, { Component } from 'react';
import '../index.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


class Navi extends Component {
  state = {
    name: ""
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    if (this.state.name.length >= 3) {
      this.props.fetchMovies(this.state.name);
    }
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">MovieSearch</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#watched">Obejrzane</Nav.Link>
          <Nav.Link href="#planed">Do obejrzenia</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl name="name" type="text" placeholder="...szukaj" className="mr-sm-2" value={this.state.name} onChange={this.handleOnChange} />
          <Button variant="outline-info" onClick={this.handleClick}>Szukaj</Button>
        </Form>
      </Navbar>

    )
  }
}

export default Navi;