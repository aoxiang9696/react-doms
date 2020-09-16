// 引入react
import React from "react";
// 引入组件
import Home from "./tt";
import Other from "./other";
import Cpp from './cpp'
// import Life from "./life";
// import About from "./index";
// 引入router
import { BrowserRouter as Router, Route } from "react-router-dom";

function router() {
  return (
    <Router>
      <Route path="/life"> </Route>{" "}
      <Route path='/cpp' component={Cpp}></Route>
      {/* <Route path="/home" component={Home}></Route> */}{" "}
      <Route
        path="/home"
        render={() => (
          <Home>
            <Route path="/home/oo" component={Other}>
              {" "}
            </Route>{" "}
          </Home>
        )}
      ></Route>{" "}
      {/* <Route path="/about" component={About}></Route> */}{" "}
    </Router>
  );
}

export default router;
