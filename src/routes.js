//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componentes
import App from './App';
import Person from './components/mainMenu/pages/Person';
import Book from './components/mainMenu/pages/Book';
import Rental from './components/mainMenu/pages/Rental';
import RentalReturn from './components/mainMenu/pages/RentalReturn';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/person" component={Person} />
            <Route exact path="/book" component={Book} />
            <Route exact path="/rental" component={Rental} />
            <Route exact path="/rental-return" component={RentalReturn} />
        </Switch>
    </App>

export default AppRoutes;