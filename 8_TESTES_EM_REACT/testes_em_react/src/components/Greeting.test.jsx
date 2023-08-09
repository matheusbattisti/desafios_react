import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Greeting from "./Greeting";

test("verifica o heading do componente com a prop enviada", () => {
  render(<Greeting name="John" />);

  const headingElement = screen.getByRole("heading");
  expect(headingElement).toHaveTextContent("Hello, John!");
});
