import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import FormPage from './components/FormPage/FormPage';
import FormMailPage from './components/FormMailPage/FormMailPage';
import SearchPage from './SearchPage';
import SearchPage2 from './SearchPage2';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/form-mail" element={<FormMailPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/search2" element={<SearchPage2 />} />
            </Routes>
        </Router>
    );
}

export default App;
