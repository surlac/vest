import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class Pattern extends Component {
  render() {
    return (
      <div class="col-12 col-lg-6 mini-padding">
        <div class="card">
          <div class="card-body">
            <h4>patterns</h4>
            <Bar
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.equityChartData;
const PatternContainer = connect(mapStateToProps)(Pattern);

export default PatternContainer;
