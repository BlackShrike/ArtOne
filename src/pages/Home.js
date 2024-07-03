import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Home.module.css";
import Slider from "react-slick";
import { FaCartPlus } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../components/LanguageContext";
import "../css/slick.custom.css";
import ZoomImage from "../components/ZoomImage";

const Arrow = ({ className, style, onClick, icon }) => (
  <div className={className} style={{ ...style }} onClick={onClick}>
    {icon}
  </div>
);

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
    symmetricItem: "작품설명\n작품설명",
    textContainer:
      "아름다움을 좋아하는 분들에게 감사를 전하기 좋은 날\n더불어 좋은 작품과 함께하세요 :)",
    smallItemsLeft: [
      {
        textLines: ["툴프레스 ToolPress", "[PB ONLY] Print Bakery 한지 엽서"],
        price: "7,500원",
      },
      {
        textLines: ["호랑 HORANG", "실버 디지트 커트러리 SET"],
        price: "42,000원",
      },
    ],
    smallItemsRight: [
      {
        textLines: ["워커비 WORKERBEE", "허니 로열 젤리"],
        price: "228,000원",
      },
      {
        textLines: ["워커비 WORKERBEE", "워커비 스페셜 허니 박스"],
        price: "152,000원",
      },
      {
        textLines: ["워커비 WORKERBEE", "허니 미니 차 GIFT SET - 3개입"],
        price: "14,000원",
      },
      {
        textLines: ["워커비 WORKERBEE", "허니 로열 젤리"],
        price: "228,000원",
      },
      {
        textLines: ["워커비 WORKERBEE", "워커비 스페셜 허니 박스"],
        price: "152,000원",
      },
    ],
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
    smallItemsLeft: [
      {
        textLines: [
          "Toolpress ToolPress",
          "[PB ONLY] Print Bakery Hanji Postcard",
        ],
        price: "$7.50",
      },
      {
        textLines: ["HORANG HORANG", "Silver Digit Cutlery SET"],
        price: "$42.00",
      },
    ],
    smallItemsRight: [
      {
        textLines: ["Workerbee WORKERBEE", "Honey Royal Jelly"],
        price: "$228.00",
      },
      {
        textLines: ["Workerbee WORKERBEE", "Workerbee Special Honey Box"],
        price: "$152.00",
      },
      {
        textLines: ["Workerbee WORKERBEE", "Honey Mini Tea GIFT SET - 3pcs"],
        price: "$14.00",
      },
      {
        textLines: ["Workerbee WORKERBEE", "Honey Royal Jelly"],
        price: "$228.00",
      },
      {
        textLines: ["Workerbee WORKERBEE", "Workerbee Special Honey Box"],
        price: "$152.00",
      },
    ],
  },
};

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
const GridItem = ({ className, greyBoxClass, textLines, price }) => {
  const greyBoxRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (greyBoxRef.current) {
      const { width, height } = greyBoxRef.current.getBoundingClientRect();
      setContainerWidth(width);
      setContainerHeight(height);
    }
  }, []);

  return (
    <div className={`${styles.item} ${className}`}>
      <div className={`${styles.greyBox} ${greyBoxClass}`} ref={greyBoxRef}>
        {containerWidth > 0 && containerHeight > 0 && (
          <ZoomImage
            zoomRate={2}
            containerWidth={containerWidth}
            containerHeight={containerHeight}
          >
            <div className={`${styles.greyBoxContent} zoom-image`}></div>
          </ZoomImage>
        )}
      </div>
      <div className={styles.text}>
        {textLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        {price && <p className={styles.homePrice}>{price}</p>}
      </div>
    </div>
  );
};

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [symmetricGridHeader, setSymmetricGridHeader] = useState(
    translations[language].symmetricGridHeader
  );
  const handleMoreTextClick = () => {
    navigate("/Original");
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setSymmetricGridHeader("오리지널 원화");
      } else {
        setSymmetricGridHeader(translations[language].symmetricGridHeader);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [language]);

  useEffect(() => {
    if (isMobile) {
      setSymmetricGridHeader("오리지널 원화");
    } else {
      setSymmetricGridHeader(translations[language].symmetricGridHeader);
    }
  }, [isMobile, language]);

  const mainSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    centerMode: false,
    beforeChange: (current, next) => setSlideIndex(next),
    customPaging: (i) => <div>{i + 1} / 8</div>,
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            margin: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <li
            className="slick-arrow"
            onClick={() => sliderRef.current.slickPrev()}
            style={{ cursor: "pointer" }}
          >
            <span className="arrow">❮</span>
          </li>
          {dots}
          <li
            className="slick-arrow"
            onClick={() => sliderRef.current.slickNext()}
            style={{ cursor: "pointer" }}
          >
            <span className="arrow">❯</span>
          </li>
        </ul>
      </div>
    ),
    prevArrow: (
      <Arrow
        className={`${styles.arrow} ${styles.prevArrow}`}
        icon="❮"
        onClick={() => sliderRef.current.slickPrev()}
      />
    ),
    nextArrow: (
      <Arrow
        className={`${styles.arrow} ${styles.nextArrow}`}
        icon="❯"
        onClick={() => sliderRef.current.slickNext()}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
        },
      },
    ],
  };

  const bestSettings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 7.5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    centerMode: false,
    centerPadding: "0px",
    beforeChange: (current, next) => setSlideIndex(next),

    prevArrow: (
      <Arrow
        className={`${styles.arrow} ${styles.prevArrow}`}
        icon="❮"
        onClick={() => sliderRef.current.slickPrev()}
      />
    ),
    nextArrow: (
      <Arrow
        className={`${styles.arrow} ${styles.nextArrow}`}
        icon="❯"
        onClick={() => sliderRef.current.slickNext()}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          appendDots: (dots) => (
            <div>
              <ul
                style={{
                  margin: "0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <li
                  className="slick-arrow"
                  onClick={() => sliderRef.current.slickPrev()}
                  style={{ cursor: "pointer", display: "none" }}
                >
                  <span className="arrow">❮</span>
                </li>
                {dots}
                <li
                  className="slick-arrow"
                  onClick={() => sliderRef.current.slickNext()}
                  style={{ cursor: "pointer", display: "none" }}
                >
                  <span className="arrow">❯</span>
                </li>
              </ul>
            </div>
          ),
          customPaging: (i) => <div>{i + 1} / 8</div>,
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const symmetricSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    variableWidth: true,
    centerMode: false,
    prevArrow: (
      <Arrow className={`${styles.arrow} ${styles.prevArrow}`} icon="❮" />
    ),
    nextArrow: (
      <Arrow className={`${styles.arrow} ${styles.nextArrow}`} icon="❯" />
    ),
  };
  const homeMainDesktop = Array.from({ length: 8 }, (_, index) => (
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
          price={translations[language].smallItemsLeft[0].price}
        />
        <GridItem
          className={styles.smallItemLeft2}
          greyBoxClass={styles.smallGreyBox}
          textLines={translations[language].main.slice(6, 8)}
          price={translations[language].smallItemsLeft[1].price}
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

  const homeMainMobile = Array.from({ length: 8 }, (_, index) => (
    <div className={styles.homeGridMobile} key={index}>
      <GridItem
        className={styles.largeItem}
        greyBoxClass={styles.greyBox}
        textLines={translations[language].main.slice(0, 2)}
      />
      {smallItemsData.slice(0, 3).map((item, i) => (
        <GridItem
          key={i}
          className={styles[`smallItemRight${i + 1}`]}
          greyBoxClass={styles.smallGreyBox}
          textLines={item.textLines}
          price={item.price}
        />
      ))}
    </div>
  ));

  const bestItems = Array.from({ length: 20 }, (_, index) => (
    <div key={index} className={styles.bestItem}>
      <div className={`${styles.greyBox} ${styles.bestGreyBox}`}></div>
      <div className={styles.bestText}>
        <h3>
          {translations[language].bestItem} {index + 1} <FaCartPlus />
        </h3>
        <p className={styles.middleText}>
          {translations[language].bestDescription}
          <div className={styles.priceCart}></div>
        </p>
        <p>{translations[language].bestPrice}</p>
      </div>
    </div>
  ));
  return (
    <div className={styles.homeContainer}>
      <section className={styles.sliderSection}>
        <div className={styles.sliderContainer}>
          <Slider ref={sliderRef} {...mainSettings}>
            {isMobile ? homeMainMobile : homeMainDesktop}
          </Slider>
        </div>
      </section>
      <section className={styles.bestSection}>
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
      </section>
      <section className={styles.newGridSection}>
        <h2>{translations[language].newGridHeader}</h2>
        <div className={styles.newGridContainer}>
          {Array.from({ length: 7 }, (_, index) => (
            <div
              key={index}
              className={`${styles.newGridItem} ${
                styles[`newGridItem${index + 1}`]
              }`}
            >
              <p>{translations[language].symmetricItem}</p>
              <p>{translations[language].symmetricItem}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.asymmetricGridSection}>
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
      </section>
      <section className={styles.symmetricGridSection}>
        <p>{symmetricGridHeader}</p>
        <button className={styles.moreText} onClick={handleMoreTextClick}>
          {translations[language].moreText}
        </button>
        {isMobile ? (
          <Slider {...symmetricSettings}>
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className={styles.symmetricGridItem}>
                <div className={styles.greyBox}></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.profileIcon}></div>
                  <div className={styles.itemText}>
                    <strong>{`작가명 ${index + 1}`}</strong>
                    <br />
                    {translations[language].symmetricItem}, 제작년도
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className={styles.symmetricGrid}>
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className={styles.symmetricGridItem}>
                <div className={styles.greyBox}></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.profileIcon}></div>
                  <div className={styles.itemText}>
                    <strong>{`작가명 ${index + 1}`}</strong>
                    <br />
                    {translations[language].symmetricItem}, 제작년도
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <section className={styles.textContainerSection}>
        <div className={styles.textContainer}>
          <p>{translations[language].textContainer}</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
