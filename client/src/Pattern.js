import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Pattern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  render() {
    return (
      <div class="col-12 col-lg-6 mini-padding">
        <div class="card">
          <div class="card-body">
            <h4>patterns</h4>
            <Bar
              data={{
                labels: this.state.chartData.equityChartData.labels,
                datasets: [
                  {
                    label: "price",
                    data: this.state.chartData.equityChartData.values,
                    backgroundColor: "#c6e8ef",
                    borderWidth: 2,
                    borderColor: "#0cabc2",
                    pointRadius: 0
                  }
                ]
              }}
              options={{ legend: { display: false } }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pattern;
