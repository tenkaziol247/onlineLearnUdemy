import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: 'adlkj', name: 'Tuan', age: 22 },
      { id: 'adslfkj', name: 'Anh', age: 23 },
      { id: 'akfjewr', name: 'Le', age: 24 },
    ],
    isShowPerson: false,
    countChange: 0
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        countChange: prevState.countChange + 1,
      }
    })
  }

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    let persons = null;

    if (this.state.isShowPerson) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          isShowPerson={this.state.isShowPerson}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}
      </div>
    )
  }

}

export default App;
