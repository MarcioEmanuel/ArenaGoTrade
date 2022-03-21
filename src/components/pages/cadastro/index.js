import React, { useEffect, useState } from 'react';
import NavBar from '../../navbar';
import './cadastro.css';



function Cadastro() {

  const [movieList, setMovieList] = useState([]);
  const [blackHeader, setBlackHeader] = useState(true);

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

    <div className="Cadastro">

      <NavBar black={blackHeader} />

      <div className="CadastroFilmes">
          <ul className='UlCadastro'>
            <li>Titulo<br></br><input type="text" placeholder="Titulo do Filme"/></li>
            <li>Lançamento<br></br><input type="date" placeholder="Data de Lançamento"/></li>
            <li>Sinopse<br></br><input className='Sinopse' type="text" maxlength="300" placeholder="Sinopse"/></li>
            <li>Autor<br></br><input type="text" placeholder="Autor"/></li>
            <li><button className='ButtonCadastro' type="submit">Cadastrar</button></li>
          </ul>
      </div>

      <footer className="CadastroFooter">
        Projeto feito para o processo seletivo da ArenaGoTrade<br></br>
        Direitos de Imagem para Netflix<br></br>
        Dados pegos do site Themoviedb.org
      </footer>

    </div>
  );
}

export default Cadastro;
