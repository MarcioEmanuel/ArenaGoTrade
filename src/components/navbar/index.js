import React from "react";
import Logo from "../../assets/logo.png"
import Button from "../button";
import './NavBar.css';


function NavBar({ black }) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <img className="logo" src={Logo} />
                
                <Button type="primary" className="button">Inicio</Button>
                <Button type="second" className="button">Cadastro</Button>
                <Button type="second" className="button">Filmes</Button>
                <Button type="second" className="button">Series</Button>
            
            </div>

            <div className="header--user">
                <img className="user" src="https://occ-0-5090-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUk3d-nqcHcdXN1aLWvsvdpnw80oNDcq5FpVRhW0ENBobUIMNx_KbHJEYks2ASMRrXk03on3WAatwvJF1Vmg6vEaJFP5.png?r=d0a" width="40" />

            </div>
        </header>


    )
}

export default NavBar;