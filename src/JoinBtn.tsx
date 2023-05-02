export default function JoinBtn({ age }: { age: number }) {
  return (
    <>
      {age > 14 ? (
        <label>가입이 가능합니다</label>
      ) : (
        <label>14세 이하는 가입이 불가능합니다</label>
      )}
      <button
        disabled={age < 14}
        style={
          age > 14 ? { backgroundColor: "skyblue" } : { backgroundColor: "red" }
        }
      >
        가입
      </button>
    </>
  );
}
