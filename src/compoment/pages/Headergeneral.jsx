import React from 'react';

let Headergeneral = () => {
   
 return(
<nav className="navbar navbar-expand-lg navbar-light container-fluid fixed-top">
<a className="navbar-brand" href="#">Cocody Fm <span>.</span></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-nav" aria-controls="menu-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
    
<div className="collapse navbar-collapse" id="menu-nav">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <a className="nav-link" href="#">Accueil</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Actualités</a>
        <ul className="nav-link_dropdown submenu">
            <li className="menu-item">
                <a href="#" className="menu-link">New d'ici et d'ailleur</a>
            </li>
            <li className="menu-item">
                <a href="#" className="menu-link">Events</a>
            </li>
        </ul>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">playlists</a>
        <ul className="nav-link_dropdown submenu">
            <li className="menu-item">
                <a href="#" className="menu-link">Playlist Aimsika</a>
            </li>
            <li className="menu-item">
                <a href="#" className="menu-link">Nos Artiste</a>
            </li>
        </ul>
    </li>
    <li className="nav-item"><a className="nav-link" href="#"> Showbizz</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Galeries</a>
        <ul className="nav-link_dropdown submenu">
            <li className="menu-item">
                <a href="#" className="menu-link">Radio</a>
            </li>
            <li className="menu-item">
                <a href="#" className="menu-link">Autres</a>
            </li>
        </ul>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">AimsikaTV</a>
    </li>
    <li className="nav-item">
            <a className="nav-link" href="#">Tchat</a>
    </li>
    </ul>
</div>
</nav>,

<header className="second-header"></header>

)
}


export default Headergeneral