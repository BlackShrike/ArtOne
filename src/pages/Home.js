import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Home.module.css";
import Slider from "react-slick";
import { FaCartPlus } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../components/LanguageContext";

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
        variableWidth: true,
      },
    },
  ],
};

const symmetricSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  variableWidth: true,
  centerMode: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        variableWidth: true,
      },
    },
  ],
};

const translations = {
  KR: {
    main: [
      "[NEW IN]건강 챙기는 선물이 최고, 프리미엄 꿀 브랜드",
      "건강 선물도 고급스럽게 - 신규 F&B브랜드 워커비를 소개합니다.",
      "FRESH BAKE, 따끈한 입고소식",
      "프린트베이커리에 새로 입고한 따끈따끈한 신상품 모아보기",
      "툴프레스 Toolpress",
      "[PB ONLY]Print Bakery 한지 엽서",
      "호랑 HORANG",
      "실버 디지트 커트러티 SET",
    ],
    newGridHeader: "미술사에서 검증된 작품을 부담없이 소장해 보세요 :)",
    bestHeader: "BEST",
    bestItem: "제목",
    bestDescription: "설명설명설명설명",
    bestPrice: "120,000원",
    asymmetricGridHeader:
      "인터리어에 잘 어울리는 모던한 풍경 사진은 어떠세요 ?",
    symmetricGridHeader:
      "열정적으로 작품 세계를 풀어가는 작가분들의 원화 작품입니다.",
    moreText: "더보기",
    symmetricItem: "작품소개작품소개",
    textContainer:
      "아름다움을 좋아하는 분들에게 감사를 전하기 좋은 날 더불어 좋은 작품과 함께하세요 :)",
  },
  EN: {
    main: [
      "[NEW IN] The best gift for health, premium honey brand",
      "Luxurious health gift - Introducing the new F&B brand Workerbee.",
      "FRESH BAKE, Freshly Arrived",
      "Check out the freshly arrived new products at Print Bakery",
      "Toolpress Toolpress",
      "[PB ONLY]Print Bakery Hanji Postcard",
      "HORANG HORANG",
      "Silver Digit Cutlery SET",
    ],
    newGridHeader: "Own verified artworks in art history without burden :)",
    bestHeader: "BEST",
    bestItem: "Title",
    bestDescription: "Description",
    bestPrice: "$120.00",
    asymmetricGridHeader:
      "How about a modern landscape photo that goes well with your interior?",
    symmetricGridHeader:
      "These are original works of artists who passionately explore their artistic world.",
    moreText: "More",
    symmetricItem: "Art Introduction",
    textContainer:
      "Have a great day with beautiful works of art to thank those who love beauty :)",
  },
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { language } = useLanguage(); // Use language context

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const homeMain = Array.from({ length: 8 }, (_, index) => (
    <div className={styles.homeGridWrapper} key={index}>
      <div className={styles.homeGrid}>
        <GridItem
          className={styles.largeItem}
          greyBoxClass={styles.greyBox}
          textLines={translations[language].main.slice(0, 2)}
        />
        <GridItem
          className={styles.mediumItem1}
          greyBoxClass={styles.greyBox}
          textLines={translations[language].main.slice(2, 4)}
        />
        <GridItem
          className={styles.mediumItem2}
          greyBoxClass={styles.greyBox}
          textLines={translations[language].main.slice(2, 4)}
        />
        <GridItem
          className={styles.smallItemLeft1}
          greyBoxClass={styles.smallGreyBox}
          textLines={translations[language].main.slice(4, 6)}
          price={translations[language].mainPrice}
        />
        <GridItem
          className={styles.smallItemLeft2}
          greyBoxClass={styles.smallGreyBox}
          textLines={translations[language].main.slice(6, 8)}
          price={translations[language].mainPrice}
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
      <p>{translations[language].symmetricItem}</p>
      <p>{translations[language].symmetricItem}</p>
    </div>
  ));

  const bestItems = Array.from({ length: 20 }, (_, index) => (
    <div key={index} className={styles.bestItem}>
      <div className={`${styles.greyBox} ${styles.bestGreyBox}`}></div>
      <div className={styles.bestText}>
        <h3>
          {translations[language].bestItem} {index + 1}
        </h3>
        <p className={styles.middleText}>
          {translations[language].bestDescription}
          <div className={styles.priceCart}>
            <FaCartPlus />
          </div>
        </p>
        <p>{translations[language].bestPrice}</p>
      </div>
    </div>
  ));

  const symmetricItems = Array.from({ length: 6 }, (_, index) => ({
    id: index,
    name: `작가명 ${index + 1}`,
    description: translations[language].symmetricItem,
    year: "제작년도",
  }));

  return (
    <div className={styles.homeContainer}>
      <div className={styles.sliderContainer}>
        <Slider {...mainSettings}>{homeMain}</Slider>
      </div>
      <div className={styles.newGrid}>
        <h2>{translations[language].newGridHeader}</h2>
        <div className={styles.newGridContainer}>{newGridItems}</div>
      </div>
      <h2 className={styles.centeredHeading}>
        {translations[language].bestHeader}
      </h2>
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
        <p>{translations[language].asymmetricGridHeader}</p>
        <div className={styles.asymmetricGrid}>
          <div className={`${styles.asymmetricGridItem} ${styles.gridItem1}`}>
            <p>{translations[language].symmetricItem}</p>
          </div>
          <div className={`${styles.asymmetricGridItem} ${styles.gridItem2}`}>
            <p>{translations[language].symmetricItem}</p>
          </div>
          <div className={`${styles.asymmetricGridItem} ${styles.gridItem3}`}>
            <p>{translations[language].symmetricItem}</p>
          </div>
        </div>
      </div>
      <div className={styles.symmetricGridContainer}>
        <p>{translations[language].symmetricGridHeader}</p>
        <Link to="/Original" className={styles.moreText}>
          {translations[language].moreText}
        </Link>
        {isMobile ? (
          <Slider className={styles.specificSlider} {...symmetricSettings}>
            {symmetricItems.map((item) => (
              <div key={item.id} className={styles.symmetricGridItem}>
                <div className={styles.greyBox}></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.profileIcon}></div>
                  <div className={styles.itemText}>
                    <strong>{item.name}</strong>
                    <br />
                    {item.description}, {item.year}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className={styles.symmetricGrid}>
            {symmetricItems.map((item) => (
              <div key={item.id} className={styles.symmetricGridItem}>
                <div className={styles.greyBox}></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.profileIcon}></div>
                  <div className={styles.itemText}>
                    <strong>{item.name}</strong>
                    <br />
                    {item.description}, {item.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.textContainer}>
        <p>{translations[language].textContainer}</p>
      </div>
    </div>
  );
}

export default Home;
