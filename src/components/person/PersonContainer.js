import React, { Component } from 'react';
import { getAllObjects, postObject, putObject } from '../utils/fuctionsCrud';
import FormPerson from './FormPerson';
import ShowGrid from '../utils/ShowGrid';
class PersonContainer extends Component {
    constructor() {
        super();
        this.state = {
            personList: [],
            identification: 0,
            name: '',
            lastName: '',
            age: 0,
            isDisableId: true
        };
        this.handleAddPerson = this.handleAddPerson.bind(this);
        this.handlePersonEdited = this.handlePersonEdited.bind(this);
        this.handleEditPerson = this.handleEditPerson.bind(this);
    }

    async handleAddPerson() {
        console.log(this.state.personList)
        //se crea un objeto local que se va a mandar al endPoint
        let object ={
            identification: this.state.identification,
            name: this.state.name,
            lastName: this.state.lastName,
            age: this.state.age
        }
        const url = { url: '/person/' };
        const person = await postObject(url, object);
        let newPersonList = this.state.personList;
        newPersonList.push(person);
        this.setState({ personList: newPersonList });
        //Datos predeterminados
        this.defaultValues();
    }

    defaultValues = () =>{
        this.setState({
            identification: 0,
            name: '',
            lastName: '',
            age: 0,
            isDisableId: true
        })
    }

    async handleEditPerson(object) {
        this.setState({
            identification: object.identification,
            name: object.name,
            lastName: object.lastName,
            age: object.age,
            isDisableId: false
        })
    }
    async handlePersonEdited() {
        //se crea un objeto local que se va a mandar al endPoint
        let object ={
            identification: this.state.identification,
            name: this.state.name,
            lastName: this.state.lastName,
            age: this.state.age
        }
        const url = { url: '/person/', id: object.identification };
        let newPerson = await putObject(url, object);
        console.log(newPerson);
        let index = await this.state.personList.findIndex(person => person.identification === object.identification)
        this.state.personList[index] = object;
        this.setState({isDisableId: true});
        //Reestablece los datos predeterminados
        this.defaultValues();
    }
    async componentDidMount() {
        const url = { url: '/person/' };
        const array = await getAllObjects(url);
        this.setState({ personList: array });
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
            <div className="PersonContainer">
                <FormPerson
                    onAddPerson={this.handleAddPerson}
                    personEdit={this.state}
                    personEdited={this.handlePersonEdited}
                    event={this.handleInputChange}
                />
                <ShowGrid list={this.state.personList} onEditPerson={this.handleEditPerson} />
            </div>
        );
    }
}
export default PersonContainer;