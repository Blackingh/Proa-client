import React, { Component } from 'react';

class FormRental extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddRental();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label>Persona: </label>
                    </div>
                    <div className="col-25">
                        <select 
                            onChange={this.props.getPersonRentalId} 
                            name="seleccion" 
                            className="col-25 select"
                        >
                            <option value="default"className="default">Selección</option>
                            {
                                this.props.stateRental.arrayPerson.map(
                                    (person, i) => <option key={i} value={person.identification}>{person.name}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Fecha Devolución: </label>
                    </div>
                    <div className="col-25">
                        <input
                            type="date"
                            name="date"
                            className="form-control"
                            value={this.props.stateRental.date}
                            onChange={this.props.onGetEventRowForm}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Detalle: </label>
                    </div>
                    <div className="col-25">
                        <input
                            type="text"
                            name="detail"
                            className="form-control"
                            value={this.props.stateRental.detail}
                            onChange={this.props.onGetEventRowForm}
                            placeholder="Detalle"
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
                            Alquilar
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
export default FormRental;