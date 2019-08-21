import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Header } from "./commons";
import { Home, Articles, About } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/articles" component={Articles} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
