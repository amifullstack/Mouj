import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Home from '../Home/Home';
import ProfilePage from '../Account/ProfilePage/ProfilePage'


class Template extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    
    return(
      <Router>
        <div className="wrapper">        
          <Header />          
          <section className="page-content">
            <Route exact path="/" component={ Home } />
            <Route path="/account/profile/:id" component={ProfilePage} />
          </section>
        </div>
      </Router>
    )    
  }
}

export default Template;