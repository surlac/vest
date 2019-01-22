import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

class Cumulative extends Component {
  render() {
    return (
      <div class="col-12 col-lg-6 mini-padding">
        <div class="card">
          <div class="card-body">
            <h4>cumulative</h4>
            <Line
              data={{
                labels: this.props.labels,
                datasets: [
                  {
                    label: "price",
                    data: this.props.values,
                    fill: false,
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

const mapStateToProps = state => state.equityChartData;
const CumulativeContainer = connect(mapStateToProps)(Cumulative);

export default CumulativeContainer;
