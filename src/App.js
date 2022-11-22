
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HeaderMenu from "./components/header";
import Footer from "./components/footer";
import Container from "react-bootstrap/Container";
import CarDetails from "./components/cardetails";
import Login from "./components/login";
import CarSell from "./components/carsell";
import RegistroUsuario from "./components/registrousuario";

import "./App.css";
import PaginaPadrao from "./components/PaginaPadrao";
import Inicio from "./Paginas/Inicio";

function App() {
	return (
		<BrowserRouter>
			<HeaderMenu />
			<Routes>
				<Route path="/" element={<PaginaPadrao />}>
					<Route path="/" element={<Inicio />} />
					<Route path="/cadastro" element={<CarSell />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/detalhescarro/*" element={<CarDetails />} />
				<Route path="/registro" element={<RegistroUsuario />} />
				RegistroUsuario
				<Route path="/comprar" element={<Container className="desenvimento">Página em Desenvolvimento</Container>} />
				<Route path="/servicos" element={<Container className="desenvimento">Página em Desenvolvimento</Container>} />
				<Route path="*" element={<Container className="desenvimento">ERROR: 404 - Página não encontrada -</Container>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
