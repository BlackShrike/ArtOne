import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/PromotionDetail.module.css";
import BackButton from "../components/BackButton";
import { FaCartPlus } from "react-icons/fa";
import { useLanguage } from "../components/LanguageContext";
import { getProducts } from "../components/apiClient";

const translations = {
  KR: {
    promotionName: "프로모션 명",
    productTitle: "제품 제목",
    description: "설명설명설명설명",
    price: "120,000원",
  },
  EN: {
    promotionName: "Promotion Name",
    productTitle: "Product Title",
    description: "Description Description Description Description",
    price: "$120.00",
  },
};

function PromotionDetail() {
  const { language } = useLanguage();
  const t = translations[language];
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const totalItems = products.length; // 총 아이템 수
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    return (
      <div className={styles.pagination}>
        <button
          className={styles.pageArrow}
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`${styles.pageNumber} ${
              currentPage === index + 1 ? styles.activePage : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={styles.pageArrow}
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    );
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const items = products.slice(startIndex, startIndex + itemsPerPage);

    return items.map((item, index) => (
      <div key={index} className={styles.item}>
        <div
          className={styles.itemImagePlaceholder}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className={styles.itemDetails}>
          <p className={styles.priceCart}>
            <span>{`${item.title}`}</span>
            <FaCartPlus />
          </p>
          <p>{item.description}</p>
          <p>
            <span>{t.price}</span>
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.detailPage}>
      <BackButton />
      <h2 className={styles.title}>{`${t.promotionName} ${id}`}</h2>
      <div className={styles.imagePlaceholder}></div>
      <div className={styles.itemsContainer}>{renderItems()}</div>
      {renderPagination()}
    </div>
  );
}

export default PromotionDetail;
