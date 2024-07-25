import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/ArtistDetail.module.css";
import BackButton from "../components/BackButton";
import { FaCartPlus } from "react-icons/fa";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    artist: "작가",
    description:
      "설명작가 설명작가 설명작가 설명작가 설명작가 설명작가 설명작가",
    additionalDescription:
      "추가 설명작가 추가 설명작가 추가 설명작가 추가 설명작가",
    showMore: "더보기",
    showLess: "접기",
    worksTitle: "의 작품",
    title: "제목",
    price: "120,000원",
  },
  EN: {
    artist: "Artist",
    description:
      "Description of the artist, description of the artist, description of the artist",
    additionalDescription:
      "Additional description of the artist, additional description of the artist",
    showMore: "Show More",
    showLess: "Show Less",
    worksTitle: "'s Works",
    title: "Title",
    price: "$120.00",
  },
};

function ArtistDetail() {
  const { artistName } = useParams();
  const [showMore, setShowMore] = useState(false);
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const itemsPerPage = 10;
  const { user } = useUser();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        const artistProducts = data.filter(
          (product) => product.artist === artistName
        );
        setProducts(artistProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [artistName]);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(user.id, productId, 1);
      alert("장바구니에 추가되었습니다.");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("장바구니 추가에 실패했습니다.");
    }
  };

  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPagination = () => {
    return (
      <div className={styles.pagination}>
        <button
          className={styles.pageArrow}
          onClick={() => handlePageChange(currentPage - 1)}
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
          onClick={() => handlePageChange(currentPage + 1)}
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

    return items.map((product, index) => (
      <div key={index} className={styles.gridItem}>
        <div
          className={styles.imagePlaceholder}
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className={styles.itemDetails}>
          <p className={styles.priceCart}>
            <span className={styles.headtext}>
              {product.title}{" "}
              <FaCartPlus
                className={styles.faCartPlusIcon}
                onClick={() => handleAddToCart(product.id)}
              />
            </span>
          </p>
          <p>{product.description}</p>
          <p>
            {language === "KR" ? `${product.price}원` : `$${product.price}`}
          </p>
        </div>
      </div>
    ));
  };

  const t = translations[language];

  return (
    <div className={styles.gridPage}>
      <BackButton />
      <div className={styles.artistInfo}>
        <div className={styles.artistImagePlaceholder}></div>
        <div className={styles.artistDetails}>
          <h1 className={styles.artistName}>{artistName}</h1>
          <div className={styles.artistBio}>
            <h2>{t.artist}</h2>
            <p>{t.description}</p>
            {showMore && <p>{t.additionalDescription}</p>}
            <p className={styles.moretext} onClick={handleShowMore}>
              {showMore ? t.showLess : t.showMore}
            </p>
          </div>
        </div>
      </div>
      <h2 className={styles.sectionTitle}>
        {artistName}
        {t.worksTitle}
      </h2>
      <div className={styles.gridContainer}>{renderItems()}</div>
      {renderPagination()}
    </div>
  );
}

export default ArtistDetail;
