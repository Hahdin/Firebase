import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export const MyNavBar = ({ ...props }) => {
  return (
<Navbar inverse fluid collapseOnSelect style={{boxShadow: '2px 2px 10px black'}}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Fire Base 1</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className="mr-auto">
        <LinkContainer exact to="/">
            <NavItem eventKey={1} > Home Page </NavItem>
          </LinkContainer>
          <LinkContainer exact to="/private">
            <NavItem eventKey={2} > User only </NavItem>
          </LinkContainer>
        </Nav>
        <Navbar.Text pullRight style={{ fontSize: '12px', marginRight: '10px' }}>
          {'Welcome'}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}
/**
 * Please note that by default React Router will match any location 
 * that contains path specified in to prop. To make <LinkContainer> 
 * to match the location exactly, set exact prop to true or use 
 * <IndexLinkContainer> instead.
 */
export default MyNavBar
