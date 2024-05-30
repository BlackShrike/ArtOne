import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Artist.module.css"; // Ensure this path is correct based on your project structure
import BackButton from "../components/BackButton";

const artists = {
  ㄱ: ["가나다", "고미술", "고아라", "구본창", "김갑수"],
  ㄴ: ["나나나", "노상우", "노희경", "남궁연", "남기환"],
  ㄷ: ["다다다", "도종환", "도민준", "도경수", "도라지"],
  ㄹ: ["라라라", "로제", "로이킴", "류현진", "류승범"],
  ㅁ: ["마마마", "문재인", "문정인", "문희준", "문근영"],
  ㅂ: ["바바바", "백지영", "백예린", "백승찬", "백종원"],
  ㅅ: ["사사사", "손흥민", "손예진", "송중기", "송강호"],
  ㅇ: ["아아아", "안중근", "안정환", "안철수", "안현수"],
  ㅈ: ["자자자", "정우성", "정용화", "정재형", "정우"],
  ㅊ: ["차차차", "차승원", "차은우", "차범근", "차주혁"],
  ㅋ: ["카카카", "케이윌", "케이", "케빈오", "코난"],
  ㅌ: ["타타타", "타블로", "타이거JK", "타일러", "타케다"],
  ㅍ: ["파파파", "팝핀현준", "팽현숙", "편승엽", "피오"],
  ㅎ: ["하하하", "한석규", "한예슬", "한지민", "한효주"],
  A: ["Aaron", "Abigail", "Adam", "Adele", "Adrian"],
  B: ["Barbara", "Barry", "Beatrice", "Ben", "Benjamin"],
  C: ["Caitlyn", "Caleb", "Calvin", "Cameron", "Carl"],
  D: ["Daisy", "Dan", "Daniel", "David", "Dennis"],
  E: ["Earl", "Edith", "Edward", "Eleanor", "Elijah"],
  F: ["Faith", "Felicity", "Felix", "Fiona", "Florence"],
  G: ["Gabriel", "Gareth", "Garrett", "Gavin", "Gene"],
  H: ["Hannah", "Harold", "Harry", "Hazel", "Henry"],
  I: ["Ian", "Irene", "Isaac", "Isabel", "Isabella"],
  J: ["Jack", "Jacob", "James", "Jane", "Jasmine"],
  K: ["Karen", "Kate", "Keith", "Kelly", "Kevin"],
  L: ["Lara", "Larry", "Laura", "Lauren", "Leah"],
  M: ["Mabel", "Maggie", "Malcolm", "Marcus", "Margaret"],
  N: ["Nancy", "Nathan", "Neil", "Nicholas", "Nina"],
  O: ["Olive", "Oliver", "Olivia", "Omar", "Ophelia"],
  P: ["Pamela", "Patricia", "Patrick", "Paul", "Paula"],
  Q: ["Quincy", "Quinn", "Quentin", "Queen", "Quintin"],
  R: ["Rachel", "Ralph", "Ray", "Rebecca", "Reed"],
  S: ["Sabrina", "Sam", "Samantha", "Samuel", "Sandra"],
  T: ["Tabitha", "Taylor", "Ted", "Teresa", "Thomas"],
  U: ["Ulysses", "Uma", "Umar", "Una", "Uriah"],
  V: ["Valerie", "Vanessa", "Vera", "Veronica", "Victor"],
  W: ["Walter", "Wanda", "Wayne", "Wendy", "Will"],
  X: ["Xander", "Xavier", "Xena", "Xenia", "Xerxes"],
  Y: ["Yasmine", "Yvonne", "Yvette", "Yves", "Yvette"],
  Z: ["Zachary", "Zane", "Zara", "Zelda", "Zoey"],
};

function Artist() {
  return (
    <div className={styles.artistContainer}>
      <BackButton />
      <div className={styles.alphabetContainer}>
        {Object.keys(artists).map((letter) => (
          <a key={letter} href={`#${letter}`} className={styles.letter}>
            {letter}
          </a>
        ))}
      </div>
      {Object.keys(artists).map((letter) => (
        <div key={letter} id={letter} className={styles.artistSection}>
          <h2 className={styles.letterHeader}>{letter}</h2>
          <div className={styles.artistList}>
            {artists[letter].map((artist, index) => (
              <Link
                key={index}
                to={`/artistdetail`}
                className={styles.artistName}
              >
                {artist}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Artist;
