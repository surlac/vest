import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import "./sidebar.css";

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
                    labels: this.props.annualized_return,
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
              <div class="card-body">
							<div class="major">
								<div class="holder num-plus">
									<div class="larger">+58.91%</div>
									<div class="smaller">Annualized return</div>
								</div>
								<div class="holder num-plus">
									<div class="larger">70.00%</div>
									<div class="smaller">Winning trades</div>
								</div>
							</div>
              </div>
            </div>
          </div>
          <div class="col-12 mini-padding">
				<div class="card">
					<div class="card-body">
							<div class="heading">Return</div>
							<div class="major">
								<div class="holder num-plus">
									<div class="larger">43%</div>
									<div class="smaller">Annualized return</div>
								</div>
								<div class="holder num-plus">
									<div class="larger">43%</div>
									<div class="smaller">Annualized / Rest</div>
								</div>
							</div>
							<div class="major">
								<div class="holder num-plus">
									<div class="larger">43%</div>
									<div class="smaller">Average return</div>
								</div>
								<div class="holder num-plus">
									<div class="larger">43%</div>
									<div class="smaller">Median return</div>
								</div>
							</div>
					</div>
				</div>
          </div>
		  <div class="col-12 mini-padding">
				<div class="card">
					<div class="card-body">
							<div class="heading">Profit</div>
							<div class="major">
								<div class="holder num-plus">
									<div class="larger">43%</div>
									<div class="smaller">Total profit</div>
								</div>
								<div class="holder num-plus">
									<div class="larger">43%</div>
									<div class="smaller">Average profit</div>
								</div>
							</div>
					</div>
				</div>
          </div>
		  <div class="col-12 mini-padding">
				<div class="card">
					<div class="card-body">
							<div class="heading">Gains - Losses</div>
							<div class="major">
								<div class="holder num-plus">
									<div class="larger">6</div>
									<div class="smaller">Gains</div>
								</div>
								<div class="holder num-minus">
									<div class="larger">4</div>
									<div class="smaller">Losses</div>
								</div>
							</div>
							<div class="major">
								<div class="holder num-plus">
									<div class="larger">+8.51%</div>
									<div class="smaller">Profit</div>
								</div>
								<div class="holder num-minus">
									<div class="larger">-2.99%</div>
									<div class="smaller">Profit</div>
								</div>
							</div>
							<div class="major">
								<div class="holder num-plus">
									<div class="larger">+20.86%</div>
									<div class="smaller">Max.profit</div>
								</div>
								<div class="holder num-minus">
									<div class="larger">-4.64%</div>
									<div class="smaller">Max.loss</div>
								</div>
							</div>
					</div>
				</div>
          </div>
		  <div class="col-12 mini-padding">
				<div class="card">
					<div class="card-body num-grey">
							<div class="heading">Miscellaneous</div>
							<div class="major">
								<div class="holder">
									<div class="larger">10</div>
									<div class="smaller">Trades</div>
								</div>
								<div class="holder">
									<div class="larger">1 loss</div>
									<div class="smaller">Current streak</div>
								</div>
							</div>
							<div class="major">
								<div class="holder">
									<div class="larger">40%</div>
									<div class="smaller">Trading days</div>
								</div>
								<div class="holder">
									<div class="larger">56%</div>
									<div class="smaller">Calendar days</div>
								</div>
							</div>
							<div class="major">
								<div class="holder">
									<div class="larger">60,00%</div>
									<div class="smaller">Winning trades</div>
								</div>
								<div class="holder">
									<div class="larger">8,03%</div>
									<div class="smaller">Standard deviation</div>
								</div>
							</div>
					</div>
				</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.stats;
const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
