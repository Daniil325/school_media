import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AboutPage } from './pages/About/About';
import { Main } from './pages/Main/Main';
import { Header } from './components/Header/Header';
import { Footer } from './components/common/Footer';

const AppRoutes = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Router>
                    <Routes>
                        <Route path="/" element={<Main />} />
                    </Routes>
                </Router>
            </main>
            <Footer />
        </>
    );
};

export default AppRoutes;
