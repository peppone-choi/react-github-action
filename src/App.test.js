import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("카운터는 0부터 시작한다", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("마이너스 버튼은 - 텍스트가 있다", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});

test("플러스 버튼은 + 텍스트가 있다", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");
});

test("플러스 버튼을 클릭하면 카운터가 1 증가한다", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  const counterElement = screen.getByTestId("counter");
  fireEvent.click(plusButtonElement);
  expect(counterElement).toHaveTextContent(1);
});

test("마이너스 버튼을 클릭하면 카운터가 1 감소한다", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  const counterElement = screen.getByTestId("counter");
  fireEvent.click(minusButtonElement);
  expect(counterElement).toHaveTextContent(-1);
});

test("on and off button은 파란 색상을 가진다.", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("on and off button을 클릭하면 마이너스 버튼과 플러스 버튼이 비활성화 된다", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  const plusButtonElement = screen.getByTestId("plus-button");
  const minusButtonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  expect(plusButtonElement).toBeDisabled();
  expect(minusButtonElement).toBeDisabled();
});
