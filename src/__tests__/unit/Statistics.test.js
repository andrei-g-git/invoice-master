/** 
 * @jest-environment jsdom
 */

import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Statistics from "../../pages/Statistics";

describe("<Statistics> UNIT", () => {
    afterEach(() => {
        cleanup();
    });

    it("renders the bars")
});
