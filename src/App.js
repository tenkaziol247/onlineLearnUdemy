import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    if (this.state.isShowPerson) {
      persons = (
        <div>
          {this.state.persons.map((item, index) => {
            return <Person name={item.name} age={item.age} valueCurrent={item.name}
              key={item.id} changed={(event) => this.nameChangeHandler(event, item.id)}
              click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    )
  }

}

export default App;
