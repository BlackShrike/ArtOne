import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import styles from "../css/Signature.module.css";
import BackButton from "../components/BackButton";
import SignatureDetail from "./SignatureDetail";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    menu: [
      "전체",
      "인물",
      "풍경",
      "사진",
      "동양화",
      "서양화",
      "조각",
      "드로잉",
      "포스터",
    ],
    title: "제목",
    caption: "캡션내용",
    date: "05. 2024",
  },
  EN: {
    menu: [
      "All",
      "Person",
      "Landscape",
      "Photo",
      "Oriental",
      "Western",
      "Sculpture",
      "Drawing",
      "Poster",
    ],
    title: "Title",
    caption: "Caption Content",
    date: "May 2024",
  },
};

function Signature() {
  const { id } = useParams();
  const { language } = useLanguage();
  const t = translations[language];

  if (id) {
    return <SignatureDetail />;
  }

  const [selectedMenu, setSelectedMenu] = useState(t.menu[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
              <span className={styles.headtext}>
                {t.title} {item}
              </span>
            </p>
            <p>
              {t.caption} {item}
            </p>
            <p>{t.date}</p>
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
        {t.menu.map((menu) => (
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
