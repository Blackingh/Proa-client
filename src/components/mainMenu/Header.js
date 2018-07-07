import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './css/Header.css';

class Header extends Component {
    render() {
        const { title, items } = this.props;
        return (
            <div className="Main">
                <header className="header">
                    <div className="Menu">
                        <ul>
                            <h2 className="title">{title}</h2>
                            {
                                items && items.map(
                                    (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)
                            }
                        </ul>
                    </div>
                </header>
                <div className="container">
                </div>
            </div>
        );
    }

}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}

export default Header;