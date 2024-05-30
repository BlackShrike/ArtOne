import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Promotion from "./pages/Promotion";
import Original from "./pages/Original";
import FAQ from "./pages/FAQ";
import MorePromotion from "./pages/MorePromotion";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";
import FindAccount from "./pages/FindAccount";
import FindAccountResult from "./pages/FindAccountResult";
import Signup from "./pages/Singup";
import MyPage from "./pages/Mypage";
import Checkout from "./pages/Checkout";
import Ordercheckout from "./pages/Ordercheckout";
import Paymentresult from "./pages/Paymentresult";
import Signature from "./pages/Signature";
import Artist from "./pages/Artist";
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
          <Route path="/Promotion" element={<Promotion />} />
          <Route path="/Signature" element={<Signature />} />
          <Route path="/Original" element={<Original />} />
          <Route path="/Artist" element={<Artist />} />
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/MorePromotion" element={<MorePromotion />} />
          <Route path="/Search-Results" element={<SearchResults />} />
          <Route path="/FindAccount" element={<FindAccount />} />
          <Route
            path="/find-account-result-id"
            element={<FindAccountResult type="id" />}
          />
          <Route
            path="/find-account-result-pw"
            element={<FindAccountResult type="pw" />}
          />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Mypage" element={<MyPage />} />
          <Route
            path="/Checkout"
            element={
              isLoggedIn ? <Checkout /> : <Login onLogin={handleLogin} />
            }
          />
          <Route path="/" element={<Promotion />} />
          <Route
            path="/Ordercheckout"
            element={
              isLoggedIn ? <Ordercheckout /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/Paymentresult"
            element={
              isLoggedIn ? <Paymentresult /> : <Login onLogin={handleLogin} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
