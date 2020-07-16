import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./Components/Screens/Home";
import Store from "./Components/Screens/Store";
import Login from "./Components/Screens/Login";
import SignUp from "./Components/Screens/SignUp";
import StoreDetails from "./Components/Screens/StoreDetails";

const NotFound = () => {
  return <div style={{ color: "white" }}>Not Found</div>;
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<StoreDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
