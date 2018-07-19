import React, { Component } from 'react';
import { getAllObjects, postObject } from '../utils/fuctionsCrud';

import FormRental from './FormRental';
import ShowGridRental from './showGrid/ShowGridRental';

class RentalContainer extends Component {
    constructor() {
        super();
        this.state = {
            arrayBook: [],
            arrayPerson: [],
            person: {
                identification: '',
                name: '',
                lastName: '',
                age: ''
            },
            book: [],
            detail: '',
            date: '',
            resetCheckbox: true 
        };
        this.handleAddRental = this.handleAddRental.bind(this);
    }

    async handleAddRental(){
        const url ="/rental/";
        let rental = {
            person: this.state.person,
            books: this.state.book,
            dateReturn: this.state.date,
            detail: this.state.detail
        }
        console.log(JSON.stringify(rental));
        const rentalReturn = await postObject(url,rental);
        console.log(rentalReturn);
    }  

    async componentDidMount() {
        //carga personas
        const url = { url: "/person/" };
        const persons = await getAllObjects(url);
        this.setState({ arrayPerson: persons });
        //carga libros
        const ur = { url: "/book/" };
        const books = await getAllObjects(ur);
        this.setState({ arrayBook: books });
    }

    handleInputChange = (e) => {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({[name]: value});
    }

    handleInputPerson = (e) => {
        const { value } = e.target;
        console.log(value);
        let id = parseInt(value,10);
        let index = this.state.arrayPerson.findIndex(person => person.identification === id);
        let object = this.state.arrayPerson[index];
        this.setState({
            person: object
        },() => {
            console.log(this.state.person)})
        
    }

    toggleChange = (item) => {
        
        let isGoing = this.state.book !== null? this.state.book.findIndex(book => book.id === item.id) !== -1 : false;
        if (!isGoing) {
            let books = this.state.book;
            books.push(item);
            this.setState({
                book: books,
            },() => {
                console.log(this.state.book)})
        }
        else {
            let newArrayBook = this.state.book.filter((el) => {
                return el.id !== item.id;
            });
            this.setState({
                book: newArrayBook
            },() => {
                console.log(this.state.book)})
        }
    }

    render() {
        return (
            <div className="rentalContainer">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <FormRental
                            stateRental={ this.state }
                            onGetEventRowForm={ this.handleInputChange }
                            getPersonRentalId={ this.handleInputPerson }
                            onAddRental={ this.handleAddRental }
                        />
                    </div>
                    <div className="col">
                        <ShowGridRental
                            list={ this.state.arrayBook }
                            onChangeBook={ this.toggleChange }
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default RentalContainer;