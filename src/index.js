import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Lodging from "./Pages/Lodging/Lodging";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Error from "./Pages/Error/Error";
import Footer from "./Components/Footer/Footer";
import "./Utils/styles/common.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/lodging/">
          <Lodging />
        </Route>
        <Route path="/aboutus/">
          <AboutUs />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>
);
