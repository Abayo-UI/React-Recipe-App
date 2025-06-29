import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import DetailsPage from './Pages/DetailsPage';
import NotFound from './Components/NotFound';

function App() {

  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/recipe-Item/:id" element={<DetailsPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
  )
}

export default App
