import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Membership from './components/Membership';
import About from './components/About';
import Contact from './components/Contact';
import Reservations from './components/Reservations';
import Chat from './components/Chat';
import Tournaments from './components/Tournaments';
import CoachingResources from './components/CoachingResources';
import Community from './components/Community';
import Login from './modules/Login';
import Signup from './modules/Signup';
//import Checkout from './modules/Checkout';
//import Orders from './modules/Orders';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
//import CategoryProducts from './modules/CategoryProducts';
//import Cart from './modules/Cart';
import { MyGlobalContext } from './utils/context';
import { getUser } from './utils/utilites';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    getUser().then(({data}) => { 
      console.log(data.user);
      setUser(data.user);
      setLoading(false)
    });
  }, [])

  if(loading === true) {
    return null;
  }
  return (
    <MyGlobalContext.Provider value={{ user, setUser }}>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/membership" element={<Membership/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/coachingresources" element={<CoachingResources/>} />
          <Route path="/reservations" element={<Reservations/>} />
          <Route path="/tournaments" element={<Tournaments/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
        <Footer/>
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;
