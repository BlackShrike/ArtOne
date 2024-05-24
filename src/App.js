import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Promotion from "./components/Promotion";
import Original from "./components/Original";
import FAQ from "./components/FAQ";
import MorePromotion from "./components/MorePromotion";
import Login from "./components/Login";
import SearchResults from "./components/SearchResults";
import FindAccount from "./components/FindAccount";
import FindAccountResult from "./components/FindAccountResult";
import Signup from "./components/Singup";
import MyPage from "./components/Mypage";
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
          <Route path="/Original" element={<Original />} />
          <Route path="/Login" element={<Login />} />
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
          <Route path="/" element={<Promotion />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
