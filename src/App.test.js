import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button turns blue when clicked
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton.textContent).toBe("Change to red");
});

test("initial condition", () => {
  render(<App />);
  // check the initial condition
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out checkbox
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  // check the initial condition
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // check that the checkbox starts out checkbox
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
