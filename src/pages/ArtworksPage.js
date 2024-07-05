import React, { useEffect, useState } from "react";
import ArtworkCard from "../components/ArtworkCard";

const ArtworksPage = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("/combined_artworks.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setArtworks(shuffled.slice(0, 10));
      })
      .catch((error) => console.error("Error fetching artworks:", error));
  }, []);

  return (
    <div style={styles.container}>
      {artworks.map((artwork, index) => (
        <ArtworkCard
          key={index}
          title={artwork.title}
          artist={artwork.artist}
          date={artwork.date}
          imageUrl={artwork.image_url}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default ArtworksPage;
