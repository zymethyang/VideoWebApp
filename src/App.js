import React, { Component } from 'react';
import HeaderPage from './pages/headerPage';
import FooterPage from './pages/footerPage';
import HomePage from './pages/homePage';
import ViewPage from './pages/viewPage';
import PageNotFound from './pages/pageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as act from './';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderPage />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/view/:title/:id' component={ViewPage} />
            <Route component={PageNotFound} />
          </Switch>
          <FooterPage />
        </div>
      </Router>
    );
  }
}



const mapStateToProps = state => {
  return {
    
  }
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

