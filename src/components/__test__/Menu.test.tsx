import React from "react";
import MenuTabs from "../molecules/menu/MenuTabs";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("Menu", () => {
    test("renders Menu", () => {
        render(<MenuTabs />);
        expect(screen.getByTestId("menu")).toBeInTheDocument();
    }  )
});