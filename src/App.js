// App.js
import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Original from "./pages/Original.js";
import FAQ from "./pages/FAQ.js";
import Login from "./pages/Login.js";
import SearchResults from "./pages/SearchResults.js";
import Search from "./pages/Search.js";
import FindAccount from "./pages/FindAccount.js";
import FindAccountResult from "./pages/FindAccountResult.js";
import Signup from "./pages/Signup.js";
import MyPage from "./pages/Mypage.js";
import Checkout from "./pages/Checkout.js";
import Ordercheckout from "./pages/Ordercheckout.js";
import Paymentresult from "./pages/Paymentresult.js";
import Signature from "./pages/Signature.js";
import Artist from "./pages/Artist.js";
import ArtistDetail from "./pages/ArtistDetail.js";
import Business from "./pages/Business.js";
import Review from "./pages/Review.js";
import Promotion from "./pages/Promotion.js";
import PromotionDetail from "./pages/PromotionDetail.js";
import TermsOfService from "./pages/Termsofservice.js";
import { LanguageProvider } from "./components/LanguageContext.js";
import { UserProvider, useUser } from "./components/UserContext.js";

function App() {
  return (
    <UserProvider>
      <LanguageProvider>
        <Router>
          <div className="App">
            <Header />
            <RoutesWrapper />
          </div>
        </Router>
      </LanguageProvider>
    </UserProvider>
  );
}

function RoutesWrapper() {
  const [selectedSection, setSelectedSection] = useState("main");
  const { user, setUser } = useUser();
  const isLoggedIn = Boolean(user);

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
        <Route path="/login" element={<Login onLogin={setUser} />} />
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
          element={isLoggedIn ? <Checkout /> : <Login onLogin={setUser} />}
        />
        <Route
          path="/ordercheckout"
          element={isLoggedIn ? <Ordercheckout /> : <Login onLogin={setUser} />}
        />
        <Route
          path="/paymentresult"
          element={isLoggedIn ? <Paymentresult /> : <Login onLogin={setUser} />}
        />
        <Route path="/Termsofservice" element={<TermsOfService />} />
      </Routes>
      {!isSearchPage && <Footer />}
    </>
  );
}

export default App;
