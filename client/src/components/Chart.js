import React, { Component } from "react";
import { Line } from "react-chartjs-2";


class Chart extends Component {
  static defaultProps = { displayTitle: false, displayLegend: false };
  render(){
	var { labels, values } = this.props.repos;
    return (
      <div>
		<Line data={{ labels: labels, 
					  datasets: [
								  {
									label: "price",
									data: values,
									backgroundColor: "#c6e8ef",
									borderWidth: 2,
									borderColor: "#0cabc2",
									pointRadius: 0
								  }
								]
					}}
			  options={{ legend: { display: false } }}  /> 
			  
      </div>
    )
  }
}

export default Chart;
