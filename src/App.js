import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Original from "./pages/Original";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";
import Search from "./pages/Search";
import FindAccount from "./pages/FindAccount";
import FindAccountResult from "./pages/FindAccountResult";
import Signup from "./pages/Signup";
import MyPage from "./pages/Mypage";
import Checkout from "./pages/Checkout";
import Ordercheckout from "./pages/Ordercheckout";
import Paymentresult from "./pages/Paymentresult";
import Signature from "./pages/Signature";
import Artist from "./pages/Artist";
import ArtistDetail from "./pages/ArtistDetail";
import Business from "./pages/Business";
import Review from "./pages/Review";
import Promotion from "./pages/Promotion";
import PromotionDetail from "./pages/PromotionDetail";
import TermsOfService from "./pages/Termsofservice";
import { LanguageProvider } from "./components/LanguageContext";
import { getAccessToken, setAccessToken } from "./components/apiClient";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    async function fetchToken() {
      try {
        const token = await getAccessToken();
        setAccessToken(token);
        console.log("Access Token:", token);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    }

    fetchToken();
  }, []);
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("access_token", "your_access_token_here");
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <RoutesWrapper
            isLoggedIn={isLoggedIn}
            onLogin={handleLogin}
            onLogout={handleLogout}
          />
        </div>
      </Router>
    </LanguageProvider>
  );
}

function RoutesWrapper({ isLoggedIn, onLogin, onLogout }) {
  const [selectedSection, setSelectedSection] = useState("main");

  const isSearchPage = window.location.hash.startsWith("/search");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/promotion/:id" element={<PromotionDetail />} />
        <Route path="/signature/*" element={<Signature />} />
        <Route path="/original" element={<Original />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/artist/:artistName" element={<ArtistDetail />} />
        <Route path="/business" element={<Business />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/findaccount" element={<FindAccount />} />
        <Route
          path="/find-account-result-id"
          element={<FindAccountResult type="id" />}
        />
        <Route
          path="/find-account-result-pw"
          element={<FindAccountResult type="pw" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/mypage"
          element={
            <MyPage
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          }
        />
        <Route
          path="/checkout"
          element={isLoggedIn ? <Checkout /> : <Login onLogin={onLogin} />}
        />
        <Route
          path="/ordercheckout"
          element={isLoggedIn ? <Ordercheckout /> : <Login onLogin={onLogin} />}
        />
        <Route
          path="/paymentresult"
          element={isLoggedIn ? <Paymentresult /> : <Login onLogin={onLogin} />}
        />
        <Route path="/Termsofservice" element={<TermsOfService />} />
      </Routes>
      {!isSearchPage && <Footer />}
    </>
  );
}

export default App;
