import React from "react";
import SearchBar from "../molecules/SearchBar";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("SearchBar", () => {
    test("renders Search Bar", () => {
        render(<SearchBar />);
        expect(screen.getByTestId("searchBar")).toBeInTheDocument();
    }  )
});