import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cusnavbar.css'
import games from'../../../Assets/cartoon-soccer-player-running-with-ball-vector-illustration-orange-background_1142-87845.avif'
function Cusnavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " id='navbar'>
      <span className="navbar-brand" href="#">Green Gr<img src={games}/>d</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              User
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Cusnavbar;
