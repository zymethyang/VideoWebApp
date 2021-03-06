import React, { Component } from 'react';
import View from '../components/view';
import { connect } from 'react-redux';
import * as act from '../actions/index';

class ViewPage extends Component {

  componentDidUpdate() {
    var { match } = this.props;
    var id = match.params.id;
    this.props.player(id);
    this.props.get_related_video(id);
  }

  componentDidMount() {
    var { match } = this.props;
    var id = match.params.id;
    this.props.player(id);
    this.props.get_related_video(id);
  }

  render() {
    return (
      <div>
        <View />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {

  }
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    player: (id) => {
      dispatch(act.get_player(id));
    },
    get_related_video: (id) => {
      dispatch(act.get_related_video(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);
