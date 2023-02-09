import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Sign.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Sign() {
  const [userName, setUsername] = useState("");
  const [password, setPasword] = useState("");
  

//   body{
//     "username":userName,
//     "password":password
//   }
  async function loginUser(event) {   

    event.preventDefault();
    await axios
      .post("http://13.232.128.66:8080/gj-erp/auth/login", {
        username:userName,
        password:password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  // useEffect(()=>{
  //     console.log(userName);
  //     console.log(password);
  // },[userName,password])

  return (
    <>
      <Container>
        <Row>
          <Col sm={6}></Col>
          <Col sm={6}></Col>
        </Row>
        <Row>
          <Col sm></Col>
          <Col sm>
            <div className=" border mt-5 p-4 " id="sign_box">
              <Form onSubmit={(e)=>loginUser(e)}>
                <Form.Label>
                  <h2>Sign In</h2>
                </Form.Label>
                <Form.Text className="text-muted ">
                  <p>Log in to you account to continue.</p>
                </Form.Text>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(event) => setPasword(event.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 d-flex"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" label="Remember me" id="text" />
                  <Form.Label className="flex-reverse">
                    <a
                      href=""
                      className="ms-4"
                      id="text"
                      style={{ textDecoration: "none" }}
                    >
                      forgot password?
                    </a>
                  </Form.Label>
                </Form.Group>

                <div className="d-grid gap-2 col-12 mx-auto text-center">
                  <Link to="/dashboard">
                  <Button
                    style={{ width: "18rem" }}
                    variant="warning"
                    type="submit"
                    className="text-center"
                  >
                    Sign In
                  </Button>
                  </Link>
                </div>
              </Form>
              &nbsp;
              <div className="row">
                <div className="col-lg-4">
                  <hr></hr>
                </div>
                <div className="col-lg-4" id="hr_font">
                  OR CONTINUE WITH
                </div>
                <div className="col-lg-4">
                  <hr></hr>
                </div>
              </div>
              &nbsp;
              <div className="text-center">
                <button className="btn me-3 bg-secondary text-light ">
                  Google
                </button>
                <button className="btn me-3 bg-secondary text-light ">
                  Facebook
                </button>
                <button className="btn bg-secondary text-light">Twitter</button>
              </div>
              &nbsp;
              <div className="text-center" id="text">
                <p className="text-muted  ">
                  Don't have an account?
                  <a href="" style={{ textDecoration: "none" }} onClick={loginUser()}>
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </Col>
          <Col sm></Col>
        </Row>
      </Container>
    </>
  );
}

export default Sign;