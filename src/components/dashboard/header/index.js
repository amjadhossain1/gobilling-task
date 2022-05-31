import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { FaAdjust, FaRegStickyNote } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = ({ handleShow }) => {
  const navItem = [
    {
      path: "",
      title: "Note",
      icon: <FaRegStickyNote style={{ width: "20px", height: "20px" }} />,
    },
    {
      path: "",
      title: "Shipping",
      icon: (
        <MdOutlineLocalShipping style={{ width: "20px", height: "20px" }} />
      ),
    },
    {
      path: "",
      title: "Hold Orders",
      icon: <FaAdjust style={{ width: "20px", height: "20px" }} />,
    },
    {
      path: "",
      title: "New Item",
      icon: <IoAddCircleOutline style={{ width: "20px", height: "20px" }} />,
    },
    {
      path: "/",
      title: "Home",
      icon: <AiOutlineHome style={{ width: "20px", height: "20px" }} />,
    },
  ];

  return (
    <div>
      <Navbar expand="lg" variant="light" bg="white">
        <Container className="p-0">
          <Nav.Link className="" onClick={handleShow}>
            <AiOutlineMenu style={{ width: "30px", height: "30px" }} />
          </Nav.Link>
          {navItem.map((element) => {
            const { icon, title, path } = element;
            return (
              <Link
                to={path}
                key={title}
                className={
                  path
                    ? "text-decoration-none rounded p-2 btn btn-primary"
                    : "text-decoration-none rounded p-2 btn "
                }
              >
                <div className="d-flex align-items-center ">
                  <span
                    className="me-2"
                    style={{ width: "30px", height: "30px" }}
                  >
                    {" "}
                    {icon}
                  </span>{" "}
                  {title}
                </div>
              </Link>
            );
          })}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
