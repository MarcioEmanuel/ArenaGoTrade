import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Tmdb from './components/api/Tmdb';
import MovieRow from './components/movieRow/index';
import FeaturedMovie from './components/featuredMovies/'


function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect (() => {
    const loadall = async () =>{
      //Lista de Filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Feature
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadall();
  }, [])

  useEffect(() =>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className="App">
       <NavBar black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key)=>(<MovieRow key={key} title={item.title} items={item.items} />))}
      </section>

      <footer>
        Projeto feito para o processo seletivo da ArenaGoTrade<br></br>
        Direitos de Imagem para Netflix<br></br>
        Dados pegos do site Themoviedb.org
      </footer>


      {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
      </div>}

      </div>
  );
}

export default App;
