
import React from "react";
import HeaderMenu from "./components/header";
import Footer from "./components/footer";
import CarContent from "./components/carcontent";
import Container from "react-bootstrap/Container";
import CarDetails from "./components/cardetails";

import "./App.css";

function App() {
	return (
		<Container className="App">
			<HeaderMenu />

			{ /* Para apresentação da tela inicial descomente este trecho 
			<h2>Recomendação para você</h2>}
			<CarContent />
			<h2>Carros mais buscados</h2>
			<CarContent />
			*/ }

			<CarDetails />
			<Footer />
		</Container>
	);
}

export default App;
