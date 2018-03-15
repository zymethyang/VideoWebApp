import React, { Component } from 'react';
import View from '../components/view';

class ViewPage extends Component {

  componentDidMount() {
    var { match } = this.props;
    var id = match.params.id;
    
  }
  render() {
    return (
      <div>
        <View />
      </div>
    );
  }
}

export default ViewPage;
