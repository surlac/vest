import React, { Component } from "react";
import { Bar } from "react-chartjs-2";


class Pattern extends Component {
  render() {
	var { labels, values } = this.props.repos;
    return (
      <div className="col-12 col-lg-6 mini-padding">
        <div className="card">
          <div className="card-body">
            <h4>patterns</h4>
            <Bar
              data={{
                labels:   [labels[0], labels[Math.round(labels.length/10*2)], labels[Math.round(labels.length/10*3)], labels[Math.round(labels.length/10*4)], labels[Math.round(labels.length/10*5)], labels[Math.round(labels.length/10*6)], labels[Math.round(labels.length/10*7)], labels[labels.length - 1] ],
                datasets: [
                  {
                    label: "price",
                    data: [values[0], values[Math.round(values.length/10*2)], values[Math.round(values.length/10*3)], values[Math.round(values.length/10*4)], values[Math.round(values.length/10*5)], values[Math.round(values.length/10*6)], values[Math.round(values.length/10*7)], values[values.length - 1] ],
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
