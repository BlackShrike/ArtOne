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
import { getProducts } from "../components/apiClient";

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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        }}
      />
    ),
    nextArrow: (
      <Arrow
        className={`${styles.arrow} ${styles.nextArrow}`}
        icon="❯"
        onClick={() => {
          sliderRef.current.slickNext();
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
    title,
    description,
    artist,
    image,
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
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
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
          {title && <div className={styles.homeTitle}>{title}</div>}
          {description && (
            <div className={styles.homeDescription}>{description}</div>
          )}
          {artist && <div className={styles.homeArtist}>{artist}</div>}
        </div>
      </article>
    );
  };

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 내용
  }

  const leftGridItems = [
    {
      type: "largeItem",
      textLines: [currentTranslations.main[0]],
      price: "",
      image: products[0]?.image,
      title: currentTranslations.main[0],
      description: currentTranslations.main[1],
    },
    {
      type: "mediumItem1",
      textLines: [currentTranslations.main[2]],
      price: "",
      image: products[1]?.image,
      title: currentTranslations.main[2],
      description: currentTranslations.main[3],
    },
    {
      type: "mediumItem2",
      textLines: [currentTranslations.main[4]],
      price: "",
      image: products[2]?.image,
      title: currentTranslations.main[4],
      description: currentTranslations.main[5],
    },
    {
      type: "smallItemLeft1",
      textLines: currentTranslations.smallItemsLeft[0].textLines,
      price: currentTranslations.smallItemsLeft[0].price,
      image: products[3]?.image,
    },
    {
      type: "smallItemLeft2",
      textLines: currentTranslations.smallItemsLeft[1].textLines,
      price: currentTranslations.smallItemsLeft[1].price,
      image: products[4]?.image,
    },
  ];

  const rightGridItems = [
    ...currentTranslations.smallItemsRight.slice(0, 5).map((item, index) => ({
      type: `smallItemRight${index + 1}`,
      textLines: item.textLines,
      price: item.price,
      image: products[index + 5]?.image,
    })),
    ...currentTranslations.smallItemsRight.slice(0, 5).map((item, index) => ({
      type: `smallItemRight${index + 6}`,
      textLines: item.textLines,
      price: item.price,
      image: products[index + 10]?.image,
    })),
  ];

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
            image={item.image}
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
            image={item.image}
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
            image={item.image}
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
            image={item.image}
          />
        ))}
      </div>
    </div>
  );

  const bestItems = Array.from({ length: 20 }, (_, index) => (
    <div key={index} className={styles.bestItem}>
      <div
        className={`${styles.greyBox} ${styles.bestGreyBox}`}
        style={{ backgroundImage: `url(${products[index]?.image})` }}
      ></div>
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

  const newGridItems = Array.from({ length: 7 }, (_, index) => ({
    image: products[index + 15]?.image,
    textLines: [
      currentTranslations.newGridHeader,
      currentTranslations.newGridHeader,
    ],
  }));

  const asymmetricGridItems = Array.from({ length: 3 }, (_, index) => ({
    image: products[index + 22]?.image,
    textLines: [currentTranslations.asymmetricGridHeader],
  }));

  const symmetricGridItems = Array.from({ length: 6 }, (_, index) => ({
    image: products[index + 25]?.image,
    textLines: [currentTranslations.symmetricItem],
    artist: `작가명 ${index + 1}`,
    year: "제작년도",
  }));

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
          {newGridItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.newGridItem} ${
                styles[`newGridItem${index + 1}`]
              }`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {item.textLines.map((line, idx) => (
                <span key={idx}>{line}</span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className={styles.asymmetricGridSection}>
        <p>{currentTranslations.asymmetricGridHeader}</p>
        <div className={styles.asymmetricGrid}>
          {asymmetricGridItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.asymmetricGridItem} ${
                styles[`gridItem${index + 1}`]
              }`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {item.textLines.map((line, idx) => (
                <span key={idx}>{line}</span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className={styles.symmetricGridSection}>
        <p>{currentTranslations.symmetricGridHeader}</p>
        <button className={styles.moreText} onClick={handleMoreTextClick}>
          {currentTranslations.moreText}
        </button>
        {isMobile ? (
          <Slider {...symmetricSettings}>
            {symmetricGridItems.map((item, index) => (
              <div key={index} className={styles.symmetricGridItem}>
                <div
                  className={styles.greyBox}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.profileIcon}></div>
                  <div className={styles.itemText}>
                    <strong>{item.artist}</strong>
                    <br />
                    {item.textLines[0]}, {item.year}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className={styles.symmetricGrid}>
            {symmetricGridItems.map((item, index) => (
              <div key={index} className={styles.symmetricGridItem}>
                <div
                  className={styles.greyBox}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.profileIcon}></div>
                  <div className={styles.itemText}>
                    <strong>{item.artist}</strong>
                    <br />
                    {item.textLines[0]}, {item.year}
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
