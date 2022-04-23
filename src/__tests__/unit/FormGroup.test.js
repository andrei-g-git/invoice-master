/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, cleanup, screen} from "@testing-library/react";
 import FormGroup from "../../components/FormGroup";

 describe("<FormGroup> UNIT test", () => {

    afterEach(() => {
        cleanup();
    });

    it("renders the content if it's an edit operation", () => {
        render(<FormGroup content="blah blah" title="should be the title" notifyChange={(event) => {}}/>);
        const inputField = screen.getByDisplayValue("blah blah");
        const label = screen.getByText("should be the title");
        expect(inputField).toBeInTheDocument();
        expect(label).toBeInTheDocument();
    });
 });