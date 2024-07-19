import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home.jsx';
import DisplayNumber from './componentes/DisplayNumber.jsx';
import DisplayWord from './componentes/DisplayWord.jsx';
import DisplayStyledWord from './componentes/DisplayStyledWord.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/:num" element={<DisplayNumber />} />
                <Route path="/:word" element={<DisplayWord />} />
                <Route path="/:word/:textColor/:bgColor" element={<DisplayStyledWord />} />
            </Routes>
        </Router>
    );
}

export default App;
