import React, { Component } from 'react';

class FormPerson extends Component {

    constructor(props){
        super(props);
        this.state ={
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

    render(){
        return(
            <div className="table-form Container card w-75 d-inline-block">
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group w-25">
                        <label>Numero de cedula: </label>
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
                    <div className="form-group w-25">
                        <label>Nombre: </label>
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
                    <div className="form-group w-25">
                        <label>Primer apellido: </label>
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
                    <div className="form-group w-25">
                        <label>Ingresar edad: </label>
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
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        );
    }
}
export default FormPerson;