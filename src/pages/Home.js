import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Home.module.css";
import Slider from "react-slick";
import { FaCartPlus } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mainSettings = {
  dots: true,
  infinite: true,
  speed: 1000, // 천천히 넘어가는 슬라이드 전환 속도
  slidesToShow: 1,
  slidesToScroll: 1, // 한 번에 하나씩 슬라이드 이동
  arrows: true,
  autoplay: false,
  centerMode: false,
  centerPadding: "0px",
};

const bestSettings = {
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

function Home(props) {
  const homeMain = Array.from({ length: 8 }, (_, index) => (
    <div key={index} className={styles.homeGridWrapper}>
      <div className={styles.homeGrid}>
        <div className={`${styles.item} ${styles.largeItem}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>[NEW IN]건강 챙기는 선물이 최고, 프리미엄 꿀 브랜드</p>
            <p>건강 선물도 고급스럽게 - 신규 F&B브랜드 워커비를 소개합니다.</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.mediumItem1}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>FRESH BAKE, 따끈한 입고소식</p>
            <p>프린트베이커리에 새로 입고한 따끈따끈한 신상품 모아보기</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.mediumItem2}`}>
          <div className={styles.greyBox}></div>
          <div className={styles.text}>
            <p>FRESH BAKE, 따끈한 입고소식</p>
            <p>프린트베이커리에 새로 입고한 따끈따끈한 신상품 모아보기</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemLeft1}`}>
          <div className={styles.smallGreyBox}></div>
          <div className={styles.text}>
            <p>툴프레스 Toolpress</p>
            <p>[PB ONLY]Print Bakery 한지 엽서</p>
            <p className={styles.homePrice}>7,500원</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemLeft2}`}>
          <div className={styles.smallGreyBox}></div>
          <div className={styles.text}>
            <p>호랑 HORANG</p>
            <p>실버 디지트 커트러티 SET</p>
            <p className={styles.homePrice}>42,000원</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight1}`}>
          <div className={styles.smallGreyBox}></div>
          <div className={styles.text}>
            <p>워커비 WORKERBEE</p>
            <p>허니 로열 젤리</p>
            <p className={styles.homePrice}>228,000원</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight2}`}>
          <div className={styles.smallGreyBox}></div>
          <div className={styles.text}>
            <p>워커비 WORKERBEE</p>
            <p>워커비 스페셜 허니 박스</p>
            <p className={styles.homePrice}>152,000원</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight3}`}>
          <div className={styles.smallGreyBox}></div>
          <div className={styles.text}>
            <p>워커비 WORKERBEE</p>
            <p>허니 미니 차 GIFT SET - 3개입</p>
            <p className={styles.homePrice}>14,000원</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight4}`}>
          <div className={styles.smallGreyBox}></div>
          <div className={styles.text}>
            <p>워커비 WORKERBEE</p>
            <p>허니 로열 젤리</p>
            <p className={styles.homePrice}>228,000</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight5}`}>
          <div className={styles.smallGreyBox}></div>
          <div className={styles.text}>
            <p>워커비 WORKERBEE</p>
            <p>워커비 스페셜 허니 박스</p>
            <p className={styles.homePrice}>152,000원</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight6}`}>
          <div className={styles.smallGreyBox}></div>
          <div className={styles.text}>
            <p>워커비 WORKERBEE</p>
            <p>허니 로열 젤리</p>
            <p className={styles.homePrice}>228,000원</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight7}`}>
          <div className={styles.smallGreyBox}></div>
          <div className={styles.text}>
            <p>워커비 WORKERBEE</p>
            <p>워커비 스페셜 허니 박스</p>
            <p className={styles.homePrice}>152,000원</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight8}`}>
          <div className={styles.smallGreyBox}></div>
          <div className={styles.text}>
            <p>워커비 WORKERBEE</p>
            <p>허니 미니 차 GIFT SET - 3개입</p>
            <p className={styles.homePrice}>14,000원</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight9}`}>
          <div className={styles.smallGreyBox}></div>
          <div className={styles.text}>
            <p>워커비 WORKERBEE</p>
            <p>허니 로열 젤리</p>
            <p className={styles.homePrice}>228,000원</p>
          </div>
        </div>
        <div className={`${styles.item} ${styles.smallItemRight10}`}>
          <div className={styles.smallGreyBox}></div>
          <div className={styles.text}>
            <p>워커비 WORKERBEE</p>
            <p>워커비 스페셜 허니 박스</p>
            <p className={styles.homePrice}>152,000원</p>
          </div>
        </div>
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
        <h3>제목 {index + 1}</h3>
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
          <div className={styles.bestGrid}>{bestItems.slice(0, 10)}</div>
          <div className={styles.bestGrid}>{bestItems.slice(10, 20)}</div>
        </Slider>
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
        <Link to="/Promotion" className={styles.moreText}>
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

export default Home;
