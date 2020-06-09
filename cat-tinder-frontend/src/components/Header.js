import React, { useState }  from 'react'
// import necessary components from reactstrap
import { Jumbotron, Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'

// creating a functional component
const Header = () => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <div>
      {/* copied from reactstrap Jumbotron and Navbar */}
      <Jumbotron fluid>
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Cat Tinder, Bro</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2 float-right" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/cats">Peep dem Kitties</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/newcat">Add Yo' Kitties</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Jumbotron>
    </div>
  )
}

export default Header
