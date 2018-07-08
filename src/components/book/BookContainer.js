import React, { Component } from 'react';
import { getAllObjects, postObject, putObject, deleteObject } from '../utils/fuctionsCrud';
import FromBook from './FromBook';
import ShowGrid from '../utils/ShowGrid';

import './css/BookContainer.css';
class BookContainer extends Component {
    constructor() {
        super();
        this.state = {
            bookList: [],
            id: '',
            title: '',
            author: '',
            url: {
                url: '/book/',
                id: ''
            },
            isDisableId: true
        };
        this.handleAddBook = this.handleAddBook.bind(this);
        this.handleBookEdit = this.handleBookEdit.bind(this);
        this.editRowBook = this.editRowBook.bind(this);
        this.deletRowBook = this.deletRowBook.bind(this);
    }
    async handleAddBook() {
        //se crea un objeto local que se va a mandar al endPoint
        let object = {
            id: this.state.id,
            title: this.state.title,
            author: this.state.author,
        }
        const book = await postObject(this.state.url.url, object);
        let newBookList = this.state.bookList;
        newBookList.push(book);
        this.setState({ bookList: newBookList });
        //Datos predeterminados
        this.defaultValues();
    }

    defaultValues = () => {
        this.setState({
            id: '',
            title: '',
            author: '',
            isDisableId: true
        })
    }

    editRowBook(object) {
        this.setState({
            id: object.id,
            title: object.title,
            author: object.author,
            isDisableId: false
        })
    }

    async deletRowBook(object) {
        this.setState({id: object.id})
        await deleteObject(this.state.url);
        let index = await this.state.bookList.findIndex(book => book.id === object.id)
        this.state.bookList.splice(index, 1);
        this.defaultValues();
    }

    async handleBookEdit() {
        //se crea un objeto local que se va a mandar al endPoint
        let object = {
            id: this.state.id,
            title: this.state.title,
            author: this.state.author,
        }
        this.setState({id: object.id})
        let newBook = await putObject(this.state.url, object);
        console.log(newBook);//revisar
        let index = await this.state.bookList.findIndex(book => book.id === object.id)
        this.state.bookList[index] = object;
        this.setState({ isDisableId: true });
        //Reestablece los datos predeterminados
        this.defaultValues();
    }
    async componentDidMount() {
        const array = await getAllObjects(this.state.url);
        this.setState({ bookList: array });
    }
    //Fromulario
    handleInputChange = (e) => {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="bookContainer">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <FromBook
                            onAddBook={this.handleAddBook}
                            bookInpuntEdit={this.state}
                            onGetBookToEdit={this.handleBookEdit}
                            onGetEventRowForm={this.handleInputChange}
                        />
                    </div>
                    <div className="col">
                        <ShowGrid
                            list={this.state.bookList}
                            onEditRow={this.editRowBook}
                            onDeleteRow={this.deletRowBook}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default BookContainer;