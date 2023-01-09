import React, { useEffect, useCallback, useState } from 'react'
import axios from 'axios'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, NavDropdown, Button, Form } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/usersActions';
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom';
import styles from "./Header.module.scss";
import { RiLoginCircleLine, RiLogoutCircleLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineRealEstateAgent } from 'react-icons/md'

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState(null)
    //check if user is logged in. getting  userLogin state
    const usersReducer = useSelector((state) => state.usersReducer);
    const userInfoReducer = useSelector((state) => state.userInfoReducer);
    const { currentUser } = usersReducer;
    const { role } = userInfoReducer

    const searchProperties = () => {
        if (title !== null)
            navigate(`/properties?page=1&itemsPerPage=10&title=${title}`)
        else 
            navigate('/properties?page=1&itemsPerPage=10')
    }

    const onDataChange = (data) => {
        console.log(data)
        setTitle(data)
    }

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/')
    }
    return (
        <>
            <Navbar collapseOnSelect expand="md" className={styles.navcolorr} variant="light">
                <Container>
                    <Navbar.Brand href="/">Real Estate</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/properties?page=1&itemsPerPage=10">Rent</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
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
                                    {/* <NavDropdown.Item href="/favourite-properties/admin">
                                        Favourite Properties
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/journals/admin">
                                        Journals
                                    </NavDropdown.Item> */}
                                </NavDropdown> :
                                <div></div>
                            }
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                            <Form className="d-flex">
                                <Form.Control
                                    onChange={(e) => onDataChange(e.target.value)}
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    value={title}
                                />
                                <Button onClick={searchProperties} variant="outline-dark">Search</Button>
                            </Form>
                            <a href='/user/properties'><MdOutlineRealEstateAgent title='My Properties' size={40} style={{ padding: 5, cursor: 'pointer', color: 'black' }} /></a>
                            <a href='/favourite-properties'><AiOutlineHeart title='Favourite properties' size={40} style={{ padding: 5, cursor: 'pointer', color: 'black' }} /></a>
                            {currentUser ?
                                <div>
                                    <a href='/profile'><CgProfile title='Profile' size={40} style={{ padding: 5, cursor: 'pointer', color: 'black' }} /></a>
                                    <RiLogoutCircleLine title='Logout' size={40} onClick={logoutHandler} style={{ padding: 5, cursor: 'pointer', color: 'black' }} />
                                </div>
                                :
                                <a href='/login'><RiLoginCircleLine title='Login' size={40} style={{ padding: 5, cursor: 'pointer', color: 'black' }} /></a>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Real Estate</Navbar.Brand>
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
                        <Form classNameName="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                classNameName="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <div style={{padding: 5}}></div>
                        {currentUser ?
                            <Button variant="outline-secondary" onClick={logoutHandler}>Logout</Button>
                            :
                            <Button variant="outline-secondary" href="/login">Sign in</Button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </>
    )


}

export default Header
