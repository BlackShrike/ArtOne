import React from "react";
import "../css/Promotion.css";
import promotion1 from "../img/Promotion1.jpg";

function Promotion(props) {
    return (
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
    );
}

export default Promotion;