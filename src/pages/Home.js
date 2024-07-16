//Home.js
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

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sliderRef = useRef(null);
  const gridRef = useRef(null);
  const { language } = useLanguage();
  const navigate = useNavigate();
  const currentTranslations = translations[language];
  const [leftGridItems, setLeftGridItems] = useState([
    { type: "largeItem", textLines: currentTranslations.main.slice(0, 2) },
    { type: "mediumItem1", textLines: currentTranslations.main.slice(2, 4) },
    { type: "mediumItem2", textLines: currentTranslations.main.slice(2, 4) },
    ...currentTranslations.smallItemsLeft.map((item, i) => ({
      type: `smallItemLeft${i + 1}`,
      textLines: item.textLines,
      price: item.price,
    })),
  ]);
  const [rightGridItems, setRightGridItems] = useState([
    ...currentTranslations.smallItemsRight.map((item, i) => ({
      type: `smallItemRight${i + 1}`,
      textLines: item.textLines,
      price: item.price,
    })),
    ...currentTranslations.smallItemsRight.map((item, i) => ({
      type: `smallItemRight${i + 6}`,
      textLines: item.textLines,
      price: item.price,
    })),
  ]);
  const [animating, setAnimating] = useState(false);
  const [itemsToRemove, setItemsToRemove] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAnimationEnd = (index, side) => {
    setItemsToRemove((prev) => [...prev, { index, side }]);
  };

  useEffect(() => {
    if (itemsToRemove.length > 0) {
      const newLeftItems = leftGridItems.filter(
        (_, index) =>
          !itemsToRemove.some(
            (item) => item.index === index && item.side === "left"
          )
      );
      const newRightItems = rightGridItems.filter(
        (_, index) =>
          !itemsToRemove.some(
            (item) => item.index === index && item.side === "right"
          )
      );

      setLeftGridItems(newLeftItems);
      setRightGridItems(newRightItems);
      setItemsToRemove([]);
    }
  }, [itemsToRemove, leftGridItems, rightGridItems]);

  const slideRight = () => {
    if (animating) return;
    setAnimating(true);

    const newLeftItems = [
      { ...leftGridItems[1], type: "largeItem" },
      { ...leftGridItems[2], type: "mediumItem1" },
      { type: "mediumItem2", textLines: currentTranslations.main.slice(4, 6) },
      ...rightGridItems.slice(0, 2).map((item, i) => ({
        ...item,
        type: `smallItemLeft${i + 1}`,
      })),
      ...rightGridItems.slice(2, 5).map((item, i) => ({
        ...rightGridItems[i + 2],
        type: `smallItemLeft${i + 3}`,
      })),
    ];

    const newRightItems = [
      ...rightGridItems.slice(2).map((item, i) => ({
        ...rightGridItems[i + 5],
        type: `smallItemRight${i + 1}`,
      })),
      ...rightGridItems.slice(5).map((item, i) => ({
        type: `smallItemRight${i + 6}`,
        textLines: currentTranslations.smallItemsRight[i].textLines,
        price: currentTranslations.smallItemsRight[i].price,
      })),
    ];

    setLeftGridItems(newLeftItems);
    setRightGridItems(newRightItems);

    setTimeout(() => {
      setAnimating(false);
    }, 400);
  };

  const slideLeft = () => {
    if (animating) return;
    setAnimating(true);

    const newLeftItems = [
      { ...leftGridItems[0], type: "mediumItem1" },
      { ...leftGridItems[1], type: "mediumItem2" },
      { type: "largeItem", textLines: currentTranslations.main.slice(0, 2) },
      ...leftGridItems.slice(3, 5).map((item, i) => ({
        ...rightGridItems[i],
        type: `smallItemLeft${i + 1}`,
      })),
      ...rightGridItems.slice(2, 4).map((item, i) => ({
        ...rightGridItems[i + 2],
        type: `smallItemLeft${i + 3}`,
      })),
    ];

    const newRightItems = [
      ...leftGridItems.slice(3, 5).map((item, i) => ({
        ...rightGridItems[i],
        type: `smallItemRight${i + 1}`,
      })),
      ...rightGridItems.slice(0, 2).map((item, i) => ({
        ...rightGridItems[i],
        type: `smallItemRight${i + 3}`,
      })),
      ...leftGridItems.slice(3, 5).map((item, i) => ({
        type: `smallItemRight${i + 6}`,
        textLines: currentTranslations.smallItemsLeft[i].textLines,
        price: currentTranslations.smallItemsLeft[i].price,
      })),
    ];

    setLeftGridItems(newLeftItems);
    setRightGridItems(newRightItems);

    setTimeout(() => {
      setAnimating(false);
    }, 400);
  };

  const handleMoreTextClick = () => {
    navigate("/Original");
  };

  const mainSettings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    centerMode: false,
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
            onClick={() => {
              sliderRef.current.slickPrev();
              slideLeft();
            }}
            style={{ cursor: "pointer" }}
          >
            <span className="arrow">❮</span>
          </li>
          {dots}
          <li
            className="slick-arrow"
            onClick={() => {
              sliderRef.current.slickNext();
              slideRight();
            }}
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
        onClick={() => {
          sliderRef.current.slickPrev();
          slideLeft();
        }}
      />
    ),
    nextArrow: (
      <Arrow
        className={`${styles.arrow} ${styles.nextArrow}`}
        icon="❯"
        onClick={() => {
          sliderRef.current.slickNext();
          slideRight();
        }}
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

  const GridItem = ({
    className = "",
    greyBoxClass,
    textLines = [],
    price = "",
    animateOut,
    onAnimationEnd,
  }) => {
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
      <article
        className={`${className} ${styles.gridItemContent} ${
          (className.includes("largeItem") ||
            className.includes("mediumItem")) &&
          styles.columnDirection
        } ${animateOut ? styles.animateOut : ""}`}
        onAnimationEnd={animateOut ? () => onAnimationEnd() : undefined}
      >
        <figure className={styles.greyBoxContainer}>
          <figcaption
            className={`${styles.greyBox} ${greyBoxClass}`}
            ref={greyBoxRef}
          >
            {containerWidth > 0 && containerHeight > 0 && (
              <ZoomImage
                zoomRate={2}
                containerWidth={containerWidth}
                containerHeight={containerHeight}
              >
                <section
                  className={styles.greyBoxContent}
                  style={{
                    width: containerWidth,
                    height: containerHeight,
                  }}
                ></section>
              </ZoomImage>
            )}
          </figcaption>
        </figure>
        <div className={styles.text}>
          {textLines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          {price && <div className={styles.homePrice}>{price}</div>}
        </div>
      </article>
    );
  };

  const homeMainDesktop = (
    <div className={styles.homeGridWrapper} ref={gridRef}>
      <div className={styles.homeGrid}>
        {leftGridItems.map((item, index) => (
          <GridItem
            key={index}
            className={styles[item.type]}
            greyBoxClass={
              item.type.startsWith("smallItem")
                ? styles.smallGreyBox
                : styles.greyBox
            }
            textLines={item.textLines}
            price={item.price}
            animateOut={animating && index === leftGridItems.length - 1}
            onAnimationEnd={() => handleAnimationEnd(index, "left")}
          />
        ))}
        {rightGridItems.map((item, index) => (
          <GridItem
            key={index}
            className={styles[item.type]}
            greyBoxClass={
              item.type.startsWith("smallItem")
                ? styles.smallGreyBox
                : styles.greyBox
            }
            textLines={item.textLines}
            price={item.price}
            animateOut={animating && index === rightGridItems.length - 1}
            onAnimationEnd={() => handleAnimationEnd(index, "right")}
          />
        ))}
      </div>
    </div>
  );

  const homeMainMobile = (
    <div className={styles.homeGridWrapper}>
      <div className={styles.homeGridMobile}>
        {leftGridItems.slice(0, 4).map((item, index) => (
          <GridItem
            key={index}
            className={styles[item.type]}
            greyBoxClass={
              item.type.startsWith("smallItem")
                ? styles.smallGreyBox
                : styles.greyBox
            }
            textLines={item.textLines}
            price={item.price}
          />
        ))}
        {rightGridItems.slice(0, 4).map((item, index) => (
          <GridItem
            key={index}
            className={styles[item.type]}
            greyBoxClass={
              item.type.startsWith("smallItem")
                ? styles.smallGreyBox
                : styles.greyBox
            }
            textLines={item.textLines}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );

  const bestItems = Array.from({ length: 20 }, (_, index) => (
    <div key={index} className={styles.bestItem}>
      <div className={`${styles.greyBox} ${styles.bestGreyBox}`}></div>
      <div className={styles.bestText}>
        <h3>
          {currentTranslations.bestItem} {index + 1} <FaCartPlus />
        </h3>
        <p className={styles.middleText}>
          {currentTranslations.bestDescription}
          <div className={styles.priceCart}></div>
        </p>
        <p>{currentTranslations.bestPrice}</p>
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
          {currentTranslations.bestHeader}
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
        <h2>{currentTranslations.newGridHeader}</h2>
        <div className={styles.newGridContainer}>
          {Array.from({ length: 7 }, (_, index) => (
            <div
              key={index}
              className={`${styles.newGridItem} ${
                styles[`newGridItem${index + 1}`]
              }`}
            >
              <span>{currentTranslations.symmetricItem}</span>
              <span>{currentTranslations.symmetricItem}</span>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.asymmetricGridSection}>
        <p>{currentTranslations.asymmetricGridHeader}</p>
        <div className={styles.asymmetricGrid}>
          <div className={`${styles.asymmetricGridItem} ${styles.gridItem1}`}>
            <span>{currentTranslations.symmetricItem}</span>
          </div>
          <div className={`${styles.asymmetricGridItem} ${styles.gridItem2}`}>
            <span>{currentTranslations.symmetricItem}</span>
          </div>
          <div className={`${styles.asymmetricGridItem} ${styles.gridItem3}`}>
            <span>{currentTranslations.symmetricItem}</span>
          </div>
        </div>
      </section>
      <section className={styles.symmetricGridSection}>
        <p>{currentTranslations.symmetricGridHeader}</p>
        <button className={styles.moreText} onClick={handleMoreTextClick}>
          {currentTranslations.moreText}
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
                    {currentTranslations.symmetricItem}, 제작년도
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
                    {currentTranslations.symmetricItem}, 제작년도
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <section className={styles.textContainerSection}>
        <div className={styles.textContainer}>
          <p>{currentTranslations.textContainer}</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
