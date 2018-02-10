import React, { Component } from 'react';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {match} = this.props;
    return(
      <section>
        <div>
          {match.params.id}
        </div>
      </section>
    )
  }
}

export default ProfilePage;