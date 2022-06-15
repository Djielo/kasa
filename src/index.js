import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/1.Header/Header";
import Home from "./Pages/1.Home/Home";
import Lodging from "./Pages/2.Lodging/Lodging";
import AboutUs from "./Pages/3.AboutUs/AboutUs";
import Error from "./Pages/4.Error/Error";
import Footer from "./Components/7.Footer/Footer";
import "./Utils/styles/common.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
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
  </React.Fragment>
);
