import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from './components/Search';
import PlayVideo from "./components/PlayVideo";
import { useAuth } from './context/AuthProvider';
import Loading from './loader/Loading';


function App() {
  const {loading}=useAuth()
  

  return (
    <div>
      {loading && <Loading/>}
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayVideo />} />
      </Routes>
      
    </div>
  );
}

export default App