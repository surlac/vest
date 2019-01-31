import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Empty extends Component {
  static defaultProps = { displayTitle: false, displayLegend: false };
  render(){
    return (
      <div>
		<Line data={{ labels: [7,7,7,7,7,7,7,7,7,7],
					  datasets: [
								  {
									label: "price",
									data: [7,7,7,7,7,7,7,7,7,7],
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

export default Empty;