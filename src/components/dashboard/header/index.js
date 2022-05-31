import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAdjust, FaRegStickyNote } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";

const Header = ({ handleShow }) => {
  const navItem = [
    {
      title: "Note",
      icon: <FaRegStickyNote style={{ width: "20px", height: "20px" }} />,
    },
    {
      title: "Shipping",
      icon: (
        <MdOutlineLocalShipping style={{ width: "20px", height: "20px" }} />
      ),
    },
    {
      title: "Hold Orders",
      icon: <FaAdjust style={{ width: "20px", height: "20px" }} />,
    },
    {
      title: "New Item",
      icon: <IoAddCircleOutline style={{ width: "20px", height: "20px" }} />,
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
            const { icon, title } = element;
            return (
              <Nav.Link href="" key={title} className=" bg-light rounded">
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
              </Nav.Link>
            );
          })}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
