import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((cur: number) => cur + 1)}>+</button>
      <button onClick={() => setCount((cur: number) => cur - 1)}>-</button>
    </div>
  );
}
