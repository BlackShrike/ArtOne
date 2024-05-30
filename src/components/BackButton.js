import React from "react";
import styles from "../css/Backbutton.module.css";
function BackButton() {
  return (
    <div className={styles.backLink}>
      <a href="/">← 뒤로가기</a>
    </div>
  );
}
export default BackButton;
