//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componentes
import App from './App';
import Home from './components/mainMenu/pages/Home';
import Person from './components/mainMenu/pages/Person';
import Contact from './components/mainMenu/pages/Contact';
import Book from './components/mainMenu/pages/Book';
import Rental from './components/mainMenu/pages/Rental';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/person" component={Person} />
            <Route exact path="/book" component={Book} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/rental" component={Rental} />
            <Route exact path="/" component={Home} />
        </Switch>
    </App>

export default AppRoutes;