import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

import { GOOGLE_AUTH2_KEY } from '../config';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      // initialization of the google auth object
      window.gapi.client
        .init({
          clientId: GOOGLE_AUTH2_KEY,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    //Function to update the redux state so the component can be re rendered
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn(); // gapi built in function to login
  };

  onSignOutClick = () => {
    this.auth.signOut(); // gapi built in function to logout
  };

  renderButton() {
    if (this.props.isSignedIn) {
      return (
        <div className="btn-google header-link" onClick={this.onSignOutClick}>
          <FaSignOutAlt size="1.5em" />
          <p>SIGN OUT</p>
        </div>
      );
    }
    return (
      <div className="btn-google header-link" onClick={this.onSignInClick}>
        <FaSignInAlt size="1.5em" />
        <p>SIGN IN</p>
      </div>
    );
  }

  render() {
    return <>{this.renderButton()}</>;
  }
}

// From our redux state, we take the isSignedIn part
// and give it to the compoennts props
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

// Export de component with the connect function from react-redux
// so the state can communicate with the component
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
