import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToggleText from "./ToggleText";

test("toggle text visibility", () => {
    const { getByText, queryByText } = render(<ToggleText title="Hello World" />);

    // Vérifie que le titre n'est pas affiché initialement
    expect(queryByText("Hello World")).toBeNull();

    // Clique sur le bouton "Toggle"
    fireEvent.click(getByText("Toggle"));

    // Vérifie que le titre est affiché après le clic
    expect(getByText("Hello World")).toBeInTheDocument();

    // Clique à nouveau sur le bouton "Toggle"
    fireEvent.click(getByText("Toggle"));

    // Vérifie que le titre n'est plus affiché après le deuxième clic
    expect(queryByText("Hello World")).toBeNull();
});
