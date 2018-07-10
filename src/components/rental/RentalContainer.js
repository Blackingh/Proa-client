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
            rental: {
                person: {
                    identification: '',
                    name: '',
                    lastName: '',
                    age: ''
                },
                book: [],
                detail: '',
                date: ''
            }

        };
        this.handleAddPerson = this.handleAddPerson.bind(this);
    }

    async handleAddPerson(){
        const url ="/rental/";
        const rental = await postObject(url,this.state.rental);
        console.log(rental);
        //Datos predeterminados
        this.defaultValues();
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
        this.setState({ [name]: value });
    }

    handleInputPerson = (e) => {
        const { value } = e.target;
        console.log(value);
        let id = parseInt(value);
        let index = this.state.arrayPerson.findIndex(person => person.identification === id);
        let object = this.state.arrayPerson[index];
        this.setState({
            rental: {
                person: object
            }
        },() => {
            console.log(this.state.rental.person)})
        
    }

    toggleChange = (item) => {
        
        let isGoing = this.state.rental.book.findIndex(book => book.id === item.id) >= 0;


        if (!isGoing) {
            let books = this.state.rental.book > 0 ? this.state.rental.book : [];
            books.push(item);
            this.setState({
                rental: {
                    book: books,
                }
            },() => {
                console.log(this.state.rental.book)})
        }
        else {
            let newArrayBook = this.state.rental.book.filter(function (el) {
                return el.id !== item.id;
            });
            this.setState({
                rental: {
                    book: newArrayBook
                }
            },() => {
                console.log(this.state.rental.book)})
        }
    }

    render() {

        return (
            <div className="rentalContainer">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <FormRental
                            stateRental={this.state}
                            onGetEventRowForm={this.handleInputChange}
                            getPersonRentalId={this.handleInputPerson}
                            onAddRental={this.handleAddPerson}
                        />
                    </div>
                    <div className="col">
                        <ShowGridRental
                            list={this.state.arrayBook}
                            onChangeBook={this.toggleChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default RentalContainer;