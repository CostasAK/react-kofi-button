import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/React Components for Ko-fi/i);
  expect(linkElement).toBeInTheDocument();
});
