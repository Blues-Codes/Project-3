import {Routes, Route} from 'react-router-dom'
import { ReactDOM } from 'react';
import './App.css';
import axios from 'axios';

import Navbar from './components/Navbar';
import About from './pages/About';
import Login from './pages/AdultLogin';
import AllGames from './components/AllGames';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />

          <Routes>

          <Route path ='/' element ={<Home />} />
          <Route path = "/about" element = {<About />}/>
          <Route path = '/signup' element = {<Signup />}/>
          <Route path = '/login' element ={ <Login /> }/>
          <Route path = '/allgames/:id' element ={<AllGames />} />


          </Routes>
      
    </div>
  );
}

export default App;
