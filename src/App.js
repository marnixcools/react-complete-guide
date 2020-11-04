import React, { Component } from 'react';
import Person from './Person/Person.js';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Marnix" , age: 55},
      { name: "Viginie" , age: 43},
      { name: "Nathan" , age: 15}
    ],
    someOtherState: "some other value",
    showPerson : true
  } 

  changeNameHandler = (event) => {
    //console.log("hallo daar")
    //DO NOT USE THIS this.state.persons[0].name = "PAPA";
    this.setState({
      persons: [
        { name: "Marnix", age: 55},
        { name:  event.target.value, age: 43},
        { name: "Nathan" , age: 15}
      ]
    } )
  }

  showPersonHandler = () => {
    let locShowPerson = this.state.showPerson;
    this.setState({showPerson : !locShowPerson});

  }
  
deletePersonHandler = (personIndex) => {
  const locPersons = this.state.persons;
  locPersons.splice(personIndex,1);
  this.setState({persons : locPersons});

}
  render() {
    const myStyle = {
      backgroundColor : 'White',
      font: 'inherit',
      border: '10px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let locPersons = null;
    if (this.state.showPerson) {
      locPersons = (
        <div>
          {
            this.state.persons.map((elPerson, index) => {
              return <Person
                click = {() => this.deletePersonHandler(index)}
                name={elPerson.name}
                age={elPerson.age}/>
              }
            )
        }  
        </div>
      )
    }

    return (
      <div className="App">
        <p></p>
          <h1>Hello I am marnix en new react developer</h1>
          <p>This is realy working</p>
          <button 
            style={myStyle}
            onClick={this.showPersonHandler} 
            >toggle person
          </button>
          {locPersons}
      </div>
    );
  }
}

export default App;
