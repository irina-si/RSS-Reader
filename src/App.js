import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import HeaderContainer from './components/common/Header/HeaderContainer';
import AddFeedPageContainer from './pages/AddFeedPage/AddFeedPageContainer';
import EditFolderPageContainer from './pages/EditFolderPage/EditFolderPageContainer';
import InitialPageContainer from './pages/InitialPage/InitialPageContainer';
import FullNewsPageContainer from './pages/FullNewsPage/FullNewsPageContainer';
import NewsPageContainer from './pages/NewsPage/NewsPageContainer';

function App(props) {
  return (
    <Router>
      <div className='app-wrapper'>
      <HeaderContainer />
      <div className='app-wrapper-content'>
        <Switch>
          <Route exact path='/' component={InitialPageContainer} />
          <Route path='/add-feed' render={ () => {return <AddFeedPageContainer />} } />
          <Route path='/' component={EditFolderPageContainer} />
          <Route path='/' component={FullNewsPageContainer} />
          <Route path='/' component={NewsPageContainer} />
        </Switch>
      </div>  
    </div>
    </Router>
  );
}

export default App;
