
import React from "react";
import HeaderMenu from "./components/header";
import Footer from "./components/footer";
import CarContent from "./components/carcontent";
import Container from "react-bootstrap/Container";
import CarDetails from "./components/cardetails";
import Login from "./components/login";
import RegistroUsuario from "./components/registrousuario";
import CarSell from "./components/carsell";

import "./App.css";
import { Row } from "react-bootstrap";

function App() {

	const automoveis = [
		{ id:1, marca:"Volks", modelo:"Gol", cor:"Preto", ano:"2019 - 2020", opcionais:"teste", valor:"55.000,00" },
		{ id:1, marca:"Volks", modelo:"Gol", cor:"Preto", ano:"2019 - 2020", opcionais:"teste", valor:"55.000,00" },
	];

	return (
		<Container className="App">
			<HeaderMenu />

			
			{ /* Para apresentação da tela inicial descomente este trecho 
			<h2>Recomendação para você</h2>
			<CarContent />
			<h2>Carros mais buscados</h2>
			<CarContent />
			<Login />
			<RegistroUsuario />
			<CarSell />
			
			*/ }			
			<h2>Recomendação para você</h2>
			<Container className="d-flex justify-content-around container-body">
				<Row>
					<CarContent id="1" marca="Volks" modelo="Gol" cor="Preto" ano="2019 - 2020" opcionais="teste" valor="55.000,00" />
					<CarContent id="1" marca="Volks" modelo="Gol" cor="Preto" ano="2019 - 2020" opcionais="teste" valor="55.000,00" />
					<CarContent id="1" marca="Volks" modelo="Gol" cor="Preto" ano="2019 - 2020" opcionais="teste" valor="55.000,00" />
				</Row>
			</Container>

			<h2>Carros mais buscados</h2>
			<Container className="d-flex justify-content-around container-body">
				<Row>
					<CarContent id="1" marca="Volks" modelo="Gol" cor="Preto" ano="2019 - 2020" opcionais="teste" valor="55.000,00" />
					<CarContent id="1" marca="Volks" modelo="Gol" cor="Preto" ano="2019 - 2020" opcionais="teste" valor="55.000,00" />
					<CarContent id="1" marca="Volks" modelo="Gol" cor="Preto" ano="2019 - 2020" opcionais="teste" valor="55.000,00" />
					<CarContent id="1" marca="Volks" modelo="Gol" cor="Preto" ano="2019 - 2020" opcionais="teste" valor="55.000,00" />
				</Row>
			</Container>
			
			<Footer />
		</Container>
	);
}

export default App;
