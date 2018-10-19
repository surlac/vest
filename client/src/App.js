import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Cumulative from "./Cumulative";
import Sidebar from "./Sidebar";
import Pattern from "./Pattern";
import Table from "./Table";
import Chart from "./Chart";
import Control from "./Control";
import Search from "./Search";
import Title from "./Title";
import { getInitialPriceData } from "./DataProvider";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: getInitialPriceData()
    };
  }

  render() {
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-9">
              <div class="row">
                <Title />
                <Search />
                <Control />
                <div class="col-12 mini-padding">
                  <div class="card">
                    <div class="card-body">
                      <Chart chartData={this.state.chartData} />
                    </div>
                  </div>
                </div>
                <Cumulative />
                <Pattern />
                <Table />
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
