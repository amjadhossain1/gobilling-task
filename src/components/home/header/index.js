import React, { useContext } from "react";
import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
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
              className="icon-size  me-1"
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
          <Button
            className="d-flex align-items-center  px-3 mx-1"
            variant="primary"
          >
            <span className="order-revew">Order Revew</span>
            <BsFillCartCheckFill className="icon-size ms-2" />({cart.length})
          </Button>
        </Link>
        {user && (
          <Button
            className=" px-3 mx-1"
            variant={"outline-primary"}
            onClick={() => {
              setUser(null);
              navigate("/");
            }}
          >
            Sign out
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
