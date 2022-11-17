import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Person } from "react-bootstrap-icons";

import "./estilo.css";
// fixed="top"
function HeaderMenu() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Car Store</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link href="#comprar">Comprar</Nav.Link>
						<Nav.Link href="#vender">Vender</Nav.Link>
						<Nav.Link href="#servicos">Serviços</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Brand href="#entrar">
					<Person color="white" size={26} />Entrar
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default HeaderMenu;