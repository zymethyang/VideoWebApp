import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div className="row">
                        <div className="col l2">
                            Logo
                        </div>
                        <div className="col l10">
                            <input value="Alvin" id="first_name2" type="text" class="validate" />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
