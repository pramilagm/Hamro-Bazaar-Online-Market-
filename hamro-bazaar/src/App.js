import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Details from "./Components/Details";
import Default from "./Components/Default";
import Modal from "./Components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
export default App;
