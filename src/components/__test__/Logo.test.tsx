import React from "react";
import Logo from "../atoms/Logo";
import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
describe("Logo", () => {
    test("renders company logo", () => {
        render(<Logo />)
        expect(screen.getByTestId("logo")).toBeInTheDocument();
    })
})