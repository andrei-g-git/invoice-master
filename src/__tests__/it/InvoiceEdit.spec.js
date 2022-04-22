/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, cleanup, getByTestId } from "@testing-library/react";
import InvoiceEdit from "../../components/InvoiceEdit";
import { makeStore } from "../../redux/makeStore";

describe("<InvoiceEdit>", () => {

    beforeEach(() => {
        render(<InvoiceEdit store={makeStore()}/>);
    });

    afterEach(() => {
        cleanup();
    })

    it("renders name label", () => {
        const label = screen.getByText(/customer name/i);
        expect(label).toBeInTheDocument();
    });

    it("renders amount label", () => {
        const label = screen.getByText(/transaction amount/i);
        expect(label).toBeInTheDocument();
    });

    it("renders status label", () => {
        const label = screen.getByText(/transaction status/i);
        expect(label).toBeInTheDocument();
    });

    it("renders country of origin label", () => {
        const label = screen.getByText(/country/i);
        expect(label).toBeInTheDocument();
    });

    it("renders city label", () => {
        const label = screen.getByText(/city/i);
        expect(label).toBeInTheDocument();
    });

    it("renders phone number label", () => {
        const label = screen.getByText(/phone number/i);
        expect(label).toBeInTheDocument();
    });

    it("renders submit button's handle", () => {
        const submitButton = screen.getByText(/add invoice/i); //this is broken up by multiple elements, won't pass
        expect(submitButton).toBeInTheDocument();
    })

})