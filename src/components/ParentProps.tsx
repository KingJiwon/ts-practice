import React from "react";
import Props from "./Props";

export interface MyProps {
  name: string;
  age: number;
  hobbies?: string[];
}

export default function ParentProps() {
  const jiwon: MyProps = {
    name: "jiwon",
    age: 26,
    hobbies: ["watchFootball", "game"],
  };

  return (
    <>
      <Props {...jiwon} />
    </>
  );
}
