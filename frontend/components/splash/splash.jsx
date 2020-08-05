import React from 'react';
import { connect } from 'react-redux';

class Splash extends React.Component {
  render () {
    return (
      <div className="main-splash-img">
        <img src="http://yogapattern.com/splashMedio.png" alt="splash"/>
      </div>
    );
  }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(null, null)(Splash);
