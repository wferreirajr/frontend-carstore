import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function CarSell() {
	const [isOpenNew, setIsOpenNew] = React.useState(false);
	const showModalNew = () => { setIsOpenNew(true); };
	const hideModalNew = () => { setIsOpenNew(false); };

	const [isOpenEdit, setIsOpenEdit] = React.useState(false);
	const showModalEdit = () => { setIsOpenEdit(true); };
	const hideModalEdit = () => { setIsOpenEdit(false); };

	return (
		<Container className="container-body">
			<InputGroup className="mb-3">
				<Form.Control aria-label="Recipient's username" size="lg" type="text" aria-describedby="basic-addon2"/>
				<Button variant="outline-secondary" id="button-addon1">Pesquisar</Button>
				<Button onClick={showModalNew}>Cadastrar</Button>
			</InputGroup>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>Marca</th>
						<th>Modelo</th>
						<th>Cor</th>
						<th>Ano</th>
						<th>Opcionais</th>
						<th>Valor</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>01</td>
						<td>Volkswagem</td>
						<td>Gol</td>
						<td>Prata</td>
						<td>2019 - 2020</td>
						<td>Veículo acompanhar direção hitrálica</td>
						<td>55.000,00</td>
						<td>
							<ButtonToolbar className="justify-content-center">
								<ButtonGroup className="me-2" size="sm">
									<Button variant="success" onClick={showModalEdit}>Editar</Button>
									<Button variant="danger">Excluir</Button>
								</ButtonGroup>
							</ButtonToolbar>
						</td>
					</tr>
				</tbody>
			</Table>
			<ButtonToolbar className="justify-content-end">
				<ButtonGroup className="me-2">
					<Button>1</Button>
					<Button>2</Button>
					<Button>3</Button>
					<Button>4</Button>
				</ButtonGroup>
			</ButtonToolbar>

			<Modal show={isOpenNew} onHide={hideModalNew} size="lg" aria-labelledby="contained-modal-title-vcenter">
				<Modal.Header className="justify-content-md-center">
					<Modal.Title>Cadastro</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridMarca">
								<Form.Label>Marca</Form.Label>
								<Form.Control />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridModelo">
								<Form.Label>Modelo</Form.Label>
								<Form.Control />
							</Form.Group>
						</Row>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridCor">
								<Form.Label>Cor</Form.Label>
								<Form.Control />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridAno">
								<Form.Label>Ano</Form.Label>
								<Form.Control />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridValor">
								<Form.Label>Valor</Form.Label>
								<Form.Control />
							</Form.Group>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridOpcionais">
									<Form.Label>Opcionais</Form.Label>
									<FloatingLabel>
										<Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "100px", width: "765px" }}/>
									</FloatingLabel>
								</Form.Group>
							</Row>
						</Row>
					</Form>
				</Modal.Body>
				<Modal.Footer className="justify-content-md-center">
					<Button onClick={hideModalNew} variant="secondary">Cancelar</Button>
					<Button>Salvar</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={isOpenEdit} onHide={hideModalEdit} size="lg" aria-labelledby="contained-modal-title-vcenter">
				<Modal.Header className="justify-content-md-center">
					<Modal.Title>Editar</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridMarca">
								<Form.Label>Marca</Form.Label>
								<Form.Control defaultValue="Volkswagen" />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridModelo">
								<Form.Label>Modelo</Form.Label>
								<Form.Control defaultValue="Gol"/>
							</Form.Group>
						</Row>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridCor">
								<Form.Label>Cor</Form.Label>
								<Form.Control defaultValue="Prata"/>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridAno">
								<Form.Label>Ano</Form.Label>
								<Form.Control defaultValue="2019-2020" />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridValor">
								<Form.Label>Valor</Form.Label>
								<Form.Control defaultValue="55.000,00" />
							</Form.Group>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridOpcionais">
									<Form.Label>Opcionais</Form.Label>
									<FloatingLabel>
										<Form.Control as="textarea" defaultValue="Veículo acompanhar direção hitrálica" style={{ height: "100px", width: "765px" }}/>
									</FloatingLabel>
								</Form.Group>
							</Row>
						</Row>
					</Form>
				</Modal.Body>
				<Modal.Footer className="justify-content-md-center">
					<Button onClick={hideModalEdit} variant="secondary">Cancelar</Button>
					<Button>Salvar</Button>
				</Modal.Footer>
			</Modal>


		</Container>
	);
}

export default CarSell;