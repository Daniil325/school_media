import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AboutPage } from './pages/About/About';
import { Main } from './pages/Main/Main';
import { Header } from './components/Header/Header';
import { Footer } from './components/common/Footer';
import { Events } from './pages/Events/Events';
import { Mediacenters } from './pages/Mediacenters/Mediacenters';
import { Register } from './pages/Register/Register';

const AppRoutes = () => {
    return (
        <>
            
            
                <Router>
                    <Header />
                    <main className="main">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/mediacenters" element={<Mediacenters />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                     </main>
                </Router>
           
            <Footer />
        </>
    );
};

export default AppRoutes;
