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

    this.eventSource = new EventSource("http://sse");
  }

  componentDidMount() {
    this.eventSource.onmessage = event => {
      var price = JSON.parse(event.data);
      // console.log(price); //Array of 365 random numbers
      var someProperty = { ...this.state.chartData };

      someProperty.chart.values = price;

      this.setState({ someProperty });
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
                <Cumulative chartData={this.state.chartData} />
                <Pattern chartData={this.state.chartData} />
                <Table />
              </div>
            </div>
            <Sidebar chartData={this.state.chartData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
