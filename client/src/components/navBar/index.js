import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button, Container, Form } from "react-bootstrap"

 class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', go: false };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { 
        this.setState({value: event.target.value}); 
    }
    
    handleSubmit(event) {
      event.preventDefault();
      this.setState({go: true});
    }

    render() {
        if(this.state.go) {
            this.setState({go: false});
            return <Redirect to={`/search/${this.state.value}`}/>
        }
        else {
            return (
                <Navbar bg="red" variant="dark" expand="sm" className="font-Lato">
                    <Container>
                        <Link className="navbar-brand" to={`/`}><strong>PROVERBIAL WISDOM</strong></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to={`/`}>Home</Link>
                            <Link className="nav-link" to={`/authorNavigation`}>Authors</Link>
                            <Link className="nav-link" to={`/topicNavigation`}>Topics</Link>
                        </Nav>
                        <Form onSubmit={this.handleSubmit}>
                            <input type="text" id="searchTerm" placeholder="Search..." className="mx-2" onChange={this.handleChange}></input>
                            <input type="submit" value="Submit"></input>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )
        }
    }
}

export default NavBar;