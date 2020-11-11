import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import HelloWorld from "../hello-world";

it("shows 'Hello World!'", () => {
    render(<HelloWorld />);

    expect(screen.getByText("Hello World!")).toBeInTheDocument();
});
