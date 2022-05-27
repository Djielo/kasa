import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Lodging from "./Pages/Lodging/Lodging";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Error from "./Pages/Error/Error";

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }

    body {
      margin: 0;
    }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
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
    </Router>
  </React.StrictMode>
);
