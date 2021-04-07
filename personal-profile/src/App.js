import React from "react";
import { BrowserRouter, Switch, useLocation } from "react-router-dom";

function App() {
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>;
  return <div className="App"></div>;
}

export default App;
