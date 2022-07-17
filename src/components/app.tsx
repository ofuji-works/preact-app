import { h } from "preact";
import { Router, Route } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import Calc from "../routes/calc";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Route path="/" component={Home} />
      <Route path="/profile/" component={() => <Profile user="me" />} />
      <Route path="/profile/:user" component={Profile} />
      <Route path="/calc/" component={Calc} />
    </Router>
  </div>
);

export default App;
