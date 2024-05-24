import React from "react";
import "../css/MorePromotion.css"; // Ensure the path is correct

function MorePromotion(props) {
  return (
    <div className="grid-page">
      <div className="grid-container">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="grid-item">
            <div className="image-placeholder"></div>
            <div className="item-details">
              <p>작가명 작품소개작품소개, 제작년도</p>
              <p>05. 2024</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-arrow">{"<"}</button>
        {Array.from({ length: 9 }).map((_, index) => (
          <button key={index} className="page-number">
            {index + 1}
          </button>
        ))}
        <button className="page-arrow">{">"}</button>
      </div>
    </div>
  );
}

export default MorePromotion;
