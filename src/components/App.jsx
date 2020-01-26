import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Ingredients from "./Ingredients/Ingredients";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Ingredients />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
