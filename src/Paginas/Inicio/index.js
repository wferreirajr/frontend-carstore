/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/react-in-jsx-scope */
import { Container } from "react-bootstrap";
import CarContent from "../../components/carcontent";
import Automoveis from "../../Dados/Automoveis.json";

export default function Inicio() {
	return (
		<>
		    <h2>Recomendação para você</h2>
			<Container className="d-flex justify-content-around container-body">
				{Automoveis.map((Automovel) => (
					<div key={Automovel.id}>
						<CarContent props={Automovel} />
					</div>
				))}
			</Container>
		</>
	);
}
