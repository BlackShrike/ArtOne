import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../css/Artist.module.css"; // Ensure this path is correct based on your project structure
import BackButton from "../components/BackButton";

const artists = {
  ㄱ: [
    "가나다",
    "고미술",
    "고아라",
    "구본창",
    "김갑수",
    "김기덕",
    "김동률",
    "김범수",
    "김윤아",
    "김태희",
  ],
  ㄴ: [
    "나나나",
    "노상우",
    "노희경",
    "남궁연",
    "남기환",
    "남경읍",
    "남상미",
    "남진",
    "남궁민",
    "남주혁",
  ],
  ㄷ: [
    "다다다",
    "도종환",
    "도민준",
    "도경수",
    "도라지",
    "도지원",
    "도진우",
    "도희",
    "도원경",
    "도영",
  ],
  ㄹ: [
    "라라라",
    "로제",
    "로이킴",
    "류현진",
    "류승범",
    "류덕환",
    "류수영",
    "류이호",
    "류준열",
    "류진",
  ],
  ㅁ: [
    "마마마",
    "문재인",
    "문정인",
    "문희준",
    "문근영",
    "문소리",
    "문세윤",
    "문채원",
    "문성근",
    "문지애",
  ],
  ㅂ: [
    "바바바",
    "백지영",
    "백예린",
    "백승찬",
    "백종원",
    "백진희",
    "백현",
    "백성현",
    "백아연",
    "백진주",
  ],
  ㅅ: [
    "사사사",
    "손흥민",
    "손예진",
    "송중기",
    "송강호",
    "송혜교",
    "송민호",
    "송재림",
    "송윤아",
    "송일국",
  ],
  ㅇ: [
    "아아아",
    "안중근",
    "안정환",
    "안철수",
    "안현수",
    "안재욱",
    "안효섭",
    "안영미",
    "안문숙",
    "안서현",
  ],
  ㅈ: [
    "자자자",
    "정우성",
    "정용화",
    "정재형",
    "정우",
    "정은지",
    "정준영",
    "정다빈",
    "정석원",
    "정지훈",
  ],
  ㅊ: [
    "차차차",
    "차승원",
    "차은우",
    "차범근",
    "차주혁",
    "차태현",
    "차기준",
    "차선우",
    "차예련",
    "차주혁",
  ],
  ㅋ: [
    "카카카",
    "케이윌",
    "케이",
    "케빈오",
    "코난",
    "코드쿤스트",
    "코비",
    "코시",
    "코알라",
    "코메디",
  ],
  ㅌ: [
    "타타타",
    "타블로",
    "타이거JK",
    "타일러",
    "타케다",
    "타미",
    "타쿠야",
    "타하라",
    "타라",
    "타이탄",
  ],
  ㅍ: [
    "파파파",
    "팝핀현준",
    "팽현숙",
    "편승엽",
    "피오",
    "피에스타",
    "피터팬",
    "피노키오",
    "피카소",
    "피오나",
  ],
  ㅎ: [
    "하하하",
    "한석규",
    "한예슬",
    "한지민",
    "한효주",
    "한가인",
    "한상진",
    "한지혜",
    "한채영",
    "한혜진",
  ],
  A: [
    "Aaron",
    "Abigail",
    "Adam",
    "Adele",
    "Adrian",
    "Aidan",
    "Aimee",
    "Alan",
    "Albert",
    "Alexa",
  ],
  B: [
    "Barbara",
    "Barry",
    "Beatrice",
    "Ben",
    "Benjamin",
    "Benny",
    "Bernard",
    "Beth",
    "Betty",
    "Bianca",
  ],
  C: [
    "Caitlyn",
    "Caleb",
    "Calvin",
    "Cameron",
    "Carl",
    "Carla",
    "Carmen",
    "Carol",
    "Caroline",
    "Casey",
  ],
  D: [
    "Daisy",
    "Dan",
    "Daniel",
    "David",
    "Dennis",
    "Derek",
    "Diana",
    "Diane",
    "Dominic",
    "Doris",
  ],
  E: [
    "Earl",
    "Edith",
    "Edward",
    "Eleanor",
    "Elijah",
    "Ella",
    "Elliot",
    "Elsa",
    "Emerson",
    "Emma",
  ],
  F: [
    "Faith",
    "Felicity",
    "Felix",
    "Fiona",
    "Florence",
    "Ford",
    "Frances",
    "Frank",
    "Freddie",
    "Fritz",
  ],
  G: [
    "Gabriel",
    "Gareth",
    "Garrett",
    "Gavin",
    "Gene",
    "George",
    "Georgia",
    "Gerald",
    "Gillian",
    "Grace",
  ],
  H: [
    "Hannah",
    "Harold",
    "Harry",
    "Hazel",
    "Henry",
    "Herbert",
    "Herman",
    "Holly",
    "Howard",
    "Hugh",
  ],
  I: [
    "Ian",
    "Irene",
    "Isaac",
    "Isabel",
    "Isabella",
    "Isaiah",
    "Isla",
    "Ivan",
    "Ivy",
    "Izzie",
  ],
  J: [
    "Jack",
    "Jacob",
    "James",
    "Jane",
    "Jasmine",
    "Jason",
    "Jasper",
    "Jean",
    "Jeff",
    "Jenna",
  ],
  K: [
    "Karen",
    "Kate",
    "Keith",
    "Kelly",
    "Kevin",
    "Kim",
    "Kira",
    "Kirk",
    "Kris",
    "Kyle",
  ],
  L: [
    "Lara",
    "Larry",
    "Laura",
    "Lauren",
    "Leah",
    "Leo",
    "Leslie",
    "Liam",
    "Lila",
    "Lillian",
  ],
  M: [
    "Mabel",
    "Maggie",
    "Malcolm",
    "Marcus",
    "Margaret",
    "Maria",
    "Marie",
    "Marlon",
    "Martha",
    "Martin",
  ],
  N: [
    "Nancy",
    "Nathan",
    "Neil",
    "Nicholas",
    "Nina",
    "Noah",
    "Nolan",
    "Nora",
    "Norman",
    "Nyla",
  ],
  O: [
    "Olive",
    "Oliver",
    "Olivia",
    "Omar",
    "Ophelia",
    "Oscar",
    "Owen",
    "Ozzy",
    "Oriana",
    "Orson",
  ],
  P: [
    "Pamela",
    "Patricia",
    "Patrick",
    "Paul",
    "Paula",
    "Pearl",
    "Peggy",
    "Penny",
    "Peter",
    "Phoebe",
  ],
  Q: [
    "Quincy",
    "Quinn",
    "Quentin",
    "Queen",
    "Quintin",
    "Quill",
    "Quinton",
    "Quora",
    "Quade",
    "Queenie",
  ],
  R: [
    "Rachel",
    "Ralph",
    "Ray",
    "Rebecca",
    "Reed",
    "Regina",
    "Renee",
    "Rex",
    "Rhonda",
    "Richard",
  ],
  S: [
    "Sabrina",
    "Sam",
    "Samantha",
    "Samuel",
    "Sandra",
    "Sara",
    "Sebastian",
    "Selena",
    "Serena",
    "Shane",
  ],
  T: [
    "Tabitha",
    "Taylor",
    "Ted",
    "Teresa",
    "Thomas",
    "Tiffany",
    "Tim",
    "Tina",
    "Toby",
    "Tracy",
  ],
  U: [
    "Ulysses",
    "Uma",
    "Umar",
    "Una",
    "Uriah",
    "Ursula",
    "Usher",
    "Upton",
    "Ursula",
    "Uzi",
  ],
  V: [
    "Valerie",
    "Vanessa",
    "Vera",
    "Veronica",
    "Victor",
    "Vince",
    "Violet",
    "Vito",
    "Vivian",
    "Vlad",
  ],
  W: [
    "Walter",
    "Wanda",
    "Wayne",
    "Wendy",
    "Will",
    "Willow",
    "Wilma",
    "Winston",
    "Wolf",
    "Wyatt",
  ],
  X: [
    "Xander",
    "Xavier",
    "Xena",
    "Xenia",
    "Xerxes",
    "Ximena",
    "Xylon",
    "Xyla",
    "Xyra",
    "Xyron",
  ],
  Y: [
    "Yasmine",
    "Yvonne",
    "Yvette",
    "Yves",
    "Yvette",
    "Yuri",
    "Yara",
    "Yanni",
    "Yelena",
    "Yosef",
  ],
  Z: [
    "Zachary",
    "Zane",
    "Zara",
    "Zelda",
    "Zoey",
    "Zora",
    "Zane",
    "Ziva",
    "Zyra",
    "Zyaire",
  ],
};

function Artist() {
  const [selectedLetter, setSelectedLetter] = useState("ㄱ");

  return (
    <div className={styles.artistContainer}>
      <div className={styles.alphabetContainer}>
        {Object.keys(artists).map((letter) => (
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
      <BackButton />
      <div className={styles.artistSection}>
        <h2 className={styles.letterHeader}>{selectedLetter}</h2>
        <div className={styles.artistList}>
          {artists[selectedLetter].map((artist, index) => (
            <Link
              key={index}
              to={`/artist/${artist}`}
              className={styles.artistName}
            >
              {artist}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Artist;
