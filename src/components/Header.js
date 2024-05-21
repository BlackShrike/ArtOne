import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
    return (
        <header>
            <section className="header-top">
                <h1>ARTKO</h1>
                <input className='search-input' placeholder='아티스트, 장르, 스타일, 테마 등을 입력해보세요'/>
                <nav className="header-links">
                    <span><Link to="/login">로그인</Link></span>
                    <span><Link to="/signup">회원가입</Link></span>
                    <span>KR/EN</span>
                </nav>
            </section>
            <section className="header-bottom">
                <span><Link to="/promotion">프로모션</Link></span>
                <span>시그니처</span>
                <span>오리지널</span>
                <span className="separator">|</span>
                <span>아티스트</span>
                <span>비즈니스</span>
                <span>리뷰</span>
                <span><Link to="/faq">FAQ</Link></span>
            </section>
        </header>
    );
}

export default Header;