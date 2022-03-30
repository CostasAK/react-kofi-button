import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders package name", () => {
  render(<App />);
  const linkElement = screen.getByText(/react-kofi-button/i);
  expect(linkElement).toBeInTheDocument();
});
