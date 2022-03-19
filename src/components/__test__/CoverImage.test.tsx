import React from "react";
import CoverImage from "../atoms/cover_image/CoverImage";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("CoverImage", () => {
  test("renders icon", () => {
    render(<CoverImage name="1" />);
    expect(screen.getByTestId("coverImage")).toBeInTheDocument();
  }); 
});