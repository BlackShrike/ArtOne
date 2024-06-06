import React, { useState } from "react";
import { Link, useParams, Routes, Route } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import styles from "../css/Signature.module.css";
import BackButton from "../components/BackButton";
import SignatureDetail from "./SignatureDetail";

function Signature() {
  const { id } = useParams();

  if (id) {
    return <SignatureDetail />;
  }

  const [selectedMenu, setSelectedMenu] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setCurrentPage(1);
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

  const totalItems = 200;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const items = Array.from({ length: itemsPerPage }).map(
      (_, index) => startIndex + index + 1
    );

    return items.map((item) => (
      <Link to={`/Signature/${item}`} key={item} className={styles.gridItem}>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.itemDetails}>
          <div>
            <p>
              <span className={styles.headtext}>제목 {item}</span>
            </p>
            <p>캡션내용 {item}</p>
            <p>05. 2024</p>
          </div>
          <FaCartPlus />
        </div>
      </Link>
    ));
  };

  const renderPagination = () => {
    return (
      <div className={styles.pagination}>
        <span
          className={styles.pageArrow}
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        >
          &lt;
        </span>
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`${styles.pageNumber} ${
              currentPage === index + 1
                ? styles["signature-page-number-selected"]
                : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span
          className={styles.pageArrow}
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
    <div className={styles.signature}>
      <div className={styles["signature-header-submenu"]}>
        {menus.map((menu) => (
          <div
            key={menu}
            className={`${styles["signature-header-submenu-item"]} ${
              selectedMenu === menu
                ? styles["signature-header-submenu-item-selected"]
                : ""
            }`}
            onClick={() => handleMenuClick(menu)}
          >
            {menu}
          </div>
        ))}
      </div>
      <BackButton />
      <div className={styles.gridPage}>
        <div className={styles.gridContainer}>{renderItems()}</div>
        {renderPagination()}
      </div>
    </div>
  );
}

export default Signature;
