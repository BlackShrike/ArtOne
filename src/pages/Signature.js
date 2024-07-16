//Signature.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    sort: "정렬",
    sortOptions: ["인기작", "최신작", "가로", "세로"],
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
    sort: "Sort",
    sortOptions: ["Popular", "Newest", "Horizontal", "Vertical"],
  },
};

function Signature() {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(t.menu[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("");
  const [selectedId, setSelectedId] = useState(null); // 선택된 항목의 ID를 관리하는 상태
  const itemsPerPage = 50;

  useEffect(() => {
    const handlePopState = () => {
      setSelectedId(null);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const totalItems = 200;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const items = Array.from({ length: itemsPerPage }).map(
      (_, index) => startIndex + index + 1
    );

    return items.map((item) => (
      <div
        key={item}
        onClick={() => {
          setSelectedId(item);
          navigate(`/signature/${item}`, { replace: false });
        }} // navigate로 URL에 id 포함시키기
        className={styles.gridItem}
      >
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
      </div>
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
              currentPage === index + 1 ? styles.activePage : ""
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
      {!selectedId && (
        <div className={styles["signature-sort"]}>
          <select
            value={sortOption}
            onChange={handleSortChange}
            defaultValue=""
          >
            <option value="" disabled>
              {t.sort}
            </option>
            {t.sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedId ? (
        <>
          <BackButton onClick={() => setSelectedId(null)} />
          <SignatureDetail id={selectedId} />
        </>
      ) : (
        <>
          <div className={styles.gridPage}>
            <div className={styles.gridContainer}>{renderItems()}</div>
            {renderPagination()}
          </div>
        </>
      )}
    </div>
  );
}

export default Signature;
