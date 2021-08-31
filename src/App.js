import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import FullArticle from './components/FullArticle';
import Articles from './components/Articles';
import Nav from './components/Nav';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Articles />
        </Route>
        <Route exact path='/topics/:slug'>
          <Banner />
          <Articles />
        </Route>
        <Route exact path='/articles/:article_id'>
          <FullArticle />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
