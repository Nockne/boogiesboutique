import React from 'react'
import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Shop from './components/shop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Soldout from './components/soldout'



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/soldout">
            <Soldout />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
