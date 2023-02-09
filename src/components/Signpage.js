import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signpage() {

    const naviagate = useNavigate('')


    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [succeess, setSucceess] = useState("");

    async function loginUser(event) {

        event.preventDefault();
        await axios
            .post("http://13.232.128.66:8080/gj-erp/auth/login", {
                username: userName,
                password: password,
            })
            .then((response) => {
                console.log(response.data.status);
                setSucceess(response.data.status)
                
                if(succeess == 200){
                    naviagate("/dashboard")
                }
                
            })
            .catch((error) => console.log(error));
    }


    return (
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <div className='border p-4 mt-5' style={{ backgroundColor: 'white' }}>
                            <Form style={{ backgroundColor: 'white' }} onSubmit={(e) => loginUser(e)}>
                                <h2>Sign In</h2>
                                <p className='text-muted'>Log in to your account to continue</p>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="text" onChange={(event) => setUsername(event.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={(event) => setPassword(event.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3 d-flex " controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" className='text-muted  ' />
                                    <a href='' className='ms-auto' style={{ textDecoration: 'none' }}>Forgot Password</a>
                                </Form.Group>

                                <Button variant="warning" type="submit" className='text-center col-12' >
                                    Sign In
                                </Button>
                            </Form>&nbsp;


                            <div style={{ padding: '0' }}>
                                <Row>
                                    <Col id='hr_row'><hr></hr></Col>&nbsp;
                                    <Col id='hr_row'><p className='text-muted mt-2' style={{ fontSize: '.7rem' }}>OR CONTINUE WITH</p></Col>&nbsp;
                                    <Col id='hr_row'><hr></hr></Col>
                                </Row>
                            </div>&nbsp;

                            <div className='text-center'>
                                <Row>
                                    <Col><button className='btn' id='external_buttons'>Google</button></Col>
                                    <Col><button className='btn' id='external_buttons'>Facebook</button></Col>
                                    <Col><button className='btn' id='external_buttons'>Twitter</button></Col>
                                </Row>
                            </div>&nbsp;

                            <div className='text-center text-muted'>
                                <label>Don't have an account?<a href='' style={{ textDecoration: 'none' }}>Sign Up</a></label>
                            </div>

                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default Signpage