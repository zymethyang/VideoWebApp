import React, { Component } from 'react';
import * as constants from '../constants/data';
import * as functions from './home/functions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as act from '../actions/index';

class Home extends Component {
    componentDidMount() {
    
    }
    render() {
        var { trending, music, movie, game, sport } = this.props;

        return (
            <div className="row">
                <div className="wrap">
                    <div className="row">
                        <span className="row" style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Phổ biến nhất
                        </span>
                        <div className="row" style={{ marginTop: 10 }}>
                            <div className="col l12">
                                <div className="row">
                                    {trending.length > 0 ? this.renderData(trending) : <div></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <span className="row" style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Âm Nhạc
                        </span>
                        <div className="row" style={{ marginTop: 10 }}>
                            {trending.length > 0 ? this.renderData(music) : <div></div>}
                        </div>
                    </div>
                    <div className="row">
                        <span className="row" style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Phim
                        </span>
                        <div className="row" style={{ marginTop: 10 }}>
                            {trending.length > 0 ? this.renderData(movie) : <div></div>}
                        </div>
                    </div>
                    <div className="row">
                        <span className="row" style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Thể thao
                        </span>
                        <div className="row" style={{ marginTop: 10 }}>
                            {trending.length > 0 ? this.renderData(sport) : <div></div>}
                        </div>
                    </div>
                    <div className="row">
                        <span className="row" style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Trò chơi
                        </span>
                        <div className="row" style={{ marginTop: 10 }}>
                            {trending.length > 0 ? this.renderData(game) : <div></div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderData = (data) => {
        var result = null;
        result = data.map((value, index) => {
            return (
                <div className="col l2" key={index} style={{ marginTop: 30 }}>
                    <Link to={`/view/${functions.xoa_dau(value.snippet.title)}/${value.id}`} style={{ color: 'inherit' }}>
                        <img src={value.snippet.thumbnails.medium.url} style={{ width: '100%', height: '100%' }} />
                        <span className="row" style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'justify' }}>
                            {value.snippet.title.length > 15 ? `${value.snippet.title.substring(0, 15)}...` : value.snippet.title}
                        </span>
                        <span className="row" style={{ fontSize: 14 }}>
                            {value.snippet.channelTitle.length > 18 ? `${value.snippet.channelTitle.substring(0, 18)}...` : value.snippet.channelTitle}
                        </span>
                        <span className="row" style={{ fontSize: 14 }}>
                            {this.showViewCount(value.statistics.viewCount)}
                        </span>
                    </Link>
                </div>
            );
        });
        return result;
    }

    showViewCount = (data) => {
        if ((data / 1000) > 0 && (data / 1000) < 1000) {
            return `${(data / 1000).toFixed(1)} Nghìn views`;
        } else if ((data / 1000000) > 0 && (data / 1000000) < 1000) {
            return `${(data / 1000000).toFixed(1)} Triệu views`;
        }
    }
}

const mapStateToProps = state => {
    return {
        newest: state.newest,
        trending: state.trending,
        music: state.music,
        movie: state.movie,
        game: state.game,
        sport: state.sport
    }
}



export default connect(mapStateToProps, null)(Home);
