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

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
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
                      <Chart
                        chartData={this.state.chartData}
                        location="Massachusetts"
                        legendPosition="bottom"
                      />
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
