
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HeaderMenu from "./components/header";
import Footer from "./components/footer";
import CarContent from "./components/carcontent";
import Container from "react-bootstrap/Container";
import CarDetails from "./components/cardetails";
import Login from "./components/login";
import CarSell from "./components/carsell";

import "./App.css";
import { Row } from "react-bootstrap";
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
				<Route path="*" element={<div>Página não encontrada</div>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
