import React, { Component } from 'react';

import '../css/From.css';

class FormPerson extends Component {

    handlePersonEdit = (e) => {
        e.preventDefault();
        this.props.onGetPersonToEdit();
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddPerson();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label>Numero de cedula: </label>
                    </div>
                    <div className="col-25">
                        <input
                            type="text"
                            disabled={!this.props.personInpuntEdit.isDisableId}
                            name="identification"
                            className="form-control "
                            value={this.props.personInpuntEdit.identification}
                            onChange={this.props.onGetEventRowForm}
                            placeholder="Cedula"
                            autoComplete="off"
                            required
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
                            value={this.props.personInpuntEdit.name}
                            onChange={this.props.onGetEventRowForm}
                            placeholder="Nombre"
                            autoComplete="off"
                            required
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
                            value={this.props.personInpuntEdit.lastName}
                            onChange={this.props.onGetEventRowForm}
                            placeholder="Primer Apellido"
                            autoComplete="off"
                            required
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
                            value={this.props.personInpuntEdit.age}
                            onChange={this.props.onGetEventRowForm}
                            placeholder="Edad"
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
                            this.props.personInpuntEdit.isDisableId
                                ?
                                <button type="submit" className='button border'>
                                    Guardar
                                </button>
                                :
                                <button className='button border' onClick={this.handlePersonEdit}>
                                    Actualizar
                                </button>
                        }
                    </div>
                </div>
            </form>
        );
    }
}
export default FormPerson;
