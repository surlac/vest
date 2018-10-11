import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

const App = props => {
  return (
    <div>
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

      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-9">
            <div class="row">
              <div class="col-12 col-md-7 mini-padding">
                <div class="card">
                  <div class="card-body">silver</div>
                </div>
              </div>
              <div class="col-12 col-md-5 mini-padding">
                <div class="card">
                  <div class="card-body">search</div>
                </div>
              </div>
              <div class="col-12 mini-padding">
                <div class="card">
                  <div class="card-body">buttons</div>
                </div>
              </div>
              <div class="col-12 mini-padding">
                <div class="card">
                  <div class="card-body">canvas</div>
                </div>
              </div>
              <div class="col-12 col-lg-6 mini-padding">
                <div class="card">
                  <div class="card-body">cumulative</div>
                </div>
              </div>
              <div class="col-12 col-lg-6 mini-padding">
                <div class="card">
                  <div class="card-body">patterns</div>
                </div>
              </div>
              <div class="col-12 mini-padding">
                <div class="card">
                  <div class="card-body">list drop</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <div class="row">
              <div class="col-12 mini-padding">
                <div class="card">
                  <div class="card-body">date picker</div>
                </div>
              </div>
              <div class="col-12 mini-padding">
                <div class="card">
                  <div class="card-body">diagram</div>
                </div>
              </div>
              <div class="col-12 mini-padding">
                <div class="card">
                  <div class="card-body">return</div>
                </div>
              </div>
              <div class="col-12 mini-padding">
                <div class="card">
                  <div class="card-body">profit</div>
                </div>
              </div>
              <div class="col-12 mini-padding">
                <div class="card">
                  <div class="card-body">gains losses</div>
                </div>
              </div>
              <div class="col-12 mini-padding">
                <div class="card">
                  <div class="card-body">miscellaneous</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
