import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/account/profile/user123'>Profile</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;