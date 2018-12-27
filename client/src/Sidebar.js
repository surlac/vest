import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";

class Sidebar extends Component {
  render() {
    return (
      <div class="col-12 col-lg-3">
        <div class="row">
          <div class="col-12 mini-padding">
            <div class="card">
              <div class="card-body">
                <div class="row justify-content-center">
                  <span class="btn btn-info pattern-filter">10 Dec</span>
                  <span class="date-separator">-</span>
                  <span class="btn btn-info pattern-filter">3 Mar</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mini-padding">
            <div class="card">
              <div class="card-body">
                <Doughnut
                  data={{
                    labels: this.props.labels,
                    datasets: [
                      {
                        label: "price",
                        data: [
                          3,
                          17
                          //this.state.chartData.chart.values[0],
                          //this.state.chartData.chart.values[2]
                        ],
                        backgroundColor: ["#C5CACD", "#0cabc2"],
                        borderWidth: 2,
                        borderColor: "white",
                        pointRadius: 0
                      }
                    ]
                  }}
                  options={{ legend: { display: false } }}
                />
              </div>
            </div>
          </div>
          <div class="col-12 mini-padding">
            <div class="card">
              <div class="card-body">
                <h4>Return</h4>
              </div>
            </div>
          </div>
          <div class="col-12 mini-padding">
            <div class="card">
              <div class="card-body">
                <h4>Profit</h4>
              </div>
            </div>
          </div>
          <div class="col-12 mini-padding">
            <div class="card">
              <div class="card-body">
                <h4>gains losses</h4>
              </div>
            </div>
          </div>
          <div class="col-12 mini-padding">
            <div class="card">
              <div class="card-body">
                <h4>miscellaneous</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.equityChartData;
const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
