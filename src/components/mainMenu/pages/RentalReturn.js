import React, { Component } from 'react';

import './css/Rental.css';

import ReturnContainer from '../../rental-return/ReturnContainer';

class RentalReturn extends Component {
    render() {
        return (
            <div className="Rental">
                <ReturnContainer/>
            </div>
        );
    }
}
export default RentalReturn;