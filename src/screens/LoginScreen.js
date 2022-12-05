import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import { login, getUserData } from '../redux/actions/usersActions'
import { Link, useNavigate } from 'react-router-dom'

function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usersReducer = useSelector(state => state.usersReducer)
    const { loading, error, currentUser } = usersReducer

    useEffect(() => {
        if (currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate])


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password, () => {
            dispatch(getUserData());
            navigate('/');
        }));
    }
    return (
        <Container>
            <Row className='justify-content-md-center py-5'>
                <Col xs={12} md={6}>
                    <h1>Login </h1>
                    {error && <h1>{error}</h1>}
                    {loading ? (<div className='text-center'>
                        <p></p>
                    </div>) : (
                        <Form onSubmit={submitHandler}>
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
                            <Button type='submit' variant='dark' className='mt-3'>
                                Sign In
                            </Button>
                            <Row className='py-3'>
                                <Col>
                                    Naujas naudotojas? <Link to={'/register'}>Registracija</Link>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Col>
            </Row>

        </Container>
    )
}

export default LoginScreen
