import React from "react";

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./Button";

test("verifica se o texto foi alterado após o clique", () => {
  render(<Button />);
  const button = screen.getByRole("button", { name: /clique aqui/i });
  const text = screen.getByTestId("text");

  expect(text).toHaveTextContent("Texto inicial");

  fireEvent.click(button);

  expect(text).toHaveTextContent("Texto alterado após o clique");
});
