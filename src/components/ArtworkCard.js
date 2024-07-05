import React from "react";

const ArtworkCard = ({ title, artist, date, imageUrl }) => {
  return (
    <div style={styles.card}>
      <img
        src={imageUrl}
        alt={title}
        style={styles.image}
        referrerPolicy="no-referrer"
      />
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{date}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    maxWidth: "300px",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
};

export default ArtworkCard;
