import React, { useRef, useState, useCallback, useEffect } from "react";
import "../css/ZoomImage.css";
import imageSrc from "../img/Img1.jpg"; // 이미지 경로를 import

const ZoomImage = ({ zoomRate, containerWidth, containerHeight, children }) => {
  const [cursor, setCursor] = useState({ cursorX: 0, cursorY: 0 });
  const [isHover, setIsHover] = useState(false);
  const containerRef = useRef();

  const handleMouseMove = useCallback(
    (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;

      setCursor({ cursorX, cursorY });
    },
    [zoomRate]
  );

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      containerRef.current.style.backgroundSize = `${width}px ${height}px`;
    }
  }, [zoomRate]);

  const cursorStyle = {
    position: "absolute",
    width: `${containerWidth}px`,
    height: `${containerHeight}px`,
    left: 0,
    top: 0,
    zIndex: 999,
    backgroundImage: containerRef.current
      ? window.getComputedStyle(containerRef.current).backgroundImage
      : `url(${imageSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${containerWidth * zoomRate}px ${
      containerHeight * zoomRate
    }px`,
    backgroundPosition: `-${cursor.cursorX * (zoomRate - 1)}px -${
      cursor.cursorY * (zoomRate - 1)
    }px`,
    transformOrigin: `${cursor.cursorX}px ${cursor.cursorY}px`,
    transition: "transform 0.3s ease-out",
    pointerEvents: "none",
  };

  return (
    <div
      className="zoom-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        width: containerWidth,
        height: containerHeight,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${imageSrc})`, // 이미지 경로를 설정
        backgroundSize: "fill", // 이미지를 컨테이너에 맞추어 조정
        backgroundPosition: "center",
      }}
    >
      <div className="zoom-image" style={{ width: "100%", height: "100%" }}>
        {children}
      </div>
      {isHover && <div className="zoom-cursor" style={cursorStyle} />}
    </div>
  );
};

export default ZoomImage;
