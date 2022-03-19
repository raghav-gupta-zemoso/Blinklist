import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ToggleTabs from "./components/molecules/tabs/ToggleTabs";

describe("ToggleTabs", () => {
    test("renders Toggle Tabs", () => {
        render(<ToggleTabs focus="finished" toggleTab={(event:any)=>{}}/>);
        expect(screen.getByTestId("toggleTabs")).toBeInTheDocument();
    }  )
});