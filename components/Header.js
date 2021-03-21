import { useState } from "react";
import Link from "next/link";
import { APP_NAME } from "../config";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <a href="/">
          <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <a href="/signin">
                <NavLink>Signin</NavLink>
              </a>
            </NavItem>
            <NavItem>
              <a href="/signup">
                <NavLink>Signup</NavLink>
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
