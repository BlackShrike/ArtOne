import React, { useRef, useState, useCallback, useEffect } from "react";
import "../css/ZoomImage.css";
import imageSrc from "../img/Img1.jpg"; // 이미지 경로를 import

const ZoomImage = ({ zoomRate, children }) => {
  const [cursor, setCursor] = useState({ cursorX: 0, cursorY: 0 });
  const [isHover, setIsHover] = useState(false);
  const containerRef = useRef();
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const handleMouseMove = useCallback(
    (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const cursorX = e.clientX - rect.left;
        const cursorY = e.clientY - rect.top;

        setCursor({ cursorX, cursorY });
      }
    },
    [zoomRate]
  );

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    const handleImageLoad = () => {
      updateContainerSize();
      window.addEventListener("resize", updateContainerSize);
    };

    const img = new Image();
    img.src = imageSrc;
    img.onload = handleImageLoad;

    return () => window.removeEventListener("resize", updateContainerSize);
  }, []);

  const cursorStyle = {
    position: "absolute",
    width: `${containerSize.width}px`,
    height: `${containerSize.height}px`,
    left: 0,
    top: 0,
    zIndex: 999,
    backgroundImage: containerRef.current
      ? window.getComputedStyle(containerRef.current).backgroundImage
      : `url(${imageSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${containerSize.width * zoomRate}px ${
      containerSize.height * zoomRate
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
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${imageSrc})`, // 이미지 경로를 설정
        backgroundSize: "cover", // 이미지를 컨테이너에 맞추어 조정
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
