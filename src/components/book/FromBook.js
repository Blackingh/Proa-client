import React, { Component } from 'react';

import './css/FromBook.css';

class FromBook extends Component {

    handleBookEdit = (e) => {
        e.preventDefault();
        this.props.onGetBookToEdit();
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddBook();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="row">
                    <div className="col-25">
                        <label>id: </label>
                    </div>
                    <div className="col-25">
                        <input
                            type="text"
                            name="id"
                            className="form-control "
                            disabled="false"
                            value={this.props.bookInpuntEdit.id}
                            onChange={this.props.onGetEventRowForm}
                            placeholder="Autogenerado"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Titulo del libro: </label>
                    </div>
                    <div className="col-25">
                        <input
                            type="text"
                            name="title"
                            className="form-control "
                            value={this.props.bookInpuntEdit.title}
                            onChange={this.props.onGetEventRowForm}
                            placeholder="Titulo"
                            autoComplete="off"
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Autor del libro: </label>
                    </div>
                    <div className="col-25">
                        <input
                            type="text"
                            name="author"
                            className="form-control "
                            value={this.props.bookInpuntEdit.author}
                            onChange={this.props.onGetEventRowForm}
                            placeholder="Autor"
                            autoComplete="off"
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        {
                            //Acomoda el boton
                        }
                    </div>
                    <div className="col-25">
                        {
                            this.props.bookInpuntEdit.isDisableId
                                ?
                                <button type="submit" className='button border'>
                                    Guardar
                                    </button>
                                :
                                <button className='button border' onClick={this.handleBookEdit}>
                                    Actualizar
                                    </button>
                        }
                    </div>
                </div>
            </form>
        );
    }
}
export default FromBook;
