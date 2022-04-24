/**
 * @jest-environment jsdom
 */
import React from "react";
import { screen, render, cleanup} from "@testing-library/react";
import DeleteInvoice from "../../components/DeleteInvoice";

describe("<DeleteInvoice> UNIT", () => {
    beforeEach(() => {
        render(<DeleteInvoice />);
    });
    afterEach(() => {
        cleanup();
    });

    it("renders the button text", () => {
        const name = screen.getByText(/delete/i);
        expect(name).toBeInTheDocument();
    });

    //no idea how to test the background image...
});