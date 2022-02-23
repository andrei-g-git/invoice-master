import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { makeStore } from "./redux/makeStore";
import Main from "./components/Main";

const store = makeStore();
const serverProcolsAndDomains = {
  abridgedInvoices: "http://localhost:5003/api/invoices"
}

function App() {

  return (

    <Provider store={store}>
      <BrowserRouter>
        <Main server={serverProcolsAndDomains}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
