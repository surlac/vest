import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

class Chart extends Component {
  static defaultProps = {
    displayTitle: false,
    displayLegend: false
  };

  render() {
    console.log(this.props);
    return (
      <div className="chart">
        <Line
          data={{
            labels: this.props.labels,
            datasets: [
              {
                label: "price",
                data: this.props.values,
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

const mapStateToProps = state => state.equityChartData;
const ChartContainer = connect(mapStateToProps)(Chart);

export default ChartContainer;
