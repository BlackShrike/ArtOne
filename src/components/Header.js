import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/Header.module.css";

function Header({ isLoggedIn, onLogout }) {
  const [showSignatureMenu, setShowSignatureMenu] = useState(false);
  const [showOriginalMenu, setShowOriginalMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      navigate(`/search-results?query=${searchTerm}`);
    }
  };
  return (
    <header className={styles.header}>
      <section className={styles.headerTop}>
        <h1>ARTKO</h1>
        <input
          className={styles.searchInput}
          placeholder="아티스트, 장르, 스타일, 테마 등을 입력해보세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch} // onKeyPress를 onKeyDown으로 변경
        />
        <nav className={styles.headerLinks}>
          {isLoggedIn ? (
            <>
              <span>
                <Link to="/mypage">마이페이지</Link>
              </span>
              <span onClick={onLogout} className={styles.logoutButton}>
                로그아웃
              </span>
            </>
          ) : (
            <span>
              <Link to="/Login">로그인</Link>
            </span>
          )}
          <span>
            <Link to="/SignUp">회원가입</Link>
          </span>
          <span>KR/EN</span>
        </nav>
      </section>
      <section className={styles.headerBottom}>
        <span>
          <Link to="/Promotion">프로모션</Link>
        </span>
        <span
          onMouseEnter={() => setShowSignatureMenu(true)}
          onMouseLeave={() => setShowSignatureMenu(false)}
        >
          <Link to="/Signature">시그니처</Link>
          {showSignatureMenu && (
            <div className={`${styles.dropdownMenu} ${styles.signatureMenu}`}>
              {[
                "전체",
                "인물",
                "풍경",
                "사진",
                "추상",
                "동양화",
                "성화",
                "식물",
                "동물",
                "드로잉",
                "포스터",
              ].map((item) => (
                <div className={styles.dropdownItem} key={item}>
                  <div className={styles.dropdownBox}></div>
                  <Link to={`/${item}`}>{item}</Link>
                </div>
              ))}
            </div>
          )}
        </span>
        <span
          onMouseEnter={() => setShowOriginalMenu(true)}
          onMouseLeave={() => setShowOriginalMenu(false)}
        >
          <Link to="/Original">오리지널</Link>
          {showOriginalMenu && (
            <div className={styles.dropdownMenu}>
              {["전체", "인물", "풍경", "추상"].map((item) => (
                <div className={styles.dropdownItem} key={item}>
                  <div className={styles.dropdownBox}></div>
                  <Link to={`/${item}`}>{item}</Link>
                </div>
              ))}
            </div>
          )}
        </span>
        <span className={styles.separator}>|</span>
        <Link to="/Artist"> 아티스트</Link>
        <span>비즈니스</span>
        <span>리뷰</span>
        <span>
          <Link to="/faq">FAQ</Link>
        </span>
      </section>
    </header>
  );
}

export default Header;
