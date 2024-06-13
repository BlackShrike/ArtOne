import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Home.module.css";
import Slider from "react-slick";
import { FaCartPlus } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mainSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  centerMode: false,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const bestSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  autoplay: false,
  centerMode: false,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
const originalSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  centerMode: false,
  centerPadding: "0px",
};
const GridItem = ({ className, greyBoxClass, textLines, price }) => (
  <div className={`${styles.item} ${className}`}>
    <div className={greyBoxClass}></div>
    <div className={styles.text}>
      {textLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      {price && <p className={styles.homePrice}>{price}</p>}
    </div>
  </div>
);
const smallItemsData = [
  { textLines: ["워커비 WORKERBEE", "허니 로열 젤리"], price: "228,000원" },
  {
    textLines: ["워커비 WORKERBEE", "워커비 스페셜 허니 박스"],
    price: "152,000원",
  },
  {
    textLines: ["워커비 WORKERBEE", "허니 미니 차 GIFT SET - 3개입"],
    price: "14,000원",
  },
  { textLines: ["워커비 WORKERBEE", "허니 로열 젤리"], price: "228,000원" },
  {
    textLines: ["워커비 WORKERBEE", "워커비 스페셜 허니 박스"],
    price: "152,000원",
  },
];
function Home(props) {
  const homeMain = Array.from({ length: 8 }, (_, index) => (
    <div className={styles.homeGridWrapper}>
      <div className={styles.homeGrid}>
        <GridItem
          className={styles.largeItem}
          greyBoxClass={styles.greyBox}
          textLines={[
            "[NEW IN]건강 챙기는 선물이 최고, 프리미엄 꿀 브랜드",
            "건강 선물도 고급스럽게 - 신규 F&B브랜드 워커비를 소개합니다.",
          ]}
        />
        <GridItem
          className={styles.mediumItem1}
          greyBoxClass={styles.greyBox}
          textLines={[
            "FRESH BAKE, 따끈한 입고소식",
            "프린트베이커리에 새로 입고한 따끈따끈한 신상품 모아보기",
          ]}
        />
        <GridItem
          className={styles.mediumItem2}
          greyBoxClass={styles.greyBox}
          textLines={[
            "FRESH BAKE, 따끈한 입고소식",
            "프린트베이커리에 새로 입고한 따끈따끈한 신상품 모아보기",
          ]}
        />
        <GridItem
          className={styles.smallItemLeft1}
          greyBoxClass={styles.smallGreyBox}
          textLines={["툴프레스 Toolpress", "[PB ONLY]Print Bakery 한지 엽서"]}
          price="7,500원"
        />
        <GridItem
          className={styles.smallItemLeft2}
          greyBoxClass={styles.smallGreyBox}
          textLines={["호랑 HORANG", "실버 디지트 커트러티 SET"]}
          price="42,000원"
        />
        {smallItemsData.map((item, i) => (
          <GridItem
            key={i}
            className={styles[`smallItemRight${i + 1}`]}
            greyBoxClass={styles.smallGreyBox}
            textLines={item.textLines}
            price={item.price}
          />
        ))}
        {smallItemsData.map((item, i) => (
          <GridItem
            key={i + 5}
            className={styles[`smallItemRight${i + 6}`]}
            greyBoxClass={styles.smallGreyBox}
            textLines={item.textLines}
            price={item.price}
          />
        ))}
      </div>
    </div>
  ));

  const newGridItems = Array.from({ length: 7 }, (_, index) => (
    <div
      key={index}
      className={`${styles.newGridItem} ${styles[`newGridItem${index + 1}`]}`}
    >
      <p>작품설명 작품설명 작품설명</p>
      <p>작품설명 작품설명 작품설명</p>
    </div>
  ));

  const bestItems = Array.from({ length: 20 }, (_, index) => (
    <div key={index} className={styles.bestItem}>
      <div className={`${styles.greyBox} ${styles.bestGreyBox}`}></div>
      <div className={styles.besttext}>
        <h3>제목 {index + 1} </h3>
        <p className={styles.middletext}>
          설명설명설명설명{" "}
          <div className={styles.priceCart}>
            <FaCartPlus />
          </div>
        </p>
        <p>120,000원</p>
      </div>
    </div>
  ));

  return (
    <div className={styles.homeContainer}>
      <div className={styles.sliderContainer}>
        <Slider {...mainSettings}>{homeMain}</Slider>
      </div>
      <div className={styles.newGrid}>
        <h2>미술사에서 검증된 작품을 부담없이 소장해 보세요 :)</h2>
        <div className={styles.newGridContainer}>{newGridItems}</div>
      </div>
      <h2 className={styles.centeredHeading}>BEST</h2>
      <div className={styles.sliderContainer}>
        <Slider {...bestSettings}>
          <div className={styles.bestGrid}>{bestItems.slice(0, 2)}</div>
          <div className={styles.bestGrid}>{bestItems.slice(2, 4)}</div>
          <div className={styles.bestGrid}>{bestItems.slice(4, 6)}</div>
          <div className={styles.bestGrid}>{bestItems.slice(6, 8)}</div>
          <div className={styles.bestGrid}>{bestItems.slice(8, 10)}</div>
          <div className={styles.bestGrid}>{bestItems.slice(10, 12)}</div>
          <div className={styles.bestGrid}>{bestItems.slice(12, 14)}</div>
          <div className={styles.bestGrid}>{bestItems.slice(14, 16)}</div>
          <div className={styles.bestGrid}>{bestItems.slice(16, 18)}</div>
          <div className={styles.bestGrid}>{bestItems.slice(18, 20)}</div>
        </Slider>
      </div>
      <div className={styles.asymmetricGridContainer}>
        <p>인터리어에 잘 어울리는 모던한 풍경 사진은 어떠세요 ?</p>
        <div className={styles.asymmetricGrid}>
          <div className={`${styles.asymmetricGridItem} ${styles.gridItem1}`}>
            <p>작품설명 작품설명 작품설명</p>
          </div>
          <div className={`${styles.asymmetricGridItem} ${styles.gridItem2}`}>
            <p>작품설명 작품설명 작품설명</p>
          </div>
          <div className={`${styles.asymmetricGridItem} ${styles.gridItem3}`}>
            <p>작품설명 작품설명 작품설명</p>
          </div>
        </div>
      </div>
      <div className={styles.symmetricGridContainer}>
        <p>열정적으로 작품 세계를 풀어가는 작가분들의 원화 작품입니다.</p>
        <Link to="/Original" className={styles.moreText}>
          더보기
        </Link>
        <div className={styles.symmetricGrid}>
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
      <div className={styles.originalGridContainer}>
        <h2>오리지널 원화</h2>
        <Slider {...originalSettings}>
          <div className={styles.originalGrid}>
            <div className={styles.originalGridItem}>
              <div className={styles.originalGreyBox}></div>
              <div className={styles.originalText}>
                <p>작가명</p>
                <p>작품소재작품소재, 제작년도</p>
              </div>
            </div>
            <div className={styles.originalGridItem}>
              <div className={styles.originalGreyBox}></div>
              <div className={styles.originalText}>
                <p>작가명</p>
                <p>작품소재작품소재, 제작년도</p>
              </div>
            </div>
            <div className={styles.originalGridItem}>
              <div className={styles.originalGreyBox}></div>
              <div className={styles.originalText}>
                <p>작가명</p>
                <p>작품소재작품소재, 제작년도</p>
              </div>
            </div>
          </div>
        </Slider>
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

export default Home;
