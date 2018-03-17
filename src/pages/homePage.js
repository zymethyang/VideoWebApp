import React, { Component } from 'react';
import Home from '../components/home';
import { connect } from 'react-redux';
import * as act from '../actions/index';

class HomePage extends Component {

  componentDidMount() {
    this.props.get_newest_video();
    this.props.get_trending_video();
    this.props.get_trending_music();
    this.props.get_trending_movie();
    this.props.get_trending_game();
    this.props.get_trending_sport();
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch, props) => {
  return {
    get_newest_video: () => {
      dispatch(act.get_newest_video());
    },
    get_trending_video: () => {
      dispatch(act.get_trending_video());
    },
    get_trending_music: () => {
      dispatch(act.get_trending_music());
    },
    get_trending_movie: () => {
      dispatch(act.get_trending_movie());
    },
    get_trending_game: () => {
      dispatch(act.get_trending_game());
    },
    get_trending_sport: () => {
      dispatch(act.get_trending_sport());
    }
  }
}

export default connect(null, mapDispatchToProps)(HomePage);

