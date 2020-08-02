import React from "react";
import Manage from "./manage";
import Return from "./return";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/return">
          <Return />
        </Route>
        <Route path="/">
          <Manage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
