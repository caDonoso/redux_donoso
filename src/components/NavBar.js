import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

function NavBar(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Tasks" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/addTodo">Create new</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/viewTodoList">View</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Comments" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/addComment">Create new</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/viewComments">View</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;