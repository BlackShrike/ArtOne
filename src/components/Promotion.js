import React from "react";
import "../css/Promotion.css";

function Promotion(props) {
    return (
        <div className="promotion-grid">
            <div className="item large-item">
                <img src="https://placehold.co/600x400" alt="Large" />
                <div className="text">
                    <h2>[NEW IN] 건강 챙기는 선물이 최고, 프리미엄 꿀 브랜드워커비</h2>
                    <p>건강 선물로 고급스럽게 - 신규 F&B 브랜드 워커비를 소개합니다.</p>
                </div>
            </div>
            <div className="item medium-item">
                <img src="https://placehold.co/300x200" alt="Medium 1" />
                <div className="text">
                    <h2>FRESH BAKE, 따끈한 입고소식</h2>
                    <p>프론트베이커리에 새로 입고된 따끈따끈한 신상품 모아보기</p>
                </div>
            </div>
            <div className="item medium-item">
                <img src="https://placehold.co/300x200" alt="Medium 2" />
                <div className="text">
                    <h2>FRESH BAKE, 따끈한 입고소식</h2>
                    <p>프론트베이커리에 새로 입고된 따끈따끈한 신상품 모아보기</p>
                </div>
            </div>
            <div className="small-items-left">
                {Array.from({ length: 2 }, (_, i) => (
                    <div className="item small-item-left" key={i}>
                        <img src={`https://placehold.co/150x150`} alt={`Small ${i + 1}`} />
                        <div className="text">
                            <p>Small Item {i + 1}</p>
                            <p>Description for small item {i + 1}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="small-items-right">
                {Array.from({ length: 10 }, (_, i) => (
                    <div className="item small-item-right" key={i + 2}>
                        <img src={`https://placehold.co/100x100`} alt={`Small ${i + 3}`} />
                        <div className="text">
                            <p>Small Item {i + 3}</p>
                            <p>Description for small item {i + 3}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Promotion;
