import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as act from '../actions/index';
import * as moment from 'moment';
import * as functions from './header/functions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showtab: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        setTimeout(() => {
            this.props.sendKeyword(this.state.value);
            if (this.state.value === '') {
                this.setState({
                    showtab: false
                })
            } else {
                this.setState({
                    showtab: true
                })
            }
        })

    }

    render() {
        var { search } = this.props;
        return (
            <div>
                <nav style={{ backgroundColor: '#810879' }}>
                    <div className="nav-wrapper">
                        <div className="row">
                            <div className="col l2">
                                <Link to='/'>
                                    <span style={{ fontSize: 40 }}>Etube</span>
                                </Link>
                            </div>
                            <div className="col l6">
                                <input value={this.state.value} onChange={this.handleChange} type="text" />
                            </div>
                            <div className="col l1">
                                <i className="fas fa-search" style={{ fontSize: 40 }}></i>
                            </div>
                        </div>
                    </div>
                </nav>
                {this.renderSearchBar(search)}
            </div>
        );
    }

    renderSearchBar = (search) => {
        return (
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col l12">
                    {this.state.showtab === true ? this.renderSmallTab(search) : <div></div>}
                </div>
            </div>
        );
    }

    renderSmallTab = (search) => {
        console.log(search);
        var result = null;
        result = search.map((value, index) => {
            return (
                <div className="col l4" key={index}>
                    <Link to={`/view/${functions.xoa_dau(value.snippet.title)}/${value.id.videoId}`} style={{ color: 'inherit' }}>
                        <div className="row" onClick={() => this.clickVideo()}>
                            <div className="col l6">
                                <figure className="sixteen-nine-img">
                                    <img src={value.snippet.thumbnails.medium.url} style={{ width: '100%', height: '100%' }} />
                                </figure>
                            </div>
                            <div className="col l6">
                                <span className="row" style={{ fontSize: 14, fontWeight: 'bold' }}>
                                    {value.snippet.title.length > 40 ? `${value.snippet.title.substring(0, 40).toUpperCase()}...` : value.snippet.title.toUpperCase()}
                                </span>
                                <span className="row" style={{ fontSize: 14, fontWeight: 'bold' }}>{value.snippet.channelTitle}</span>
                                <span className="row" style={{ fontSize: 14 }}>{`Ngày xuất bản`}</span>
                                <span className="row" style={{ fontSize: 14 }}>{`${moment(value.snippet.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}`}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        })
        return result;
    }

    clickVideo = () => {
        this.setState({
            showtab: false
        })
    }
}

const mapStateToProps = state => {
    return {
        search: state.search
    }
}



export default connect(mapStateToProps, null)(Header);