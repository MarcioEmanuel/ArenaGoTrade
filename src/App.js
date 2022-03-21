import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilmesPage from './components/pages/filmes';
import SeriesPage from './components/pages/series';
import Home from './components/pages/home';
import Cadastro from './components/pages/cadastro';



function App() {

  return (


    <BrowserRouter>
    <Routes>
      <Route path ="/" element= {<Home/>}/>
      <Route path = "/cadastro" element={<Cadastro/>}/>
      <Route path ="/filme" element= {<FilmesPage/>}/>
      <Route path = "/serie" element= {<SeriesPage />}/>
    </Routes>
  </BrowserRouter>


  );
}

export default App;
