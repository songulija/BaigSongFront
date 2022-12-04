import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/usersActions';
import { Link } from 'react-router-dom';
import { Form, Button, Col, Row, Container } from 'react-bootstrap'

function RegisterScreen({ history }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')

    const dispatch = useDispatch();
    //useSelector is function. we 'll access entire state(Store). we can just pull out state.userRegister
    const usersReducer = useSelector((state) => state.usersReducer);
    // getting userInfo from userRegister state
    const { loading, error, currentUser } = usersReducer;

    useEffect(() => {
        if (currentUser) {//if user info exist than means we already are logged in
            history.push('/')//redirect to whatever is in redirect
        }
    }, [history, currentUser]);

    //we want to redirect if we already logged in
    const submitHandler = function (e) {
        e.preventDefault();//prevemnt default behaviour when submit button is clicked. preved refresh of page
        const postObject = {
            "email": email,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "phoneNumber": phoneNumber,
            "roles": [
                "USER"
            ]
        }
        if (password === confirmPassword) {
            dispatch(register(postObject))
        }
    }

    return (
        <Container>
            <Row className='justify-content-md-center py-5'>
                <Col xs={12} md={6}>
                    <h1>Register </h1>
                    {error && <h1>{error}</h1>}
                    {loading ? (<div className='text-center'>
                        <p></p>
                    </div>) : (
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='firstname'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter first name'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='lastname'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter last name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='phonenumber'>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter phone number'
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='confirmpassword'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter confirm password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Button type='submit' variant='dark' className='mt-3'>
                                Sign In
                            </Button>
                            <Row className='py-3'>
                                <Col>
                                    Have an Account? <Link to={'/login'}>Login</Link>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Col>
            </Row>

        </Container>
    )
}

export default RegisterScreen
