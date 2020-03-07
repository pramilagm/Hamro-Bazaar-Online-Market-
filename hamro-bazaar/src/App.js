import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Details from "./Components/Details";
import Default from "./Components/Default";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </div>
    );
  }
}
export default App;
