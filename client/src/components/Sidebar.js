import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import "./sidebar.css";

import ExampleContainer from "../containers/ExampleContainer";

class Sidebar extends Component {
  render() {
	var {
	annualized_rest,
    annualized_return,
    average_profit,
    average_return,
    calendar_days,
    current_streak,
    looser_count,
    looser_profit,
    max_loss,
    max_profit,
    median_return,
    pattern_count,
    profit_rate,
    standard_deviation,
    total_profit,
    trading_days,
    winner_count,
    winner_profit
	} = this.props.data;
	
    return (
      <div className="col-12 col-lg-3">
        <div className="row">
          <div className="col-12 mini-padding">
            <div className="card">
              <div className="card-body">
                <div className="row justify-content-center">
				  <ExampleContainer />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mini-padding">
            <div className="card">
              <div className="card-body">
                <Doughnut
                  data={{
                    labels: [annualized_return,annualized_rest],
                    datasets: [
                      {
                        label: "price",
                        data: [annualized_return,annualized_rest],
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
									<div className="larger">{annualized_return}%</div>
									<div className="smaller">Annualized return</div>
								</div>
								<div className="holder num-plus">
									<div className="larger">{profit_rate}%</div>
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
									<div className="larger">{annualized_return}%</div>
									<div className="smaller">Annualized return</div>
								</div>
								<div className="holder num-plus">
									<div className="larger">{annualized_rest}%</div>
									<div className="smaller">Annualized / Rest</div>
								</div>
							</div>
							<div className="major">
								<div className="holder num-plus">
									<div className="larger">{average_return}%</div>
									<div className="smaller">Average return</div>
								</div>
								<div className="holder num-plus">
									<div className="larger">{median_return}%</div>
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
									<div className="larger">{total_profit} pts</div>
									<div className="smaller">Total profit</div>
								</div>
								<div className="holder num-plus">
									<div className="larger">{average_profit} pts</div>
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
									<div className="larger">{winner_count}</div>
									<div className="smaller">Gains</div>
								</div>
								<div className="holder num-minus">
									<div className="larger">{looser_count}</div>
									<div className="smaller">Losses</div>
								</div>
							</div>
							<div className="major">
								<div className="holder num-plus">
									<div className="larger">{winner_profit}%</div>
									<div className="smaller">Profit</div>
								</div>
								<div className="holder num-minus">
									<div className="larger">{looser_profit}%</div>
									<div className="smaller">Profit</div>
								</div>
							</div>
							<div className="major">
								<div className="holder num-plus">
									<div className="larger">{max_profit}%</div>
									<div className="smaller">Max.profit</div>
								</div>
								<div className="holder num-minus">
									<div className="larger">{max_loss}%</div>
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
									<div className="larger">{pattern_count}</div>
									<div className="smaller">Trades</div>
								</div>
								<div className="holder">
									<div className="larger">{current_streak}</div>
									<div className="smaller">Current streak</div>
								</div>
							</div>
							<div className="major">
								<div className="holder">
									<div className="larger">{trading_days}</div>
									<div className="smaller">Trading days</div>
								</div>
								<div className="holder">
									<div className="larger">{calendar_days}</div>
									<div className="smaller">Calendar days</div>
								</div>
							</div>
							<div className="major">
								<div className="holder">
									<div className="larger">{profit_rate}%</div>
									<div className="smaller">Winning trades</div>
								</div>
								<div className="holder">
									<div className="larger">{standard_deviation}%</div>
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


export default Sidebar;



