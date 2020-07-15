import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Screens/Home";
import Store from "./Components/Screens/Store";
import Login from "./Components/Screens/Login";
import SignUp from "./Components/Screens/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
