import React from "react";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav class="navbar navbar-expand-xl bg-light navbar-light">
	  <Link class="navbar-brand" to='/'></Link> 
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
              <Link class="nav-link" to='/'>Currencies</Link> 
          </li>
          <li class="nav-item">
              <Link class="nav-link" to='/crypto'>Crypto</Link>
          </li>
		  <li class="nav-item">
              <Link class="nav-link" to='/commodities'>Commodities</Link>
          </li>
		  <li class="nav-item">
              <Link class="nav-link" to='/american'>American</Link>
          </li>
		  <li class="nav-item">
              <Link class="nav-link" to='/european'>European</Link>
          </li>
		  <li class="nav-item">
              <Link class="nav-link" to='/international'>International</Link>
          </li>
		  <li class="nav-item">
              <Link class="nav-link" to='/stocks'>Stocks</Link>
          </li>
		  <li class="nav-item">
              <Link class="nav-link" to='/ussectors'>US Sectors</Link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto d-none d-xl-block">
          <button type="button" class="btn btn-outline-info mr-2">
            <i class="fa fa-heart-o mr-1" /> Signup
          </button>
          <button type="button" class="btn btn-outline-info">
            <i class="fa fa-sign-in mr-1" /> Login
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Header;