import React, { useEffect, useCallback, useState } from 'react'
import axios from 'axios'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, NavDropdown, Button } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/usersActions';
import Container from "react-bootstrap/Container";
import './Header.css'

// const api = axios.create({
//     baseURL: `https://localhost:44374/`
// })

function Header() {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();

    //check if user is logged in. getting  userLogin state
    const usersReducer = useSelector((state) => state.usersReducer);
    const { currentUser } = usersReducer;

    const fetchData = useCallback(async () => {
        let response = await axios.get('/api/categories');
        setCategories(response.data);
    }, []);
    const logoutHandler = () => {
        dispatch(logout());
        console.log('Logout')
    }
    // if fetchData is changed it will trigger useEffect again
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <div class="container">
                <header class="blog-header lh-1 py-3">
                    <div class="row flex-nowrap justify-content-between align-items-center">
                        <div class="col-4 pt-1">
                            <a class="link-secondary" href="/">Subscribe</a>
                        </div>
                        <div class="col-4 text-center">
                            <a class="blog-header-logo text-dark" href="/">Real Estate</a>
                        </div>
                        <div class="col-4 d-flex justify-content-end align-items-center">
                            <a class="link-secondary" href="#" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                            </a>
                            {currentUser? 
                                <a class="btn btn-sm btn-outline-secondary" onClick={logoutHandler}>Logout</a>
                                : 
                                <a class="btn btn-sm btn-outline-secondary" href="/login">Sign in</a>
                            }
                        </div>
                    </div>
                </header>

                <div class="nav-scroller py-1 mb-2">
                    <nav class="nav d-flex justify-content-between">
                        <a class="p-2 link-secondary" href="#">World</a>
                        <a class="p-2 link-secondary" href="#">U.S.</a>
                        <a class="p-2 link-secondary" href="#">Technology</a>
                        <a class="p-2 link-secondary" href="#">Design</a>
                        <a class="p-2 link-secondary" href="#">Culture</a>
                        <a class="p-2 link-secondary" href="#">Business</a>
                        <a class="p-2 link-secondary" href="#">Politics</a>
                        <a class="p-2 link-secondary" href="#">Opinion</a>
                        <a class="p-2 link-secondary" href="#">Science</a>
                        <a class="p-2 link-secondary" href="#">Health</a>
                        <a class="p-2 link-secondary" href="#">Style</a>
                        <a class="p-2 link-secondary" href="#">Travel</a>
                    </nav>
                </div>
            </div>
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">GiantSoft</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {categories.map((obj, index) => {
                            if (obj.parentId === null && obj.name !== "Accessories" && obj.id !== 3 && obj.id !== 2) {
                                return (<NavDropdownMenu title={obj.name} key={obj.id} id="basic-nav-dropdown">
                                    {categories.map((obj1, index1) => {
                                        if (obj1.parentId === obj.id) {
                                            return (<NavDropdown.Item href="#action/3.2" key={obj1.id}>{obj1.name}</NavDropdown.Item>)
                                        }
                                    })}
                                </NavDropdownMenu>)
                            }
                        })}
                        {categories.map((obj, index) => {
                            if (obj.id === 2) {
                                return (<NavDropdownMenu title={obj.name} key={obj.id} id="basic-nav-dropdown">
                                    {categories.map((obj1, index1) => {
                                        if (obj1.parentId === obj.id) {
                                            return (<DropdownSubmenu href="#action/3.2" key={obj1.id} title={obj1.name}>
                                                {categories.map((obj2, index) => {
                                                    if (obj2.parentId === obj1.id) {
                                                        return (<NavDropdown.Item href="#action/9.1" key={obj2.id}>{obj2.name}</NavDropdown.Item>)
                                                    }
                                                })}
                                            </DropdownSubmenu>)
                                        }
                                    })}
                                </NavDropdownMenu>)
                            }
                        })}
                        {categories.map((obj, index) => {
                            if (obj.name === "Accessories") {
                                return (<Nav.Link href="#link">{obj.name}</Nav.Link>)
                            }
                        })}

                        {currentUser? (
                            <Button onClick={logoutHandler}>Logout</Button>
                        ) : (
                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <i className='fas fa-user'></i> Sign In
                                </Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
        </>
    )


}

export default Header
