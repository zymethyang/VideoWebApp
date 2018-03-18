import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import * as data from '../constants/data';
import * as functions from './view/functions';

class View extends Component {
    loadMedia() {
        var cfg = {
            file: this.props.player.items.length > 0 ? `http://www.youtube.com/watch?v=${this.props.player.items[0].id}` : 'http://www.youtube.com/',
            width: '100%',
            height: '100%'
        };
        window.jwplayer("frame").setup(cfg);
    }
    componentDidUpdate() {
        this.loadMedia();
        { this.props.player.items.length > 0 ? window.$('title').html(this.props.player.items[0].snippet.title) : 'Đang tải dữ liệu' }
    }

    componentDidMount() {
        { this.props.player.items.length > 0 ? window.$('title').html(this.props.player.items[0].snippet.title) : 'Đang tải dữ liệu' }
    }




    render() {
        var { related } = this.props;
        return (
            <div className="row">
                <div className="wrap">
                    <div className="row">
                        <div className="col l8">
                            <div className="row">
                                <div id="frame"></div>
                            </div>
                            <span className="row" style={{ fontSize: 20 }}>
                                {this.props.player.items.length > 0 ? this.props.player.items[0].snippet.title : 'Đang tải dữ liệu'}
                            </span>
                            <span className="row">
                                <span className="col l8" style={{ marginTop: 5, marginLeft: -10 }}>
                                    <label style={{ fontSize: 18 }}>{this.props.player.items.length > 0 ? this.props.player.items[0].statistics.viewCount : 'Đang tải dữ liệu'} views</label>
                                </span>
                                <span className="col l4" style={{ float: 'right' }}>
                                    <span className="row">
                                        <span className="col l4" style={{ marginTop: 10 }}>
                                            <span className="row" style={{ fontSize: 20 }}>
                                                <i className="far fa-heart"></i> {this.props.player.items.length > 0 ? this.props.player.items[0].statistics.likeCount : 'Đang tải dữ liệu'}
                                            </span>
                                        </span>
                                        <span className="col l4" style={{ marginTop: 10 }}>
                                            <span className="row" style={{ fontSize: 20 }}>
                                                <i className="far fa-thumbs-down"></i> {this.props.player.items.length > 0 ? this.props.player.items[0].statistics.dislikeCount : 'Đang tải dữ liệu'}
                                            </span>
                                        </span>
                                        <span className="col l4" style={{ marginTop: 10 }}>
                                            <span className="row" style={{ fontSize: 20 }}>
                                                <i className="fa fa-share"></i>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                            <div className="row" style={{ marginTop: 20 }}>
                                <div className="col l1" style={{ marginLeft: -10 }}>
                                    <img src={"https://yt3.ggpht.com/a-/AJLlDp11sfCbcpalOfPFl761ncZF3qpZSabYXtXjag=s88-mo-c-c0xffffffff-rj-k-no"} style={{ width: '100%', height: '100%', borderRadius: 60 }} />
                                </div>
                                <div className="col l8">
                                    <span className="row" style={{ fontSize: 18, fontWeight: 'bold' }}>
                                        {this.props.player.items.length > 0 ? this.props.player.items[0].snippet.channelTitle : 'Đang tải dữ liệu'}
                                    </span>
                                    <span className="row">
                                        <label style={{ fontSize: 14 }}>
                                            {this.props.player.items.length > 0 ? this.props.player.items[0].snippet.publishedAt : 'Đang tải dữ liệu'}
                                        </label>
                                    </span>
                                    <span className="row" style={{ marginTop: 20 }}>
                                        {this.props.player.items.length > 0 ? this.props.player.items[0].snippet.description : 'Đang tải dữ liệu'}
                                    </span>
                                </div>
                                <div className="col l3">
                                    <a className="waves-effect waves-light btn">Subcribe</a>
                                </div>
                            </div>
                        </div>
                        <div className="col l4">
                            {related.items.length > 0 ? this.renderRelated(related) : <div></div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderRelated = (data) => {
        let result = null;
        result = data.items.map((value, index) => {
            return (
                <div className="row" key={index}>
                    <Link to={`/view/${functions.xoa_dau(value.snippet.title)}/${value.id.videoId}`} style={{ color: 'inherit' }}>
                        <div className="col l6">
                            <img src={`https://i.ytimg.com/vi/${value.id.videoId}/mqdefault.jpg`} style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col l6">
                            <span className="row" style={{ fontSize: 13, fontWeight: 'bold' }}>{value.snippet.title}</span>
                            <span className="row" style={{ fontSize: 13 }}>{value.snippet.channelTitle}</span>
                            {/*
                            <span className="row" style={{ fontSize: 13 }}>{value.items[0].statistics.viewCount} Views</span>
                            */}
                        </div>
                    </Link>
                </div >
            );
        })
        return result;
    }
}

const mapStateToProps = state => {
    return {
        player: state.player,
        related: state.related
    }
}



export default connect(mapStateToProps, null)(View);
