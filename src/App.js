import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainPart from './pages/Main';

function App() {
  return (
    <div>
      <Home>
        <Routes>
          <Route path="/" element={<MainPart />} />
        </Routes>
      </Home>
    </div>
  );
}

export default App;
