import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header";
import HomePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import SignInAndSignOut from "./pages/signInAndSignOut";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
