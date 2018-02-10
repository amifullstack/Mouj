import React, { Component } from 'react';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="page-content">
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            This is Profile Page
          </div>
          <aside className="col-sm-12 col-lg-4">
            This is Profile Sidebar
          </aside>
        </div>

      </section>
    )
  }
}

export default ProfilePage;