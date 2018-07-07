//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Asset
import './css/Content.css';

class Content extends Component {
  render() {
    const { body } = this.props;
    return (
      <div className="Content">
        {body}
      </div>
    );
  }
}

Content.propTypes = {
  body: PropTypes.object.isRequired
};

export default Content;
