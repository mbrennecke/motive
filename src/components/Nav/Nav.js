import React, { Component } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
}
import "./Nav.css";

export default class MyNav extends Component {
	constructor(props) {
		super(props);
		
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Motive Massage</NavbarBrand>
		)
	}
}

const Nav = () => (
  <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      Motive Massage
    </a>
  </nav>
);

export default Nav;