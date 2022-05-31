import React, { useState } from "react";
import { Button, ListGroup, Offcanvas } from "react-bootstrap";
import { MdOutlineDashboard } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";

const Sidebar = ({ handleClose, show }) => {
  const sidebarData = [
    { icon: <MdOutlineDashboard />, title: "Dashboard" },
    { icon: <IoLocationOutline />, title: "Locations" },
    { icon: <FaFileInvoiceDollar />, title: "Pos Invoices" },
    { icon: <AiOutlineSetting />, title: "Setting" },
  ];

  return (
    <>
      <Offcanvas className="" show={show} onHide={handleClose}>
        <Offcanvas.Header className="bg-light" closeButton>
          <div className="w-100">
            <Offcanvas.Title className="text-center">goBilling</Offcanvas.Title>
            <div className="pt-3">
              <div>Location:</div>
              <div className="fw-bold">Los Angeles, California</div>
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup className="border-0">
            {sidebarData.map((element) => {
              const { icon, title } = element;
              return (
                <ListGroup.Item key={title} className="border-0">
                  <div className="d-flex">
                    <span className="d-flex align-items-center me-3 ">
                      {" "}
                      {icon}
                    </span>{" "}
                    <span>{title}</span>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
