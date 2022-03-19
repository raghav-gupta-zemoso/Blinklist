import React from "react";
import ToggleTabs from "../molecules/tabs/ToggleTabs";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("ToggleTabs", () => {
    test("renders Toggle Tabs", () => {
        render(<ToggleTabs focus="finished" toggleTab={(event:any)=>{}}/>);
        expect(screen.getByTestId("toggleTabs")).toBeInTheDocument();
    }  )
});