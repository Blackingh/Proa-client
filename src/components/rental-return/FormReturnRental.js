import React, { Component } from 'react';

class FormReturnRental extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchRental();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label>Cedula de persona: </label>
                    </div>
                    <div className="col-25">
                        <input
                            type="text"
                            name="identification"
                            className="form-control "
                            value={this.props.searchPerson.identification}
                            onChange={this.props.onGetEventRowForm}
                            placeholder="Cedula"
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
                        <button type="submit" className='button border'>
                            Buscar
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
export default FormReturnRental;