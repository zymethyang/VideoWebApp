import React, { Component } from 'react';

class View extends Component {
    loadMedia() {
        var cfg = {
            file: "http://www.youtube.com/watch?v=LC1mOEeZcNg",
            width: '100%',
            height: '100%'
        };
        window.jwplayer("frame").setup(cfg);
    }
    componentDidMount() {
        //this.loadMedia();
    }

    render() {
        return (
            <div className="row">
                <div className="wrap">
                    <div className="row">
                        <div className="col l8">
                            <div className="row">
                                <div id="frame"></div>
                            </div>
                            <span className="row" style={{ fontSize: 20 }}>
                                Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 1
                            </span>
                            <span className="row">
                                <span className="col l8" style={{ marginTop: 5, marginLeft: -10 }}>
                                    <label style={{ fontSize: 18 }}>616,538 views</label>
                                </span>
                                <span className="col l4" style={{ float: 'right' }}>
                                    <span className="row">
                                        <span className="col l4" style={{ marginTop: 10 }}>
                                            <span className="row" style={{ fontSize: 20 }}>
                                                <i className="far fa-heart"></i> 800
                                            </span>
                                        </span>
                                        <span className="col l4" style={{ marginTop: 10 }}>
                                            <span className="row" style={{ fontSize: 20 }}>
                                                <i className="far fa-thumbs-down"></i> 100
                                            </span>
                                        </span>
                                        <span className="col l4" style={{ marginTop: 10 }}>
                                            <span className="row" style={{ fontSize: 20 }}>
                                                <i className="fa fa-share"></i> 100
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
                                        Zoom TV
                                    </span>
                                    <span className="row">
                                        <label style={{ fontSize: 14 }}>
                                            Published on Jan 6, 2017
                                        </label>
                                    </span>
                                    <span className="row" style={{ marginTop: 20 }}>
                                        Những video hay nhất của Zoom TV : https://goo.gl/m5R6Xz
                                    </span>
                                </div>
                                <div className="col l3">
                                    <a className="waves-effect waves-light btn">Subcribe 179K</a>
                                </div>
                            </div>
                        </div>
                        <div className="col l4">
                            <div className="row">
                                <div className="col l6">
                                    <img src={"https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg"} style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="col l6">
                                    <span className="row" style={{ fontSize: 13, fontWeight: 'bold' }}>Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 2</span>
                                    <span className="row" style={{ fontSize: 13 }}>Zoom TV</span>
                                    <span className="row" style={{ fontSize: 13 }}>616K Views</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l6">
                                    <img src={"https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg"} style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="col l6">
                                    <span className="row" style={{ fontSize: 13, fontWeight: 'bold' }}>Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 2</span>
                                    <span className="row" style={{ fontSize: 13 }}>Zoom TV</span>
                                    <span className="row" style={{ fontSize: 13 }}>616K Views</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l6">
                                    <img src={"https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg"} style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="col l6">
                                    <span className="row" style={{ fontSize: 13, fontWeight: 'bold' }}>Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 2</span>
                                    <span className="row" style={{ fontSize: 13 }}>Zoom TV</span>
                                    <span className="row" style={{ fontSize: 13 }}>616K Views</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l6">
                                    <img src={"https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg"} style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="col l6">
                                    <span className="row" style={{ fontSize: 13, fontWeight: 'bold' }}>Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 2</span>
                                    <span className="row" style={{ fontSize: 13 }}>Zoom TV</span>
                                    <span className="row" style={{ fontSize: 13 }}>616K Views</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l6">
                                    <img src={"https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg"} style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="col l6">
                                    <span className="row" style={{ fontSize: 13, fontWeight: 'bold' }}>Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 2</span>
                                    <span className="row" style={{ fontSize: 13 }}>Zoom TV</span>
                                    <span className="row" style={{ fontSize: 13 }}>616K Views</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l6">
                                    <img src={"https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg"} style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="col l6">
                                    <span className="row" style={{ fontSize: 13, fontWeight: 'bold' }}>Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 2</span>
                                    <span className="row" style={{ fontSize: 13 }}>Zoom TV</span>
                                    <span className="row" style={{ fontSize: 13 }}>616K Views</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l6">
                                    <img src={"https://i.ytimg.com/vi/PSq6IAFckM8/maxresdefault.jpg"} style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="col l6">
                                    <span className="row" style={{ fontSize: 13, fontWeight: 'bold' }}>Những Ca Khúc Nhạc Phim Trung Quốc Buồn Nhất ll Phần 2</span>
                                    <span className="row" style={{ fontSize: 13 }}>Zoom TV</span>
                                    <span className="row" style={{ fontSize: 13 }}>616K Views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default View;
