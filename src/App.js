import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Screens/Home";
import Store from "./Components/Screens/Store";
import Login from "./Components/Screens/Login";
import SignUp from "./Components/Screens/SignUp";
import GlobalProvider from "./Components/GlobalContext/GlobalState";
import ProductDetails from "./Components/Screens/Deatils";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/store" component={Store}>
            <Route path="/:id" element={<ProductDetails />} />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
