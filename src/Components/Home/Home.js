import React, { Component } from 'react';
import SideBar from '../Shared/SideBar/SideBar';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            This is Home Page
          </div>
          <SideBar />
          
        </div>

       
    )
  }
}

export default Home;