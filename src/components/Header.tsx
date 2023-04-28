import React from "react";
import styles from "../styles/Header.module.scss";
export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
        <button className={styles.btn}>로그인</button>
      </div>
    </>
  );
}
