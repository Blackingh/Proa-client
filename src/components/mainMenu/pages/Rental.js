import React, { Component } from 'react';

import './css/Rental.css';

import RentalContainer from '../../rental/RentalContainer';

class Rental extends Component {
    render() {
        return (
            <div className="Rental">
                <RentalContainer/>
            </div>
        );
    }
}
export default Rental;