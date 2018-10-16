import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-xl bg-light navbar-light">
      <a class="navbar-brand" href="index.htm" />
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
            <a class="nav-link" href="#">
              Currencies
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Crypto
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Commodities
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              American
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              European
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              International
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Stocks
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              US Sectors
            </a>
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
