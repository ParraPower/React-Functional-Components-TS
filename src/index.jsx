
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import { Home, News } from './paterns/index';

import "./web.config";

// import MyImage from './assets/dog.jpg';
// import './index.css';

const App = () => {
  const props = {
    "test": 1
    }


  return (
    <div>
        <div>Welcome to my-webpack-react-starter</div>
        <Router>
            <Route exact path="/">
              <Home {...props} />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
        </Router>
    </div>
  );
};

console.log("1q21123123");
console.log(document.querySelector("#root"));

ReactDOM.render(<App />, document.querySelector("#root"));