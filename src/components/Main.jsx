import { Routes, Route } from "react-router-dom"; //Switch is now Routes. Fuck whoever keeps changing shit for no reason
import Invoices from "../pages/Invoices";
import "../css/Main.scss";

function Main(props) {
    return (   
        <div className="main">

          <Routes>
              <Route exact path="/"
                  element={
                    <Invoices path={props.server.abridgedInvoices} />
                  } //fuck whoever is changing all this shit
              />

          </Routes>        
        </div>
    )
}

export default Main