import React, { Component } from 'react';
import * as constants from '../constants/data';
import * as functions from './home/functions';
import { Route, NavLink, Link } from 'react-router-dom';

class Home extends Component {
    render() {
        var newUpload = constants.data;
        console.log(newUpload);
        return (
            <div className="row">
                <div className="wrap">
                    <div className="row">
                        <span className="row" style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Video vừa tải lên
                        </span>
                        <div className="row" style={{ marginTop: 30 }}>
                            <div className="col l4">
                                <Link to={`/view/${functions.xoa_dau('Nhạc trung quốc hay nhất túy hồng nhan.')}`} style={{ color: 'inherit' }}>
                                    <img src={'https://i.ytimg.com/vi/lQ5IGJNRulQ/mqdefault.jpg'} style={{ width: '100%', height: '100%' }} />
                                    <span className="row" style={{ fontSize: 18, fontWeight: 'bold' }}>
                                        Nhạc trung quốc hay nhất túy hồng nhan.
                                </span>
                                    <span className="row" style={{ fontSize: 16 }}>
                                        Kênh nhạc hay
                                </span>
                                    <span className="row" style={{ fontSize: 16 }}>
                                        2.1M views &#9830; 4 ngày trước.
                                </span>
                                </Link>
                            </div>
                            <div className="col l8">
                                <div className="row">
                                    {this.renderNewUpload(newUpload)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <span className="row" style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Âm Nhạc
                        </span>
                        <div className="row" style={{ marginTop: 30 }}>
                            <div className="col l2">
                                <img src={'https://i.ytimg.com/vi/vKswDQCuoaw/mqdefault.jpg'} style={{ width: '100%', height: '100%' }} />
                                <span className="row" style={{ fontSize: 16, fontWeight: 'bold' }}>
                                    Nhạc trung quốc hay nhất túy hồng nhan.
                                </span>
                                <span className="row" style={{ fontSize: 14 }}>
                                    Kênh nhạc hay
                                </span>
                                <span className="row" style={{ fontSize: 14 }}>
                                    2.1M views &#9830; 4 ngày trước.
                                </span>
                            </div>
                            <div className="col l2">
                                <img src={'https://i.ytimg.com/vi/vKswDQCuoaw/mqdefault.jpg'} style={{ width: '100%', height: '100%' }} />
                                <span className="row" style={{ fontSize: 16, fontWeight: 'bold' }}>
                                    Nhạc trung quốc hay nhất túy hồng nhan.
                                        </span>
                                <span className="row" style={{ fontSize: 14 }}>
                                    Kênh nhạc hay
                                        </span>
                                <span className="row" style={{ fontSize: 14 }}>
                                    2.1M views &#9830; 4 ngày trước.
                                        </span>
                            </div>
                            <div className="col l2">
                                <img src={'https://i.ytimg.com/vi/vKswDQCuoaw/mqdefault.jpg'} style={{ width: '100%', height: '100%' }} />
                                <span className="row" style={{ fontSize: 16, fontWeight: 'bold' }}>
                                    Nhạc trung quốc hay nhất túy hồng nhan.
                                </span>
                                <span className="row" style={{ fontSize: 14 }}>
                                    Kênh nhạc hay
                                </span>
                                <span className="row" style={{ fontSize: 14 }}>
                                    2.1M views &#9830; 4 ngày trước.
                                </span>
                            </div>
                            <div className="col l2">
                                <img src={'https://i.ytimg.com/vi/vKswDQCuoaw/mqdefault.jpg'} style={{ width: '100%', height: '100%' }} />
                                <span className="row" style={{ fontSize: 16, fontWeight: 'bold' }}>
                                    Nhạc trung quốc hay nhất túy hồng nhan.
                                </span>
                                <span className="row" style={{ fontSize: 14 }}>
                                    Kênh nhạc hay
                                </span>
                                <span className="row" style={{ fontSize: 14 }}>
                                    2.1M views &#9830; 4 ngày trước.
                                </span>
                            </div>
                            <div className="col l2">
                                <img src={'https://i.ytimg.com/vi/vKswDQCuoaw/mqdefault.jpg'} style={{ width: '100%', height: '100%' }} />
                                <span className="row" style={{ fontSize: 16, fontWeight: 'bold' }}>
                                    Nhạc trung quốc hay nhất túy hồng nhan.
                                </span>
                                <span className="row" style={{ fontSize: 14 }}>
                                    Kênh nhạc hay
                                </span>
                                <span className="row" style={{ fontSize: 14 }}>
                                    2.1M views &#9830; 4 ngày trước.
                                </span>
                            </div>
                            <div className="col l2">
                                <img src={'https://i.ytimg.com/vi/vKswDQCuoaw/mqdefault.jpg'} style={{ width: '100%', height: '100%' }} />
                                <span className="row" style={{ fontSize: 16, fontWeight: 'bold' }}>
                                    Nhạc trung quốc hay nhất túy hồng nhan.
                                </span>
                                <span className="row" style={{ fontSize: 14 }}>
                                    Kênh nhạc hay
                                </span>
                                <span className="row" style={{ fontSize: 14 }}>
                                    2.1M views &#9830; 4 ngày trước.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderNewUpload = (data) => {
        var result = null;
        result = data.map((value, index) => {
            return (
                <div className="col l3" key={index}>
                    <Link to={`/view/${functions.xoa_dau(value.items[0].snippet.title)}/${value.items[0].id}`} style={{ color: 'inherit' }}>
                        <img src={value.items[0].snippet.thumbnails.medium.url} style={{ width: '100%', height: '100%' }} />
                        <span className="row" style={{ fontSize: 16, fontWeight: 'bold' }}>
                            {value.items[0].snippet.title}
                        </span>
                        <span className="row" style={{ fontSize: 14 }}>
                            {value.items[0].snippet.channelTitle}
                        </span>
                        <span className="row" style={{ fontSize: 14 }}>
                            {value.items[0].statistics.viewCount} &#9830; 4 ngày trước.
                    </span>
                    </Link>
                </div>
            );
        });
        return result;
    }
}

export default Home;
