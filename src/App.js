import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/views/Home/Home";
import PRList from "./components/views/PRList/PRList";
import Settings from "./components/views/Settings/Settings";

import "./App.css";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/pr" component={PRList} />
        <Route path="/settings" component={Settings} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
