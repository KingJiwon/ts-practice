import React from "react";
import styles from "../styles/Section.module.scss";
export default function Section({ color }: { color: string }) {
  return (
    <div className={styles.box}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
        doloremque quasi enim molestiae culpa autem, temporibus id ratione
        voluptatem ullam. Commodi deleniti nisi amet reprehenderit quo velit.
        Similique, culpa perferendis.
      </p>
      <button className={styles[color]}>버튼</button>
    </div>
  );
}
