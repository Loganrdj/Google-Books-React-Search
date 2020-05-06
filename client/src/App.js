import React from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Saved from './pages/Saved';
import Search from './pages/Search';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Saved}></Route>
        <Route path="/search" component={Search}></Route>
      </Switch>
    </Router>
  );
}

export default App;
