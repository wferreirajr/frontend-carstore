import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Person } from "react-bootstrap-icons";
import InputGroup from "react-bootstrap/InputGroup";

// fixed="top"
function HeaderMenu() {
	return (
		<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
			<Container> 
				<Navbar.Brand href="/">Car Store</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">

					<InputGroup size="sm">
						<Form.Control placeholder="Pesquise pelo veiculo desejado" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						<Button variant="primary" id="button-addon2">Pesquisar</Button>
					</InputGroup>

					<Nav className="justify-content-end">
						<Nav.Item><Nav.Link href="/comprar">Comprar</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href="/cadastro">Vender</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href="#servicos">Serviços</Nav.Link></Nav.Item>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Brand href="/login">
					<Person color="white" size={22} />Entrar
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default HeaderMenu;