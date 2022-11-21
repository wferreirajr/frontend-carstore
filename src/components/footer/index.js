import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

// import "./Footer.css";
// fixed="bottom"

const Footer = () => {
	return (
		<Navbar expand="lg" bg="dark" variant="dark" className="justify-content-center" fixed="bottom">
			<Nav>
				<Nav.Link href="#" disabled>2022 Car Store - Todos os direitos reservados.</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default Footer;
