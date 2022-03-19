import React from "react";
import Footer from "../organisms/footer/Footer";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
    test("renden Footer", () => {
        render(<Footer />);
        expect(screen.getByTestId("footer")).toBeInTheDocument();
    }  )
});