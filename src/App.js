import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Experience from './pages/Experience';
import About from './pages/About';
import Design from './pages/Design';


const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/Design' element={<Design/>} />
          <Route path='/Experience' element={<Experience/>}/>
          <Route path='/About' element={<About/>} />
      </Routes>
    </div>
  );
};

export default App;
