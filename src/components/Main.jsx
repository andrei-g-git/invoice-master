import { Routes, Route } from "react-router-dom"; //Switch is now Routes. Fuck whoever keeps changing shit for no reason
import NavBar from "./NavBar";
import Invoices from "../pages/Invoices";
import "../css/Main.scss";

function Main(props) {
	return (
		<div className="main">

			<NavBar />

			<Routes>
				<Route exact path="/"
					element={
						<Invoices path={props.server.abridgedInvoices}
							delayIncrement={65}
						/>
					} //fuck whoever is changing all this shit
				/>

			</Routes>
		</div>
	)
}

export default Main