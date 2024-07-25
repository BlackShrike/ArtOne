import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Backbutton.module.css";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.backLink}>
      <button onClick={handleBack} className={styles.backButton}>
        {"<"} 뒤로가기
      </button>
    </div>
  );
}

export default BackButton;
