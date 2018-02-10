import React, { Component } from 'react';
import SideBar from '../../Shared/SideBar/SideBar';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {match} = this.props;
    return(
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          This is the profile page {match.params.id}
        </div>
        <SideBar />
      </div>
    )
  }
}

export default ProfilePage;