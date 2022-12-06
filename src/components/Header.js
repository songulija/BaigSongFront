import React, { useEffect, useCallback, useState } from 'react'
import axios from 'axios'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, NavDropdown, Button, Form } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/usersActions';
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom';
import './Header.css'

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //check if user is logged in. getting  userLogin state
    const usersReducer = useSelector((state) => state.usersReducer);
    const userInfoReducer = useSelector((state) => state.userInfoReducer);
    const { currentUser } = usersReducer;
    const { role } = userInfoReducer

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/')
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Real Estate</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            classNameName="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/properties">Properties</Nav.Link>
                            <Nav.Link href="/my-properties" disabled={currentUser ? false : true}>
                                My Properties
                            </Nav.Link>
                            <Nav.Link href="/favourite-properties" disabled={currentUser ? false : true}>
                                Favourite Properties
                            </Nav.Link>
                            {currentUser !== null && role === "ADMINISTRATOR" ?
                                <NavDropdown title="Admin" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/users/admin">Users</NavDropdown.Item>
                                    <NavDropdown.Item href="/countries/admin">
                                        Countries
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/cities/admin">
                                        Cities
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/property-types/admin">
                                        Property Types
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/properties/admin">
                                        Properties
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/comments/admin">
                                        Comments
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/favourite-properties/admin">
                                        Favourite Properties
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/journals/admin">
                                        Journals
                                    </NavDropdown.Item>
                                </NavDropdown> :
                                <div></div>
                            }
                        </Nav>
                        {/* <Form classNameName="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                classNameName="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                        <div style={{padding: 5}}></div>
                        {currentUser ?
                            <Button variant="outline-secondary" onClick={logoutHandler}>Logout</Button>
                            :
                            <Button variant="outline-secondary" href="/login">Sign in</Button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <div className="container">
                <header className="blog-header lh-1 py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                            <a className="link-secondary" href="/">Subscribe</a>
                        </div>
                        <div className="col-4 text-center">
                            <a className="blog-header-logo text-dark" href="/">Real Estate</a>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="link-secondary" href="#" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                            </a>
                            {currentUser ?
                                <a className="btn btn-sm btn-outline-secondary" onClick={logoutHandler}>Logout</a>
                                :
                                <a className="btn btn-sm btn-outline-secondary" href="/login">Sign in</a>
                            }
                        </div>
                    </div>
                </header>

                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        <a className="p-2 link-secondary" href="#">Main</a>
                        <a className="p-2 link-secondary" href="#">About Us</a>
                        <a className="p-2 link-secondary" href="#">Services</a>
                        <a className="p-2 link-secondary" href="#">Properties</a>
                    </nav>
                </div>
            </div> */}

        </>
    )


}

export default Header
