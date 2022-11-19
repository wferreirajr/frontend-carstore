import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CarDetails() {
	return (
		<Container className="container-body">
			<h1>Detalhes</h1>
			<Row>
				<Col sm={8}>
					<Figure>
						<Figure.Image src="https://assets.volkswagen.com/is/image/volkswagenag/31_1138_GOL_20_1_highlight_16_9_1920x1080px?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmaGVpPTEwODAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmM2E1Nw==" />
					</Figure>
				</Col>
				<Col sm={4}>
					<Card style={{ width: "auto", height: "auto" }}>
						<Card.Body>
							<Card.Title>Dados do Veiíulo</Card.Title>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item>Modelo: Gol</ListGroup.Item>
							<ListGroup.Item>Marca: Volkswagem</ListGroup.Item>
							<ListGroup.Item>Ano: 2019 - 2020</ListGroup.Item>
							<ListGroup.Item>Cor: Vermelho</ListGroup.Item>
						</ListGroup>
						<Card.Body>
							<Card.Text>Opções: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
						</Card.Body>
						<Card.Body>
							<Card.Title>Valor</Card.Title>
							<Card.Text>R$ 55.000,00</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col sm={12}>
					<Figure>
						<Figure.Image width={300} src="https://assets.volkswagen.com/is/image/volkswagenag/stage-gol-last-edition-reflexo?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTIwOTkmaGVpPTEwNTAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmODZhNg==" />
						<Figure.Image width={300} src="https://assets.volkswagen.com/is/image/volkswagenag/74-2360_still-gol-23-last-edition--_close-lanterna_6k6k-sunset_amb-noite_adv_br_full--NJqYcZVBx8?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEyODAmaGVpPTcyMCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiY5ZjIy" />
						<Figure.Image width={300} src="https://assets.volkswagen.com/is/image/volkswagenag/74-2370_still-gol-23-last-edition--_close-grade-frontal_6k6k-sunset__adv_br_full-hd_1920x1080px?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmaGVpPTEwODAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmM2E1Nw==" />
						<Figure.Image width={300} src="https://assets.volkswagen.com/is/image/volkswagenag/_0011_10_Gol_On_hub_2020?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmaGVpPTEwODAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmM2E1Nw==" />
					</Figure>
				</Col>
			</Row>
		</Container>
	);
}

export default CarDetails;