import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import "./sidebar.css";

class Sidebar extends Component {
  render() {
	var { values } = this.props.repos;
    return (
      <div className="col-12 col-lg-3">
        <div className="row">
          <div className="col-12 mini-padding">
            <div className="card">
              <div className="card-body">
                <div className="row justify-content-center">
                  <span className="btn btn-info pattern-filter">10 Dec</span>
                  <span className="date-separator">-</span>
                  <span className="btn btn-info pattern-filter">3 Mar</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mini-padding">
            <div className="card">
              <div className="card-body">
                <Doughnut
                  data={{
                    labels: "",
                    datasets: [
                      {
                        label: "price",
                        data: [values[0], values[values.length - 1] ],
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
              <div className="card-body">
							<div className="major">
								<div className="holder num-plus">
									<div className="larger">+58.91%</div>
									<div className="smaller">Annualized return</div>
								</div>
								<div className="holder num-plus">
									<div className="larger">70.00%</div>
									<div className="smaller">Winning trades</div>
								</div>
							</div>
              </div>
            </div>
          </div>
          <div className="col-12 mini-padding">
				<div className="card">
					<div className="card-body">
							<div className="heading">Return</div>
							<div className="major">
								<div className="holder num-plus">
									<div className="larger">43%</div>
									<div className="smaller">Annualized return</div>
								</div>
								<div className="holder num-plus">
									<div className="larger">43%</div>
									<div className="smaller">Annualized / Rest</div>
								</div>
							</div>
							<div className="major">
								<div className="holder num-plus">
									<div className="larger">43%</div>
									<div className="smaller">Average return</div>
								</div>
								<div className="holder num-plus">
									<div className="larger">43%</div>
									<div className="smaller">Median return</div>
								</div>
							</div>
					</div>
				</div>
          </div>
		  <div className="col-12 mini-padding">
				<div className="card">
					<div className="card-body">
							<div className="heading">Profit</div>
							<div className="major">
								<div className="holder num-plus">
									<div className="larger">43%</div>
									<div className="smaller">Total profit</div>
								</div>
								<div className="holder num-plus">
									<div className="larger">43%</div>
									<div className="smaller">Average profit</div>
								</div>
							</div>
					</div>
				</div>
          </div>
		  <div className="col-12 mini-padding">
				<div className="card">
					<div className="card-body">
							<div className="heading">Gains - Losses</div>
							<div className="major">
								<div className="holder num-plus">
									<div className="larger">6</div>
									<div className="smaller">Gains</div>
								</div>
								<div className="holder num-minus">
									<div className="larger">4</div>
									<div className="smaller">Losses</div>
								</div>
							</div>
							<div className="major">
								<div className="holder num-plus">
									<div className="larger">+8.51%</div>
									<div className="smaller">Profit</div>
								</div>
								<div className="holder num-minus">
									<div className="larger">-2.99%</div>
									<div className="smaller">Profit</div>
								</div>
							</div>
							<div className="major">
								<div className="holder num-plus">
									<div className="larger">+20.86%</div>
									<div className="smaller">Max.profit</div>
								</div>
								<div className="holder num-minus">
									<div className="larger">-4.64%</div>
									<div className="smaller">Max.loss</div>
								</div>
							</div>
					</div>
				</div>
          </div>
		  <div className="col-12 mini-padding">
				<div className="card">
					<div className="card-body num-grey">
							<div className="heading">Miscellaneous</div>
							<div className="major">
								<div className="holder">
									<div className="larger">10</div>
									<div className="smaller">Trades</div>
								</div>
								<div className="holder">
									<div className="larger">1 loss</div>
									<div className="smaller">Current streak</div>
								</div>
							</div>
							<div className="major">
								<div className="holder">
									<div className="larger">40%</div>
									<div className="smaller">Trading days</div>
								</div>
								<div className="holder">
									<div className="larger">56%</div>
									<div className="smaller">Calendar days</div>
								</div>
							</div>
							<div className="major">
								<div className="holder">
									<div className="larger">60,00%</div>
									<div className="smaller">Winning trades</div>
								</div>
								<div className="holder">
									<div className="larger">8,03%</div>
									<div className="smaller">Standard deviation</div>
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


const mapStateToProps = state => ({ repos: state.chart });
const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;



