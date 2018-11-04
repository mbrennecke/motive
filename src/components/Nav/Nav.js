import React, { Component } from "react";
import {
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

export default class MyNav extends Component {
	constructor(props) {
		super(props);
		
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}
	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	render() {
		return (
			<Navbar color="dark" dark>
			<Container>
				<NavbarBrand href="/" className="mr-4">Motive Massage</NavbarBrand>
				<NavbarToggler onClick={this.toggleNavbar} className="mr-auto"/>
				<Collapse isOpen={!this.state.collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href="/something/">Something</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/somethingesle/">Something else</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
				</Container>
			</Navbar>
		);
	}
}

