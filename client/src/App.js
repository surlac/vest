import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Cumulative from "./Cumulative";
import Sidebar from "./Sidebar";
import Pattern from "./Pattern";
import Table from "./Table";
import ChartContainer from "./Chart";
import Control from "./Control";
import Search from "./Search";
import Title from "./Title";
import { getInitialPriceData } from "./DataProvider";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: getInitialPriceData() };
  }

  componentDidMount() {
    // fetch('http://ec2-54-158-138-224.compute-1.amazonaws.com:8080/vest/v1/stats?code=gc&rangeStart=2015-01-01&rangeEnd=2018-10-30&periodStart=2017-01-01&periodEnd=2018-03-01')
    // .then(response => response.json())
    // .then(data => this.setState({chartData: data}));
    //.then(function (myJson) { console.log(JSON.stringify(myJson));   })
    // this.eventSource.onmessage = event => {
    // var price = JSON.parse(event.data);
    // console.log(price); //Array of 365 random numbers
    // var someProperty = { ...this.state.chartData };
    // someProperty.chart.values = price;
    // this.setState({ someProperty });
    // };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-lg-9">
                <div class="row">
                  <Title />
                  <Search />
                  <Control />
                  <div class="col-12 mini-padding">
                    <div class="card">
                      <div class="card-body">
                        <Route exact path="/" component={ChartContainer} />
                        <Route path="/crypto" component={ChartContainer} />
                        <Route path="/commodities" component={ChartContainer} />
                        <Route path="/american" component={ChartContainer} />
                        <Route path="/european" component={ChartContainer} />
                        <Route
                          path="/international"
                          component={ChartContainer}
                        />
                        <Route path="/stocks" component={ChartContainer} />
                        <Route path="/ussectors" component={ChartContainer} />
                      </div>
                    </div>
                  </div>
                  <Cumulative />
                  <Pattern />
                  <Table />
                </div>
              </div>
              <Sidebar />
            </div>
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
