import React from 'react';
import { Routes, Route } from 'react-router';

import Home from './pages/Home/Home'
import MonthStatistics from './pages/MonthStatistics/MonthStatistics'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/month-statistics' element={<MonthStatistics/>}/>
      </Routes>
    </div>
  );
}

export default App;
