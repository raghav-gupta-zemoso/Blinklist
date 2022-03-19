import React from "react";
import Icons from "../atoms/icons/Icons";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("Icon", () => {
  test("renders icon", () => {
    render(<Icons name="search" />);
    expect(screen.getByTestId("icons")).toBeInTheDocument();
  });
  
});