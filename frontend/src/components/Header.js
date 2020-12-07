import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const Header = () => {
    return (
    <div>
        <Navbar bg="light" expand="lg">
        <LinkContainer to='/'>
            <Navbar.Brand><h3 className = 'jap_text mt-logo'>練習</h3></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <LinkContainer to = '/'>
                <Nav.Link><h4 className = 'mt-other'>Home</h4></Nav.Link>
            </LinkContainer>
            <Nav.Link><h4 className = 'mt-other'>Link</h4></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

export default Header
