import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Design from './pages/Design';
import CASMM from './pages/CASMM';
import MentalHealthApp from './pages/MHA';
import Choices from './pages/Choices';



const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/Design' element={<Design/>} />
          <Route exact path='/About' element={<About/>} />
          <Route exact path='/CASMM' element={<CASMM/>} />
          <Route exact path='/Choices' element={<Choices/>} />
          <Route exact path='/MentalHealthApp' element={<MentalHealthApp/>} />
      </Routes>
    </div>
  );
};

export default App;
