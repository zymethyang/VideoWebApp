import React, { Component } from 'react';
import Header from '../components/header';
import { connect } from 'react-redux';
import * as act from '../actions/index';

class HeaderPage extends Component {
  render() {
    return (
      <div>
        <Header sendKeyword={this.sendKeyword} />
      </div>
    );
  }

  sendKeyword = (key) => {
    this.props.search(key);
  }

}



const mapDispatchToProps = (dispatch, props) => {
  return {
    search: (key) => {
      dispatch(act.get_search(key));
    }
  }
}

export default connect(null, mapDispatchToProps)(HeaderPage);
