import React, { Component } from 'react';

import PersonContainer from '../../person/PersonContainer';

class Person extends Component {
    render() {
        return (
            <div className="person">
                <PersonContainer />
            </div>
        );
    }
}
export default Person;