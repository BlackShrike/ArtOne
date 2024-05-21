import React from 'react';
import {  Routes, Route,BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Promotion from './components/Promotion';
import FAQ from './components/FAQ';

function App() {
    return (
          <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/promotion" element={<Promotion />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/" element={<Promotion />} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;