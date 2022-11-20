/* eslint-disable react/prop-types */
import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gol from "../../imagens/gol.jpeg";

function CarContent(props) {

	return (

		<Col>      
			<Card style={{ width: "18rem" }} bg='light' text='dark'>
				<Card.Link href={ props.id }>
					<Card.Img variant="top" src={ gol } />
				</Card.Link>
				<Card.Body>
					<Card.Title>{ props.marca }</Card.Title>
					<Card.Text>
						<p>{ props.modelo } - { props.cor }</p>
						<p>{ props.ano }</p>
					</Card.Text>
				</Card.Body>
				<Card.Body>
					<Card.Title>{ props.valor }</Card.Title>
				</Card.Body>
			</Card>
		</Col>

	);
}

export default CarContent;
