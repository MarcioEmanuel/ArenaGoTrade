import React, { useEffect, useState } from 'react';
import NavBar from '../../navbar';
import MovieRow from '../../movieRow';
import './series.css'
import TmbdSeries from '../../api/TmbsSeries'


function SeriesPage() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadall = async () => {
      //Lista de Filmes
      let list = await TmbdSeries.getHomeList3();
      setMovieList(list);
    }

    loadall();
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (

    <div className="Filmes">

      <NavBar black={blackHeader} />

      <section className="listas">
        {movieList.map((item, key) => (<MovieRow key={key} title={item.title} items={item.items} />))}
      </section>

      <footer>
        Projeto feito para o processo seletivo da ArenaGoTrade<br></br>
        Direitos de Imagem para Netflix<br></br>
        Dados pegos do site Themoviedb.org
      </footer>

    </div>
  );
}

export default SeriesPage;
