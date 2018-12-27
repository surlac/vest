import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { getInitialPriceData } from "./DataProvider";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";
import App from "./App";

var initialState = getInitialPriceData();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGECOLOR":
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

//const changecolor = () => ({ type: "CHANGECOLOR" });
//const mapDispatchToProps1 = dispatch => ({ changecolor: () => dispatch(changecolor()) });
//const Box1 = ({ changecolor }) => <div style={{ background: 'grey', width:"300px", height:"100px" }} onClick={changecolor}>First Box...</div>;
//const Wrapbox1 = connect(null, mapDispatchToProps1)(Box1);

//const Box2 = (props) => <div style={{backgroundColor:props.pressed ? "blue" : "red", width:"300px", height:"100px" }}>Second Box...</div>;
//const mapStateToProps2 = (state) => ({ pressed: state.pressed });
//const Wrapbox2 = connect(mapStateToProps2)(Box2);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
