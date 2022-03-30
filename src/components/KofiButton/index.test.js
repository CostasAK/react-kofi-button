import { render, screen } from "@testing-library/react";

import KofiButton from "./index";

test("renders default button label", () => {
  render(<KofiButton username="costasak" />);
  const defaultLabel = screen.getByText(/Support Me on Ko-fi/i);
  expect(defaultLabel).toBeInTheDocument();
});

test("renders custom button label", () => {
  render(<KofiButton username="costasak" label="Support me please" />);
  const customLabel = screen.getByText(/Support me please/i);
  expect(customLabel).toBeInTheDocument();
});
