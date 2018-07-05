import React, { Component } from 'react';

import './css/fromPerson.css';

class FormPerson extends Component {

    constructor(props) {
        super(props);
        this.state = {
            identification: 0,
            name: '',
            lastName: '',
            age: 0,
        };

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddPerson(this.state);
        this.setState({
            identification: 0,
            name: '',
            lastName: '',
            age: 0,
        });
    }

    handleInputChange = (e) => {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
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
                                name="identification"
                                className="form-control "
                                value={this.state.identification}
                                onChange={this.handleInputChange}
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
                                value={this.state.name}
                                onChange={this.handleInputChange}
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
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
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
                                value={this.state.age}
                                onChange={this.handleInputChange}
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
                            <button type="submit" className="button">
                                <strong>Guardar</strong>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default FormPerson;