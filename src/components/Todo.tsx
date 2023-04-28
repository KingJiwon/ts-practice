import React, { useRef, useState } from "react";
import List from "./List";

export interface Task {
  task: string;
  done: boolean;
}

export default function Todo() {
  const [taskArr, setTaskArr] = useState<Array<Task>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const addTask = (): void => {
    if (inputRef.current !== null) {
      const newTask: Array<Task> = [
        ...taskArr,
        { task: inputRef.current.value, done: false },
      ];
      setTaskArr(newTask);
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={addTask}>할 일 추가</button>
      <h1>할 일 목록</h1>
      {taskArr?.map((el: Task, idx) => (
        <List key={idx} {...el} />
      ))}
    </>
  );
}
