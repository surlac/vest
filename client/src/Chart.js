import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: false,
    displayLegend: false
  };

  render() {
    return (
      <div className="chart">
        <Line
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
    );
  }
}

export default Chart;
