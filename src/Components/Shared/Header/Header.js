import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <header>
        <h1>Music List</h1>
        <div className="user-menu">
          <h2>WelCome To Mouj</h2>
        </div>
      </header>
    )
  }
}

export default Header;