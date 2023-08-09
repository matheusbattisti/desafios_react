// User.test.js
import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import User from "./User";

test("renders user data", async () => {
  const fakeUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  };

  fetch.mockResponseOnce(JSON.stringify(fakeUser));

  render(<User userId={1} />);

  // Espera a mensagem "Loading..." desaparecer
  await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

  // Checa se os dados do usuário foram renderizados corretamente
  expect(screen.getByText(fakeUser.name)).toBeInTheDocument();
  expect(screen.getByText(fakeUser.email)).toBeInTheDocument();
});
