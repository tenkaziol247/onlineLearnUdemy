import React, { Component } from 'react';

import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'adlkj', name: 'Tuan', age: 22 },
      { id: 'adslfkj', name: 'Anh', age: 23 },
      { id: 'akfjewr', name: 'Le', age: 24 },
    ],
    isShowPerson: false,
  }

  togglePersonHandler = () => {
    let doesShow = this.state.isShowPerson;
    this.setState({ isShowPerson: !doesShow });
  }

  nameChangeHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => p.id === id);

    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    let persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.isShowPerson) {
      persons = (
        <div>
          {this.state.persons.map((item, index) => {
            return <Person name={item.name} age={item.age} valueCurrent={item.name}
              key={item.id} changed={(event) => this.nameChangeHandler(event, item.id)}
              click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    let assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    } 

    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }


    return (
      <div className={classes.App}>
        <h1>Hi, I'm react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    )
  }

}

export default App;
