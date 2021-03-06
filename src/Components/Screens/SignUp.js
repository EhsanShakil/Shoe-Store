import React from "react";
import { Form, Button } from "react-bootstrap";
import "../../App.css";
import Footer from "../Screens/Footer";
const SignUp = () => {
  return (
    <>
      <div className="login">
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
