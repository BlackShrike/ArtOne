import React from "react";
import "../css/SearchResults.css"; // Ensure the path is correct

function SearchResults() {
  const items = Array.from({ length: 50 }).map((_, index) => ({
    id: index,
    title: "제목제목제목",
    description: "컨텐츠내용내용내용",
    price: "120,000원",
  }));

  return (
    <div className="search-results-container">
      <div className="back-link">
        <a href="/">← 뒤로가기</a>
      </div>
      <div className="results-header">
        <span>0000 검색결과 000건</span>
      </div>
      <div className="grid-container">
        {items.map((item) => (
          <div key={item.id} className="grid-item">
            <div className="image-placeholder"></div>
            <div className="item-details">
              <p className="item-title">{item.title}</p>
              <p className="item-description">{item.description}</p>
              <p className="item-price">{item.price}</p>
              <div className="cart-icon">🛒</div>
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

export default SearchResults;
