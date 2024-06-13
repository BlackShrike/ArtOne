import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import SignatureDetail from "./pages/SignatureDetail";
import Artist from "./pages/Artist";
import ArtistDetail from "./pages/ArtistDetail";
import Business from "./pages/Business";
import Review from "./pages/Review";
import Promotion from "./pages/Promotion";
import PromotionDetail from "./pages/PromotionDetail";
import TermsOfService from "./pages/Termsofservice";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/promotion/:id" element={<PromotionDetail />} />
          <Route path="/signature" element={<Signature />} />
          <Route path="/signature/:id" element={<SignatureDetail />} />
          <Route path="/original" element={<Original />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/artist/:artistName" element={<ArtistDetail />} />
          <Route path="/business" element={<Business />} />
          <Route path="/review" element={<Review />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
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
          <Route path="/mypage" element={<MyPage />} />
          <Route
            path="/checkout"
            element={
              isLoggedIn ? <Checkout /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/ordercheckout"
            element={
              isLoggedIn ? <Ordercheckout /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/paymentresult"
            element={
              isLoggedIn ? <Paymentresult /> : <Login onLogin={handleLogin} />
            }
          />
          <Route path="/Termsofservice" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
