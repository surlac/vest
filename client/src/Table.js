import React from "react";
import { connect } from "react-redux";

function Table(props) {
  // var start_date = props.equityChartData.labels[0];
  // var start_price = props.equityChartData.values[0];
  // var end_date =
    // props.equityChartData.labels[props.equityChartData.labels.length - 1];
  // var end_price =
    // props.equityChartData.values[props.equityChartData.values.length - 1];
  // var profit = (end_price - start_price).toFixed(2);
  // var profit_percent = props.stats.profit_rate;
  // var max_rise = props.stats.max_profit;
  // var max_drop = props.stats.max_loss;
  
  var start_date = 5;
  var start_price = 3;
  var end_date =
    2;
  var end_price =
    8;
  var profit = 2;
  var profit_percent = 9;
  var max_rise = 4;
  var max_drop = 9;
  
  
  
  

  return (
    <div className="col-12 mini-padding">
      <div className="card">
        <div className="card-body">
          <table className="table table-sm table-striped">
            <thead>
              <tr>
                <th>Start date</th>
                <th>Start price</th>
                <th>End date</th>
                <th>End price</th>
                <th>Profit</th>
                <th>Profit %</th>
                <th>Max rise</th>
                <th>Max drop</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{start_date}</td>
                <td>{start_price}</td>
                <td>{end_date}</td>
                <td>{end_price}</td>
                <td>{profit}</td>
                <td>{profit_percent}</td>
                <td>{max_rise}</td>
                <td>{max_drop}</td>
              </tr>
              <tr>
                <td>19 May 2011</td>
                <td>6.8100</td>
                <td>11 July 2011</td>
                <td>14.2100</td>
                <td>+7.40</td>
                <td>+108.66%</td>
                <td>+334.65%</td>
                <td>-17.91%</td>
              </tr>
              <tr>
                <td>19 May 2011</td>
                <td>6.8100</td>
                <td>11 July 2011</td>
                <td>14.2100</td>
                <td>+7.40</td>
                <td>+108.66%</td>
                <td>+334.65%</td>
                <td>-17.91%</td>
              </tr>
              <tr>
                <td>19 May 2011</td>
                <td>6.8100</td>
                <td>11 July 2011</td>
                <td>14.2100</td>
                <td>+7.40</td>
                <td>+108.66%</td>
                <td>+334.65%</td>
                <td>-17.91%</td>
              </tr>
              <tr>
                <td>19 May 2011</td>
                <td>6.8100</td>
                <td>11 July 2011</td>
                <td>14.2100</td>
                <td>+7.40</td>
                <td>+108.66%</td>
                <td>+334.65%</td>
                <td>-17.91%</td>
              </tr>
              <tr>
                <td>19 May 2011</td>
                <td>6.8100</td>
                <td>11 July 2011</td>
                <td>14.2100</td>
                <td>+7.40</td>
                <td>+108.66%</td>
                <td>+334.65%</td>
                <td>-17.91%</td>
              </tr>
              <tr>
                <td>19 May 2011</td>
                <td>6.8100</td>
                <td>11 July 2011</td>
                <td>14.2100</td>
                <td>+7.40</td>
                <td>+108.66%</td>
                <td>+334.65%</td>
                <td>-17.91%</td>
              </tr>
              <tr>
                <td>19 May 2011</td>
                <td>6.8100</td>
                <td>11 July 2011</td>
                <td>14.2100</td>
                <td>+7.40</td>
                <td>+108.66%</td>
                <td>+334.65%</td>
                <td>-17.91%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;
const TableContainer = connect(mapStateToProps)(Table);

export default TableContainer;
