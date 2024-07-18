import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Artist.module.css";
import BackButton from "../components/BackButton";
import { getProducts } from "../components/apiClient";

const generateArtistData = (products) => {
  const artists = {};

  products.forEach((product) => {
    const artist = product.artist;
    const firstLetter = artist[0].toUpperCase();
    if (!artists[firstLetter]) {
      artists[firstLetter] = [];
    }
    artists[firstLetter].push(product);
  });

  return artists;
};

function Artist() {
  const [selectedLetter, setSelectedLetter] = useState("ㄱ");
  const [artists, setArtists] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        const artistData = generateArtistData(data);
        setArtists(artistData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const alphabet = [
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ..."ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ",
  ];
  const artistKeys = Object.keys(artists).sort();

  return (
    <div className={styles.artistContainer}>
      <div className={styles.alphabetContainer}>
        {alphabet.map((letter) => (
          <button
            key={letter}
            className={`${styles.letter} ${
              selectedLetter === letter ? styles.activeLetter : ""
            }`}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className={styles.artistSection}>
        <BackButton />
        <h2 className={styles.letterHeader}>{selectedLetter}</h2>
        <div className={styles.artistList}>
          {artists[selectedLetter]?.map((artist, index) => (
            <div
              key={index}
              className={styles.artistName}
              onClick={() => navigate(`/artist/${artist.artist}`)}
            >
              {artist.artist}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Artist;
