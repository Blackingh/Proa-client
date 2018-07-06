import React, { Component } from 'react';

import './css/fromPerson.css';

class FormPerson extends Component {
    
    handlePersonEdited = (e) => {
        e.preventDefault();
        this.props.personEdited();
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddPerson();
    }

    
    render() {
        return (
            <div className="container card">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-25">
                            <label>Numero de cedula: </label>
                        </div>
                        <div className="col-25">
                            <input
                                type="text"
                                disabled={!this.props.personEdit.isDisableId}
                                name="identification"
                                className="form-control "
                                value={this.props.personEdit.identification}
                                onChange={this.props.event}
                                placeholder="Cedula"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Nombre: </label>
                        </div>
                        <div className="col-25">
                            <input
                                type="text"
                                name="name"
                                className="form-control "
                                value={this.props.personEdit.name}
                                onChange={this.props.event}
                                placeholder="Nombre"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Primer apellido: </label>
                        </div>
                        <div className="col-25">
                            <input
                                type="text"
                                name="lastName"
                                className="form-control "
                                value={this.props.personEdit.lastName}
                                onChange={this.props.event}
                                placeholder="Primer Apellido"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Ingresar edad: </label>
                        </div>
                        <div className="col-25">
                            <input
                                type="text"
                                name="age"
                                className="form-control "
                                value={this.props.personEdit.age}
                                onChange={this.props.event}
                                placeholder="Edad"
                                autoComplete="off"
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
                                this.props.personEdit.isDisableId
                                    ?
                                    <button type="submit" className='button'>
                                        <strong>Guardar</strong>
                                    </button>
                                    :
                                    <button className='button' onClick={this.handlePersonEdited}>
                                        <strong>Actualizar</strong>
                                    </button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default FormPerson;
