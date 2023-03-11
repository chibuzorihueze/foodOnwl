import React from "react";
import logo from "../../../assets/foodOnwl.png";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import OWButton from "../../common/buttons/Button";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const TopNav = ({ hasSearch }) => {
  return (
    <Navbar expand="md" className=" pt-0 shadow-m mr-8">
      <Navbar.Brand>
        <img src={logo} alt="Logo" className="h-40 w-48"  />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {hasSearch && (
          <Form inline className="flex-1 justify-center">
            <FormControl type="text" placeholder="Search menu..." className="mr-sm-2 w-96 mx-auto" />
          </Form>
        )}
        <Nav className="ml-auto align-items-center">
          <Nav.Link href="#" className="mr-4">
            <AiOutlineShoppingCart size={20} />
          </Nav.Link>
          <OWButton className="btns_green" >
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
