import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header";
import HomePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
