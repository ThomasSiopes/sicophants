import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { FaBookReader } from "react-icons/fa";

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
                <Navbar bg="red" variant="dark" expand="md" className="font-Lato">
                    <Container>
                        <Link className="navbar-brand" to={`/`}>
                            <FaBookReader id="nav-Icon"/>
                            <span><strong>PROVERBIAL WISDOM</strong></span>
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto text-center">
                                <Link className="nav-link" to={`/`}><strong>Home</strong></Link>
                                <Link className="nav-link" to={`/authorNavigation`}><strong>Authors</strong></Link>
                                <Link className="nav-link" to={`/topicNavigation`}><strong>Topics</strong></Link>
                            </Nav>
                            <Nav className="ms-auto text-center">
                                <Form onSubmit={this.handleSubmit}>
                                    <input type="text" id="searchTerm" placeholder="Search..." className="me-2 my-2" onChange={this.handleChange}></input>
                                    <input type="submit" className="btn btn-red mb-2" value="Submit"></input>
                                </Form>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )
        }
    }
}

export default NavBar;
