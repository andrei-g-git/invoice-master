/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, cleanup, screen} from "@testing-library/react";
import StatusSelect from "../../components/StatusSelect";

describe("<StatusSelect> UNIT", () => {

    beforeEach(() => {
    });
    afterEach(() => {
        cleanup();
    })

    it("renders all the options when ADDING new invoice", () => {

        renderAllOptionsAssertions(5, "");

        expect(screen.getByText(/place/)).toBeInTheDocument();
    });

    it("renders all the options when EDITING existing invoice", () => {
        renderAllOptionsAssertions(4, "SE");
    })

    it("displays the correct selected option if applicable", () => {
        render(<StatusSelect content="TH"
            options={options}
            placeholder="place to hold"
            notifyChange={(event) => { return 1}}
        />);

        const optionElement = screen.getByRole("option", { name: "third" })
        expect(optionElement.selected).toBe(true);
    })
});

const renderAllOptionsAssertions = (numberOfOptions, sqlStatus) => {
    render(<StatusSelect content={sqlStatus}
        options={options}
        placeholder="place to hold"
        notifyChange={(event) => { return 1}}
    />);

    const listItems = screen.getAllByRole("option");
    expect(listItems.length).toBe(numberOfOptions); //+ placeholder value
    
    expect(screen.getByText("first")).toBeInTheDocument();
    expect(screen.getByText("second")).toBeInTheDocument();
    expect(screen.getByText("third")).toBeInTheDocument();
    expect(screen.getByText("fourth")).toBeInTheDocument();
}

const options = [
    {
        value: "first",
        sql: "FI",
        id: 0
    },
    {
        value: "second",
        sql: "SE",
        id: 1
    },
    {
        value: "third",
        sql: "TH",
        id: 2
    },
    {
        value: "fourth",
        sql: "FO",
        id: 3
    }            
];