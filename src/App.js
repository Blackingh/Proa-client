import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
import './App.css';

/**
 * Componentes
 */

import Header from './components/mainMenu/Header';
import Content from './components/mainMenu/Content';
import Footer from './components/mainMenu/Footer';

import items from './components/mainMenu/data/menu';

class App extends Component {
  render() {

    const { children } = this.props

    return (
      <div className="App">
        <Header title="Biblioteca" items={items} />
        <Content body={children} />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;