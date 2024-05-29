import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Signature.module.css"; // Ensure the path is correct

function Signature() {
  const [selectedMenu, setSelectedMenu] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setCurrentPage(1); // Reset to first page on menu change
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const menus = [
    "전체",
    "인물",
    "풍경",
    "사진",
    "동양화",
    "서양화",
    "조각",
    "드로잉",
    "포스터",
  ];
  const totalItems = 45; // Example total items
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const items = Array.from({ length: totalItems }).slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return items.map((_, index) => (
      <div key={index} className="signature-grid-item">
        <img src="https://via.placeholder.com/200" alt="Artwork" />
        <div className="signature-grid-item-details">
          <div className="signature-grid-item-text">
            <div>제목제목제목</div>
            <div>연출내용내용내용</div>
            <div className="signature-grid-item-price">120,000원</div>
          </div>
          <div className="signature-grid-item-icon">
            <FaCartPlus />
          </div>
        </div>
      </div>
    ));
  };

  const renderPagination = () => {
    return (
      <div className="signature-pagination">
        <span
          className="signature-page-number"
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        >
          &lt;
        </span>
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`signature-page-number ${
              currentPage === index + 1 ? "signature-page-number-selected" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span
          className="signature-page-number"
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
        >
          &gt;
        </span>
      </div>
    );
  };

  return (
    <div className="signature">
      <div className="signature-header-submenu">
        {menus.map((menu) => (
          <div
            key={menu}
            className={`signature-header-submenu-item ${
              selectedMenu === menu
                ? "signature-header-submenu-item-selected"
                : ""
            }`}
            onClick={() => handleMenuClick(menu)}
          >
            {menu}
          </div>
        ))}
      </div>
      <Link to="/" className="signature-back-button">
        &lt; 뒤로가기
      </Link>
      <div className="signature-grid-container">{renderItems()}</div>
      {renderPagination()}
    </div>
  );
}

export default Signature;
