import React, { useContext } from "react";
import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";

const Header = ({ setSearchTerm }) => {
  const { cart, user, setUser } = useContext(AppContext);
  let navigate = useNavigate();

  return (
    <Navbar
      expand="lg"
      variant=""
      bg=""
      className="fixed-top bg-light shadow-sm"
    >
      <Container>
        <Form className="d-flex">
          <div>
            <AiOutlineSearch
              style={{ width: "30px", height: "auto" }}
              className="me-1"
            />
          </div>
          <FormControl
            type="search"
            placeholder="Search Products..."
            className="border-0"
            aria-label="Search"
            style={{ width: "40vw" }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
        <Link
          to="/dashboard"
          className="text-decoration-none d-flex justify-content-end w-25"
        >
          <Button className=" px-3 mx-1" variant={"outline-primary"}>
            Order Revew ({cart.length})
          </Button>
        </Link>

        <Button
          className=" px-3 mx-1"
          variant={"outline-primary"}
          onClick={() => {
            setUser(null);
            navigate("/");
          }}
        >
          {user ? " Sign out" : "Login"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
