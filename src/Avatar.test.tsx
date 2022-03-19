import React from "react";
import Avatar from "../atoms/Avatar";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("Avatar Image", () => {
    test("renders AvatarImage", () => {
        render(<Avatar />);
        expect(screen.getByTestId("avatarImage")).toBeInTheDocument();
    }  )
});