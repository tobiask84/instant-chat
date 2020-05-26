import React from "react";
import { expect } from "@jest/globals";
import { render } from "@testing-library/react";

import NavBar from "../index";

test("Renders the NavBar", () => {
  const { getByText } = render(<NavBar />);
  expect(getByText("Chat")).toBeDefined();
  expect(getByText("Settings")).toBeDefined();
});
