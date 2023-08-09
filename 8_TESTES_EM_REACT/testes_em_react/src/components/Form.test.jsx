import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

test("submits form correctly", () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);

  const input = screen.getByTestId("input-field");

  fireEvent.change(input, { target: { value: "texto de teste" } });
  fireEvent.submit(input);

  expect(handleSubmit).toHaveBeenCalledWith("texto de teste");
});
