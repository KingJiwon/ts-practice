import { render, screen } from "@testing-library/react";
import JoinBtn from "./JoinBtn";

test("19살이면 회원 가입 가능한지 테스트", () => {
  render(<JoinBtn age={19} />);
  const textEl = screen.getByText(/가입이 가능합니다/);
  const btnEl = screen.getByRole("button");
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toBeEnabled();
  expect(btnEl).toHaveStyle({
    backgroundColor: "royalblue",
  });
});

test("13살이면 회원 가입 가능한지 테스트", () => {
  render(<JoinBtn age={13} />);
  const textEl = screen.getByText(/불가능합니다/);
  const btnEl = screen.getByRole("button");
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toBeDisabled();
  expect(btnEl).toHaveStyle({
    backgroundColor: "red",
  });
});
