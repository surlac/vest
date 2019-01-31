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
import Empty from "./Empty";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-9">
                <div className="row">
                  <Title />
                  <Search />
                  <Control />
                  <div className="col-12 mini-padding">
                    <div className="card">
                      <div className="card-body">
                        <Route exact path="/" component={ChartContainer} />
                        <Route path="/crypto" component={Empty} />
                        <Route path="/commodities" component={Empty} />
                        <Route path="/american" component={Empty} />
                        <Route path="/european" component={Empty} />
                        <Route path="/international" component={Empty} />
                        <Route path="/stocks" component={Empty} />
                        <Route path="/ussectors" component={Empty} />
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
