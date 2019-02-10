import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Cumulative extends Component {
  render() {
	var { labels, values } = this.props.repos;
    return (
      <div className="col-12 col-lg-6 mini-padding">
        <div className="card">
          <div className="card-body">
            <h4>cumulative</h4>
            <Line
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "price",
                    data: values,
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

export default Cumulative;



