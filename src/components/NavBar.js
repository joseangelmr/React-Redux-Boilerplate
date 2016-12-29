import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class NavBar extends Component {
    render() {
        return (
            <div className="component-navbar">
                <Navbar color="faded" light>
                    <NavbarBrand href="/">NavBar</NavbarBrand>
                    <Nav className="float-xs-right" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}