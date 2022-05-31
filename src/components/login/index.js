import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AppContext } from "../../App";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  let from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ email, password });
    navigate(from, { replace: true });
  };

console.log(email);
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="d-flex justify-content-center  align-items-center bg-light "
    >
      <div className="bg-white border rounded p-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Control
              autoFocus
              type="email"
              placeholder="Email"
              defaultValue={"admin@techvill.net"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Control
              type="password"
              placeholder="Password"
              defaultValue={"123456"}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-3"
            />
          </Form.Group>
          <Button
            block="true"
            size="lg"
            type="submit"
            // disabled={!validateForm()}
            className="w-100 mt-4"
          >
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
