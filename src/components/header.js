import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <nav style={{ backgroundColor: '#810879' }}>
                <div className="nav-wrapper">
                    <div className="row">
                        <div className="col l2">
                            <Link to='/'>
                                <i className="fas fa-film" style={{ fontSize: 50 }}></i>
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
        );
    }
}

export default Header;
