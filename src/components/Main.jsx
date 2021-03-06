import { Routes, Route } from "react-router-dom"; 
import NavBar from "./NavBar";
import Invoices from "../pages/Invoices";
import AnonStatistics from "../pages/AnonStatistics";
import "../css/Main.scss";

//compose nested components
import Invoice from "../components/Invoice";
import InvoicesTop from "../components/InvoicesTop";
import InvoiceEdit from "../components/InvoiceEdit"; 
import DeleteConfirmation from "./DeleteConfirmation";

function Main(props) {
	return (
		<div className="main">

			<NavBar />

			<Routes>
				<Route exact path="/"
					element={
						<Invoices path={props.server.abridgedInvoices}
							delayIncrement={65}

							Invoice={Invoice }
							InvoicesTop={InvoicesTop }
							InvoiceEdit={InvoiceEdit }
							DeleteConfirmation={DeleteConfirmation}
						/>
					} 
				/>

				<Route path="/anon-stats"
					element={
						<AnonStatistics />
					}
				/>

			</Routes>
		</div>
	)
}

export default Main