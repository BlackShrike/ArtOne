import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Promotion.module.css";
import Slider from "react-slick";
import { FaCartPlus } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // 한 번에 하나의 슬라이드만 표시
  slidesToScroll: 1, // 한 번에 하나의 슬라이드만 스크롤
  arrows: true,
  autoplay: false,
  centerMode: false,
  centerPadding: "0px",
};

function Promotion(props) {
  const promotionMain = Array.from({ length: 8 }, (_, index) => (
    <div key={index} className={styles.promotionGridWrapper}>
      <div className={styles.promotionGrid}>
        <div className={`${styles.item} ${styles.largeItem}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Large Item</p>
            <p>Description for large item</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.mediumItem1}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Medium Item 1</p>
            <p>Description for medium item 1</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.mediumItem2}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Medium Item 2</p>
            <p>Description for medium item 2</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemLeft1}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Small Left 1</p>
            <p>Description for small left 1</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemLeft2}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Small Left 2</p>
            <p>Description for small left 2</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight1}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Small Right 1</p>
            <p>Description for small right 1</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight2}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Small Right 2</p>
            <p>Description for small right 2</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight3}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Small Right 3</p>
            <p>Description for small right 3</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight4}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Small Right 4</p>
            <p>Description for small right 4</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight5}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Small Right 5</p>
            <p>Description for small right 5</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight6}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Small Right 6</p>
            <p>Description for small right 6</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight7}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Small Right 7</p>
            <p>Description for small right 7</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight8}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Small Right 8</p>
            <p>Description for small right 8</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight9}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Small Right 9</p>
            <p>Description for small right 9</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight10}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>Small Right 10</p>
            <p>Description for small right 10</p>
          </div>
        </div>
      </div>
    </div>
  ));
  const bestItems = Array.from({ length: 20 }, (_, index) => (
    <div key={index} className={styles.bestItem}>
      <div className={styles.greyBox}></div>
      <div className={styles.text}>
        <h3>제목 {index + 1}</h3>
        <p>설명설명설명설명</p>
        <div className={styles.priceCart}>
          <p>120,000</p>
          <FaCartPlus />
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      (
      <div className={styles.sliderContainer}>
        <Slider {...settings}>{promotionMain}</Slider>
      </div>
      <div className={styles.bestSliderContainer}>
        <Slider {...settings}>
          <div className={styles.bestGrid}>{bestItems.slice(0, 10)}</div>
          <div className={styles.bestGrid}>{bestItems.slice(10, 20)}</div>
        </Slider>
      </div>
      <div className={styles.newGrid}>
        <h2>미술사에서 검증된 작품을 부담없이 소장해 보세요 :)</h2>
        <div className={styles.newGridContainer}>
          <div className={`${styles.newGridItem} ${styles.gridItem1}`}></div>
          <div className={`${styles.newGridItem} ${styles.gridItem2}`}></div>
          <div className={`${styles.newGridItem} ${styles.gridItem3}`}></div>
          <div className={`${styles.newGridItem} ${styles.gridItem4}`}></div>
          <div className={`${styles.newGridItem} ${styles.gridItem5}`}></div>
          <div className={`${styles.newGridItem} ${styles.gridItem6}`}></div>
          <div className={`${styles.newGridItem} ${styles.gridItem7}`}></div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p>인터리어에 잘 어울리는 모던한 풍경 사진은 어떠세요 ?</p>
        <div className={styles.asymmetricGridContainer}>
          <div className={`${styles.asymmetricGridItem} ${styles.gridItem1}`}>
            작품설명 작품설명 작품설명
          </div>
          <div className={`${styles.asymmetricGridItem} ${styles.gridItem2}`}>
            작품설명 작품설명 작품설명
          </div>
          <div className={`${styles.asymmetricGridItem} ${styles.gridItem3}`}>
            작품설명 작품설명 작품설명
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p>열정적으로 작품 세계를 풀어가는 작가분들의 원화 작품입니다.</p>
        <Link to="/MorePromotion" className={styles.moreText}>
          더보기
        </Link>
        <div className={styles.symmetricGridContainer}>
          <div className={styles.symmetricGridItem}>
            작가명 작품소개작품소개, 제작년도
          </div>
          <div className={styles.symmetricGridItem}>
            작가명 작품소개작품소개, 제작년도
          </div>
          <div className={styles.symmetricGridItem}>
            작가명 작품소개작품소개, 제작년도
          </div>
          <div className={styles.symmetricGridItem}>
            작가명 작품소개작품소개, 제작년도
          </div>
          <div className={styles.symmetricGridItem}>
            작가명 작품소개작품소개, 제작년도
          </div>
          <div className={styles.symmetricGridItem}>
            작가명 작품소개작품소개, 제작년도
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p>
          아름다움을 좋아하는 분들에게 감사를 전하기 좋은 날 더불어 좋은 작품과
          함께하세요 :)
        </p>
      </div>
    </div>
  );
}

export default Promotion;
