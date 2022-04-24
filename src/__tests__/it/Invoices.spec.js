import {cleanup, screen, render} from "@testing-library/react";
import Invoices from "../../pages/Invoices";
import { makeStore } from "../../redux/makeStore";

describe("<Invoices> INTEGRATION", () => {
    afterEach(() => {
        cleanup();
    });

    it("renders the invoices with a delay between each", () => {
        render(<Invoices store={makeStore()} 
                delayIncrement={100}
            />
        );


    });
});

//probably need to learn how to dispatch the invoicesFiltered action and load a dummy invoice list, then determine the highest delay for the last element, then timeout the assertion 
//for that amount and assert that it's then visible with expect().toBeVisible()