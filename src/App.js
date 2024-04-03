import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Header } from './Header';
import { Service } from './Service';
import { Work } from './Work';
import { About } from './About';
import { Contact } from './Contact';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  // Initializing AOS
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Header></Header>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Service' element={<Service></Service>}></Route>
            <Route path='/Work' element={<Work></Work>}></Route>
            <Route path='/About' element={<About></About>}></Route>
            <Route path='/Contact' element={<Contact></Contact>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
