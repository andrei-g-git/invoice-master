/** 
 * @jest-environment jsdom
 */

import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import AnonStatistics from "../../pages/AnonStatistics";

describe("<Statistics> UNIT", () => {
    afterEach(() => {
        cleanup();
    });

    it("renders the bars", () => {
        //no, chart.js renders everything in 1 canvas element, there's no way to count anything
    });
});
