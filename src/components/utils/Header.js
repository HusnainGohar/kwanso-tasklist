import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink className='m-2 text-decoration-none text-dark text-uppercase' to="/">Task's List By Husnain Gohar</NavLink>
                <Nav>
                    <Nav><NavLink className='m-2 text-decoration-none text-primary text-uppercase' to="/">Home</NavLink></Nav>
                    <Nav><NavLink className='m-2 text-decoration-none text-primary text-uppercase' to="/create-task">Add Task</NavLink></Nav>
                    <Nav><NavLink className='m-2 text-decoration-none text-primary text-uppercase' to="/bulk-delete">Remove Tasks</NavLink></Nav>
                </Nav>
            </Container>
        </Navbar>
    );
};
export default Header;
