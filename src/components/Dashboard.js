import React from 'react'
import './Dashboard.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Dashboard() {
    return (
        <>
            {/* side bar */}
            <div className="sidebar shadow d-flex align-items-start flex-column">

                <h5 className="active p-4 border border-end-0 mt-2 border-danger"><b>Kathiravan Tex</b></h5>
                <a href="#news">Category Manager</a>
                <a href="#news">Inventry</a>
                <a href="#contact">Orders</a>
                <a href="#contact">Catalog Uploads</a>
                <a href="#contact">Payments</a>
                <a href="#contact">Promotions</a>
                <a href="#contact" className='mt-auto mb-2 '>Settings</a>
            </div>

            {/* page content */}
            <div className="content" >
                <div className='border border-start-0 p-3 mt-2 border-danger ' ><h3 >Dashboard</h3></div>
                <div className='m-5'>
                    <h2>Welcome To Gokulam Store</h2>
                    <p className='text-muted'> By Entering below details you can create new Business</p>
                    &nbsp;
                    <div>
                       <Container>
                            <Row >
                                <Col lg={5}>
                                    <span className="badge  rounded-pill" >1</span>
                                    <a href='' className='ms-1' id='badge_a'>Select Category</a></Col>
                                <Col lg={5}>
                                    <span className="badge  rounded-pill ">2</span>
                                    <a href='' className='ms-1' id='badge_a'>Add Product Details</a>
                                </Col>
                            </Row>
                       </Container>


                        <div className='mt-5'>
                            <Container>
                                <Row>
                                    <Col lg={5}>
                                        <div>
                                            <p className='mb-1 '>Category</p>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="dropdown-basic" className='text-muted shadow border p-2 '>
                                                    <span className='me-5 pe-5'>Choose Category</span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Col>
                                    <Col lg={4} >
                                        <p className='mb-1'>Description</p>
                                        <InputGroup className="shadow">
                                            <Form.Control
                                                placeholder="Type here"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        {/* <span className="badge bg-info text-light rounded-pill ms-5 mt-4" id="badge_lcon">+</span> */}
                                        <i className="fa-solid fa-circle-plus "></i>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className='mt-5'>
                            <Container>
                                <Row>
                                    <Col lg={5}>
                                        <div >
                                            <p className='mb-1 '>Sub Category</p>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="dropdown-basic" className='text-muted shadow border p-2 '>
                                                    <span className='me-5 pe-5'>Choose Category</span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Col>
                                    {/* style={{ maxWidth: "18rem" }} */}
                                    <Col lg={4} >
                                        <p className='mb-1'>Description</p>
                                        <InputGroup className="shadow">
                                            <Form.Control
                                                placeholder="Type here"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        {/* <span className="badge bg-info text-light rounded-pill ms-5 mt-4" id="badge_lcon">+</span> */}
                                        <i className="fa-solid fa-circle-plus "></i>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button className='btn btn-info text-light'>Edit</button>&nbsp;
                        <button className='btn btn-danger  text-light'>Delete</button>&nbsp;
                        <button className='btn text-light ' style={{ backgroundColor: "#7367f0" }}>Save</button>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Dashboard