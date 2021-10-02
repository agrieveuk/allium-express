import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import FullArticle from './components/FullArticle';
import Articles from './components/Articles';
import Nav from './components/Nav';
import Header from './components/Header';
import Banner from './components/Banner';
import RequireLogin from './components/RequireLogin';
import SignOut from './components/SignOut';
import NotFound404 from './components/NotFound404';
import UserProfile from './components/UserProfile';

function App() {
  const [user, setUser] = useState({ username: 'weegembump' });

  return (
    <div className='App'>
      <Header />
      <RequireLogin user={user} setUser={setUser}>
        <SignOut user={user} setUser={setUser} />
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Articles />
          </Route>
          <Route exact path='/topics/:topic'>
            <Banner />
            <Articles />
          </Route>
          <Route exact path='/articles/:article_id'>
            <FullArticle user={user} />
          </Route>
          <Route exact path='/users/:username'>
            <UserProfile />
          </Route>
          <Route path='/'>
            <NotFound404 />
          </Route>
        </Switch>
      </RequireLogin>
    </div>
  );
}

export default App;
