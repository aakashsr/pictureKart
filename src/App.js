import React from "react";
import Header from "./components/Header";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" render={() => <Photos />} />
        <Route path="/cart" render={() => <Cart />} />
      </Switch>
    </div>
  );
}

export default App;
