import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gol from "../../imagens/gol.jpeg";

function CarContent() {
	return (
		<Container className="d-flex justify-content-around container-body">
			<Row>
				<Col>      
					<Card style={{ width: "18rem" }} bg='light' text='dark'>
						<Card.Link href="#">
							<Card.Img variant="top" src={ gol } />
						</Card.Link>
						<Card.Body>
							<Card.Title>Volkswagen</Card.Title>
							<Card.Text>
								<p>Gol - Prata</p>
								<p>2019 - 2022</p>
							</Card.Text>
						</Card.Body>
						<Card.Body>
							<Card.Title>R$ 55.000,00</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default CarContent;
