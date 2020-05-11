import React from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Wrapper>
          <Route exact path="/" component={Saved}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/saved" component={Saved}></Route>
        </Wrapper>
      </Switch>
    </Router>
  );
}

export default App;
