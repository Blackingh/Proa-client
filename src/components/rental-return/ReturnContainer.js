import React, { Component } from 'react';
import { getIdObject, deleteListObject } from '../utils/fuctionsCrud';
import FormReturnRental from './FormReturnRental';
import ShowGridRental from './showGrid/ShowGridRental';

class ReturnContainer extends Component {

    constructor() {
        super();
        this.state = {
            identification: '',
            rentalList: [],
            listBooks:[],
            books:[]
        };
        this.searchBook = this.searchBook.bind(this);
        this.returnBooks = this.returnBooks.bind(this);
        this.deleteBooks = this.deleteBooks.bind(this);
    }

    async searchBook() {
        let url = { url: '/rental/person/', id: this.state.identification };
        let object = await getIdObject(url);
        console.log(object);
        let books = [];
        object.map((rental)=>{
            return(rental.books.map((book)=>{
                return(books.push(book));
            }));
        })
        this.setState({
            rentalList: object,
            books: books
        }, () => {
            console.log(this.state.rentalList)
        })
        console.log(this.state.rentalList)
    }

    handleInputChange = (e) => {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({ [name]: value }, () => {
            console.log(this.state.identification)
        });
    }


    async deleteBooks(rentalId, data){
        let url = { url: '/rental/person/delete/', id:rentalId};
        let dataBook = [data];
        await deleteListObject(url,dataBook);
    }

    returnBooks(){
        console.log(this.state.listBooks);
        this.state.rentalList.map((rental)=>{
            return(
                rental.books.map((book)=>{
                    return(
                        this.state.listBooks.map((booklist)=>{
                            return(
                                book === booklist?this.deleteBooks(rental.idRental,booklist):console.log("No")
                            )
                        })
                    )
                })
            );
        })

        this.setState({
            rentalList: []
        },()=>{
            console.log(this.state.rentalList)
        })
    }

    toggleChange = (item) => {
        
        let isGoing = this.state.listBooks !== null ? this.state.listBooks.findIndex(book => book.id === item.id) >= 0 : false;

        if (!isGoing) {
            let books = this.state.listBooks;
            books.push(item);
            this.setState({
                listBooks: books,
            },() => {
                console.log(this.state.listBooks)})
        }
        else {
            let newArrayBook = this.state.listBooks.filter(function (el) {
                return el.id !== item.id;
            });
            this.setState({
                listBooks: newArrayBook
            },() => {
                console.log(this.state.listBooks)})
        }
    }

    render() {
        return (
            <div className="ReturnContainer">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <FormReturnRental
                            searchPerson={this.state}
                            onGetEventRowForm={this.handleInputChange}
                            onSearchRental={this.searchBook}
                        />
                    </div>
                    <div className="col">
                        {
                            this.state.books !== undefined ?
                            <ShowGridRental
                                list={this.state.books}
                                onChangeBook={this.toggleChange}
                            />
                            :0
                        }
                    </div>
                    
                </div>
                <div className="row justify-content-md-center">
                        <button className="button bottonReturn" onClick={this.returnBooks}>
                            Devolver
                        </button>
                    </div>
            </div>
        );
    }

}
export default ReturnContainer;