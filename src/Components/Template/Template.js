import React, { Component } from 'react';
import Header from '../Shared/Header/Header';
import Home from '../Home/Home';


class Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="wrapper">
        <Header />
        <Home />
      </div>
    )
  }
}

export default Template;