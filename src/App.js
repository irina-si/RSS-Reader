import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import AddFeedPageContainer from './components/AddFeedPage/AddFeedPageContainer';
import EditFolderPageContainer from './components/EditFolderPage/EditFolderPageContainer';
import InitialPageContainer from './components/InitialPage/InitialPageContainer';
import FullNewsPageContainer from './components/FullNewsPage/FullNewsPageContainer';
import NewsPageContainer from './components/NewsPage/NewsPageContainer';

function App(props) {
  return (
    <Router>
      <div className='app-wrapper'>
      <HeaderContainer />
      <div className='app-wrapper-content'>
        <Switch>
          <Route path='' component={InitialPageContainer} />
          <Route path='' render={ () => <AddFeedPageContainer /> } />
          <Route path='' component={EditFolderPageContainer} />
          <Route path='' component={FullNewsPageContainer} />
          <Route path='' component={NewsPageContainer} />
        </Switch>
      </div>  
    </div>
    </Router>
  );
}

export default App;
