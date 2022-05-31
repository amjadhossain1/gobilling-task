import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { FaAdjust, FaRegStickyNote } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = ({ handleShow }) => {
  const navItem = [
    {
      path: "#",
      title: "Note",
      icon: <FaRegStickyNote className="icon-size " />,
    },
    // {
    //   path: "#",
    //   title: "Hold Orders",
    //   icon: <FaAdjust className="icon-size " />,
    // },
    {
      path: "/home",
      title: "New Item",
      icon: <IoAddCircleOutline className="icon-size " />,
    },
    {
      path: "/",
      title: "Home",
      icon: <AiFillHome className="icon-size " />,
    },
  ];

  return (
    <Navbar expand="lg" variant="light" bg="white">
      <Container className="p-0">
        <Nav.Link className="" onClick={handleShow}>
          <AiOutlineMenu className="icon-size " />
        </Nav.Link>
        {navItem.map((element) => {
          const { icon, title, path } = element;
          return (
            <Link
              to={path}
              key={title}
              className={
                path === "/"
                  ? "text-decoration-none rounded p-2 btn btn-primary"
                  : "text-decoration-none rounded p-2 btn bg-light"
              }
            >
              <div className="d-flex align-items-center ">
                <span className="icon-size me-2"> {icon}</span> {title}
              </div>
            </Link>
          );
        })}
      </Container>
    </Navbar>
  );
};

export default Header;
