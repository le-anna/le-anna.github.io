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
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/portfolio' element={<Home />}/>
          <Route exact path='/Design' element={<Design/>} />
          <Route exact path='/Experience' element={<Experience/>}/>
          <Route exact path='/About' element={<About/>} />
      </Routes>
    </div>
  );
};

export default App;
