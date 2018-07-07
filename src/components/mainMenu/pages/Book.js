import React, { Component } from 'react';

import BookContainer from '../../book/BookContainer';

class Book extends Component {
    render() {
        return (
            <div className="book">
                <BookContainer />
            </div>
        );
    }
}
export default Book;