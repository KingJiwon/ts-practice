import { render, screen } from "@testing-library/react";
import TestHeader from "./TestHeader";

test("isLogin이 true로 전달이 잘 된 상태에서 userId가 잘 뜨는지 확인", () => {
  render(<TestHeader isLogin={true} userID="jiwon" />); //test함수 내부에 html코드를 뿌려줌
  const textEl = screen.getByText(/jiwon님 환영 합니다!/i); // 특정 html 코드 만들기
  expect(textEl).toBeInTheDocument(); //TestHeader를 그린 document내에 존재하는지 확인
});

test("isLogin이 false일 때 문구와 버튼이 정상 출력되는지 확인", () => {
  render(<TestHeader isLogin={false} />);
  const textEl = screen.getByText(/로그인 해주세요/);
  const btnEl = screen.getByRole("button"); // 특정 역할을 하는 element 가져오기
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});
