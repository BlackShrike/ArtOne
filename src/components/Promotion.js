import React from "react";
import Slider from "react-slick";
import "../css/Promotion.css";
import promotion1 from "../img/Promotion1.jpg";
import { FaCartPlus } from "react-icons/fa";

function Promotion(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 2,
    arrows: true,
    centerMode: true,
    centerPadding: "60px",
  };

  return (
    <div>
      <div className="promotion-grid">
        <div className="item large-item">
          <img src={promotion1} alt="Large" />
          <div className="text">
            <p>Large Item</p>
            <p>Description for large item</p>
          </div>
        </div>
        <div className="item medium-item medium-item-1">
          <img src={promotion1} alt="Medium 1" />
          <div className="text">
            <p>Medium Item 1</p>
            <p>Description for medium item 1</p>
          </div>
        </div>
        <div className="item medium-item medium-item-2">
          <img src={promotion1} alt="Medium 2" />
          <div className="text">
            <p>Medium Item 2</p>
            <p>Description for medium item 2</p>
          </div>
        </div>
        <div className="item small-item small-item-left-1">
          <img src={promotion1} alt="Small Left 1" />
          <div className="text">
            <p>Small Left 1</p>
            <p>Description for small left 1</p>
          </div>
        </div>
        <div className="item small-item small-item-left-2">
          <img src={promotion1} alt="Small Left 2" />
          <div className="text">
            <p>Small Left 2</p>
            <p>Description for small left 2</p>
          </div>
        </div>
        <div className="item small-item small-item-right-1">
          <img src={promotion1} alt="Small Right 1" />
          <div className="text">
            <p>Small Right 1</p>
            <p>Description for small right 1</p>
          </div>
        </div>
        <div className="item small-item small-item-right-2">
          <img src={promotion1} alt="Small Right 2" />
          <div className="text">
            <p>Small Right 2</p>
            <p>Description for small right 2</p>
          </div>
        </div>
        <div className="item small-item small-item-right-3">
          <img src={promotion1} alt="Small Right 3" />
          <div className="text">
            <p>Small Right 3</p>
            <p>Description for small right 3</p>
          </div>
        </div>
        <div className="item small-item small-item-right-4">
          <img src={promotion1} alt="Small Right 4" />
          <div className="text">
            <p>Small Right 4</p>
            <p>Description for small right 4</p>
          </div>
        </div>
        <div className="item small-item small-item-right-5">
          <img src={promotion1} alt="Small Right 5" />
          <div className="text">
            <p>Small Right 5</p>
            <p>Description for small right 5</p>
          </div>
        </div>
        <div className="item small-item small-item-right-6">
          <img src={promotion1} alt="Small Right 6" />
          <div className="text">
            <p>Small Right 6</p>
            <p>Description for small right 6</p>
          </div>
        </div>
        <div className="item small-item small-item-right-7">
          <img src={promotion1} alt="Small Right 7" />
          <div className="text">
            <p>Small Right 7</p>
            <p>Description for small right 7</p>
          </div>
        </div>
        <div className="item small-item small-item-right-8">
          <img src={promotion1} alt="Small Right 8" />
          <div className="text">
            <p>Small Right 8</p>
            <p>Description for small right 8</p>
          </div>
        </div>
        <div className="item small-item small-item-right-9">
          <img src={promotion1} alt="Small Right 9" />
          <div className="text">
            <p>Small Right 9</p>
            <p>Description for small right 9</p>
          </div>
        </div>
        <div className="item small-item small-item-right-10">
          <img src={promotion1} alt="Small Right 10" />
          <div className="text">
            <p>Small Right 10</p>
            <p>Description for small right 10</p>
          </div>
        </div>
      </div>
      <div className="new-grid">
        <h2>미술사에서 검증된 작품을 부담없이 소장해 보세요 :)</h2>
        <div className="new-grid-container">
          <div className="new-grid-item grid-item-1"></div>
          <div className="new-grid-item grid-item-2"></div>
          <div className="new-grid-item grid-item-3"></div>
          <div className="new-grid-item grid-item-4"></div>
          <div className="new-grid-item grid-item-5"></div>
          <div className="new-grid-item grid-item-6"></div>
          <div className="new-grid-item grid-item-7"></div>
        </div>
      </div>
      <div className="promotion-container">
        <h2 className="centered-heading">BEST</h2>
        <Slider {...settings} className="best-section">
          {[...Array(16)].map((_, index) => (
            <div key={index} className="best-item">
              <img src={promotion1} alt={`Item ${index + 1}`} />
              <div className="text">
                <h3>제목 {index + 1}</h3>
                <p>설명설명설명설명</p>
                <div className="price-cart">
                  <p>120,000</p>
                  <FaCartPlus />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-container">
        <p>인터리어에 잘 어울리는 모던한 풍경 사진은 어떠세요 ?</p>
        <div className="asymmetric-grid-container">
          <div className="asymmetric-grid-item grid-item-1">
            작품설명 작품설명 작품설명
          </div>
          <div className="asymmetric-grid-item grid-item-2">
            작품설명 작품설명 작품설명
          </div>
          <div className="asymmetric-grid-item grid-item-3">
            작품설명 작품설명 작품설명
          </div>
        </div>
      </div>
      <div className="text-container">
        <p>열정적으로 작품 세계를 풀어가는 작가분들의 원화 작품입니다.</p>
        <div className="symmetric-grid-container">
          <div className="symmetric-grid-item">
            작가명 작품소개작품소개, 제작년도
          </div>
          <div className="symmetric-grid-item">
            작가명 작품소개작품소개, 제작년도
          </div>
          <div className="symmetric-grid-item">
            작가명 작품소개작품소개, 제작년도
          </div>
          <div className="symmetric-grid-item">
            작가명 작품소개작품소개, 제작년도
          </div>
          <div className="symmetric-grid-item">
            작가명 작품소개작품소개, 제작년도
          </div>
          <div className="symmetric-grid-item">
            작가명 작품소개작품소개, 제작년도
          </div>
        </div>
      </div>
      <div className="text-container">
        <p>
          아름다움을 좋아하는 분들에게 감사를 전하기 좋은 날 더불어 좋은 작품과
          함께하세요 :)
        </p>
      </div>
    </div>
  );
}

export default Promotion;
