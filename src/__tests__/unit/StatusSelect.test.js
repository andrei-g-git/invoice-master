/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, cleanup, screen} from "@testing-library/react";
import StatusSelect from "../../components/StatusSelect";

describe("<StatusSelect> UNIT", () => {

    beforeEach(() => {
        render(<StatusSelect options={options}/>)
    });
    afterEach(() => {
        cleanup();
    })

    it("renders all the options", () => {
        const listItems = screen.getAllByRole("option");
        expect(listItems.length).toBe(5); //+ placeholder value

        expect(screen.getByText("first")).toBeInTheDocument();
        expect(screen.getByText("second")).toBeInTheDocument();
        expect(screen.getByText("third")).toBeInTheDocument();
        expect(screen.getByText("fourth")).toBeInTheDocument();
    });
});

const options = [
    {
        value: "first",
        id: 0
    },
    {
        value: "second",
        id: 1
    },
    {
        value: "third",
        id: 2
    },
    {
        value: "fourth",
        id: 3
    }            
];