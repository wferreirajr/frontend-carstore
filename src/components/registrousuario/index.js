import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function RegistroUsuario() {
	return (
		<Container className="container-body-login">
			<Row>
				<Col sm={{ span: 6, offset: 3 }}>
					<Form>
						<Form.Text className="text-muted">Cadastre sua usuário</Form.Text>
						
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Nome</Form.Label>
							<Form.Control type="text" placeholder="Nome" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>e-mail</Form.Label>
							<Form.Control type="email" placeholder="Endereço de email" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Celular</Form.Label>
							<Form.Control type="tel" placeholder="Celular" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Senha</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

						<Button variant="primary" type="submit">Criar Conta</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default RegistroUsuario;