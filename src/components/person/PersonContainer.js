import React, { Component } from 'react';
import {getAllObjects,postObject} from '../utils/fuctionsCrud';
import FormPerson from './FormPerson';
import GetList from '../utils/ShowGrid';
class PersonContainer extends Component {

    constructor() {
        super();
        this.state = {
            personList: [],
        };
        this.handleAddPerson = this.handleAddPerson.bind(this)
    }

    async handleAddPerson (object) {
        const url ={ url:'/person/'};
        const person = await postObject(url,object);
        let newPersonList = this.state.personList;
        newPersonList.push(person);
        this.setState({personList : newPersonList});
        console.log(this.state.personList);
      }
    
    async componentWillMount(){
        const url ={ url:'/person/'};
        const array = await getAllObjects(url);
        this.setState({personList:array});
    }
    render() {
        
       
        return (
            <div className="PersonContainer">
                <FormPerson onAddPerson={this.handleAddPerson}/>
                <GetList list={this.state.personList}/>
            </div>
        );
    }
}
export default PersonContainer;