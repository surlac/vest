import React from "react";
import { connect } from "react-redux";

function Table(props) {
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
              <Horizontal info={props.data[0]} />
              <Horizontal info={props.data[1]} />
			  <Horizontal info={props.data[2]} />
              <Horizontal info={props.data[3]} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Horizontal(props){
	var { start_date, end_date, start_price, end_price, max_drop, max_rise, profit_abs, profit_rel } = props.info;
	return (
		<tr>
			<td>{start_date}</td>
			<td>{start_price}</td>
			<td>{end_date}</td>
			<td>{end_price}</td>
			<td>{profit_abs}</td>
			<td>{profit_rel}</td>
			<td>{max_rise}</td>
			<td>{max_drop}</td>
		</tr>
	)
}

const mapStateToProps = state => ({ data: state.patterns });
const TableContainer = connect(mapStateToProps)(Table);

export default TableContainer;
