import React from "react";
import Logo from "../../assets/logo.png"
import Button from "../button";
import './NavBar.css';
import FilmesPage from "../pages/filmes";
import SeriesPage from "../pages/series";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function NavBar({ black }) {


    return (

        <header className={black ? 'black' : ''}>

            <div className="header--logo">

                <Link exact to='/'> <img className="logo" src={Logo} /> </Link>

                <Link exact to='/'> <Button type="primary" className="button">Inicio</Button> </Link>

                <Link exact to='/cadastro'> <Button className="button">Cadastro</Button> </Link>

                <Link to='/filme'> <Button type="second" className="button">  Filmes </Button> </Link>

                <Link to= '/serie'> <Button type="second" className="button"> Series </Button> </Link>



            </div>



            <div className="header--user">
                <img className="user" src="https://occ-0-5090-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUk3d-nqcHcdXN1aLWvsvdpnw80oNDcq5FpVRhW0ENBobUIMNx_KbHJEYks2ASMRrXk03on3WAatwvJF1Vmg6vEaJFP5.png?r=d0a" width="40" />

            </div>
        </header>


    )
}

export default NavBar;