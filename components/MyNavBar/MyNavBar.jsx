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
        <Nav>
        <LinkContainer to="/">
            <NavItem eventKey={1} > Home Page </NavItem>
          </LinkContainer>
          <LinkContainer to="/private">
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
//
/**
 * pure: false option in the connect method is required to let the navbar know the react router has changed routes
 * Basically, the default (true) runs a componentShouldUpdate test, and unless something it is relying on in state
 * has changed, it won't update. Setting it to false will allow it to update and pick up the new route, and hightlight
 * the active link/tab
 */
export default MyNavBar
