import React from "react";
import { Container, Form, FormControl, Navbar } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ setSearchTerm }) => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Form className="d-flex">
            <div>
              <AiOutlineSearch
                style={{ width: "40px", height: "auto" }}
                className=""
              />
            </div>
            <FormControl
              type="search"
              placeholder="Search Products..."
              className="border-0"
              aria-label="Search"
              style={{ width: "75vw", height: "auto" }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
