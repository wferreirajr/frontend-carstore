import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Login() {
	return (
		<Container className="container-body-login">
			<Row>
				<Col sm={{ span: 6, offset: 3 }}>
					<Form>
						<Form.Text className="text-muted">Para entrar na área, entre com o seu usuário e senha.</Form.Text>
    
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Usuário</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Senha</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Lembrar a senha" />
							<Form.Text className="text-muted">Esqueceu a senha?</Form.Text>
						</Form.Group>
						<Button variant="primary" type="submit">Entrar</Button>
						<Form.Text className="text-muted">Não tem uma conta? Crie a sua.</Form.Text>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Login;