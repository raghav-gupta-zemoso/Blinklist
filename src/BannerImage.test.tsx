import React from "react";
import BannerImage from "../atoms/BannerImage";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("Banner Image", () => {
    test("renders BannerImage", () => {
        render(<BannerImage />);
        expect(screen.getByTestId("bannerImage")).toBeInTheDocument();
    }  )
});