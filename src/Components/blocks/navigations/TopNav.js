import React from "react";
import logo from "../../../assets/foodOnwl.png";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import OWButton from "../../common/buttons/Button";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNav = ({ hasSearch }) => {
  return (
    <Navbar expand="md" className=" pt-0 shadow-m px-2">
      <Navbar.Brand>
        <Link to="/">
          <div className="relative w-28 h-20 ">
            <img
              src={logo}
              alt="Logo"
              className="absolute h-full w-full cursor-pointer"
            />
          </div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {hasSearch && (
          <Form inline className="flex-1">
            <FormControl
              type="text"
              placeholder="Search menu..."
              className="mr-sm-2 w-72 mx-auto"
            />
          </Form>
        )}
        <Nav className="align-items-center ml-auto">
          <Nav.Link href="#" className="mr-4">
            <AiOutlineShoppingCart size={20} />
          </Nav.Link>
          <OWButton className="btns_green" disabled>
            Sign Up
          </OWButton>
          <div className="rounded-full border border-[#BDBDBD] bg-[#EAEAEA] p-2.5 d-flex align-items-center ml-4">
            <AiOutlineUser />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
