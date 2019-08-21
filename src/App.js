import React from "react";
import { BrowserRouter as Router, Route, Navlink, Switch } from "react-router-dom";
import "./App.scss";
import { Header } from "./commons";
import { Home, Articles, About } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/articles"  component={Articles} />
      </div>
    </Router>
  );
}

export default App;
