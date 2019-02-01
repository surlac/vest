import React, { Component } from "react";
import { connect } from "react-redux";
import "./sidebar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';



const addRepos = repos => ({ type: "ADD_REPOS", repos });
const clearRepos = () => ({ type: "CLEAR_REPOS" });

const getRepos = dates => async dispatch => {
  try {
	var rangestart = dates.startDate.toISOString().substring(0, 10);
	var rangeend = dates.endDate.toISOString().substring(0, 10);
	var url = `http://ec2-54-84-182-191.compute-1.amazonaws.com:8080/vest/v1/charts?code=gc&rs=${rangestart}&re=${rangeend}`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addRepos(responseBody));
  } catch (error) {
    console.log(error);
    dispatch(clearRepos());
  }
};

const addStats = repos => ({ type: "ADD_STATS", repos });
const getStats = dates => async dispatch => {
  try {
	var rangestart = dates.startDate.toISOString().substring(0, 10);
	var rangeend = dates.endDate.toISOString().substring(0, 10);
	var url = `http://ec2-54-84-182-191.compute-1.amazonaws.com:8080/vest/v1/stats?code=gc&rangeStart=${rangestart}&rangeEnd=${rangeend}&periodStart=2017-01-01&periodEnd=2018-03-01`;
	const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addStats(responseBody));
  } catch (error) {
    console.log(error);
    dispatch(clearRepos());
  }
};


class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(2018,4,10),
	  endDate: new Date(2019,0,28)
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
	this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }
 
  handleChangeStart(date) {
    this.setState({ startDate: date });
	this.props.getRepos(this.state);
	this.props.getStats(this.state);
  }
 
   handleChangeEnd(date) {
    this.setState({ endDate: date });
	this.props.getRepos(this.state);
	this.props.getStats(this.state);
  }
  
	
  render() {
    return (
	<div>
        <DatePicker
			customInput={<ExampleCustomInput />}
			dateFormat="d MMMM"
			selected={this.state.startDate}
			selectsStart
			startDate={this.state.startDate}
			endDate={this.state.endDate}
			onChange={this.handleChangeStart}
		/>
		<span className="date-separator"> - </span>
		<DatePicker
			customInput={<ExampleCustomInput />}
			dateFormat="d MMMM"
			selected={this.state.endDate}
			selectsEnd
			startDate={this.state.startDate}
			endDate={this.state.endDate}
			onChange={this.handleChangeEnd}
		/>
	</div>
    );
  }
}

class ExampleCustomInput extends React.Component {
  render () {
    return (
      <button className="btn btn-info pattern-filter" onClick={this.props.onClick}>{this.props.value}</button>
    )
  }
}

ExampleCustomInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};


const mapDispatchToProps = { getRepos, getStats };
const ExampleContainer = connect(null, mapDispatchToProps)(Example);

export default ExampleContainer;