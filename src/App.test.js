import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders package name", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/react-kofi-button/i)[0];
  expect(linkElement).toBeInTheDocument();
});
