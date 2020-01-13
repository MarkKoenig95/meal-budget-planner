import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Ingredients from "./Ingredients";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route path="/ingredients">
          <Ingredients />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
