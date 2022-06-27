import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Lodging from "./Pages/Lodging/Lodging";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Error from "./Pages/Error/Error";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/kasa/home">
            <Home />
          </Route>
          <Route path="/kasa/lodging">
            <Lodging />
          </Route>
          <Route path="/kasa/aboutus">
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
};

export default App;
