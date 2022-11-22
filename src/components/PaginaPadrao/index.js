/* eslint-disable react/react-in-jsx-scope */
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import AppStyles from "../../App.css";

export default function PaginaPadrao() {
	return (
		<Container className={AppStyles.App}>
			<Outlet />
		</Container>
	);
}