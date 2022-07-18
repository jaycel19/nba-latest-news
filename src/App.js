import React from 'react';

import News from './pages/News';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Standings from './pages/Standings';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<News />} />
                    <Route path="/standings" element={<Standings />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;