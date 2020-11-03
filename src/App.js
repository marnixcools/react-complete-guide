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
    someOtherState: "some other value"

  } 

  switchNameHandler = (newName) => {
    //console.log("hallo daar")
    //DO NOT USE THIS this.state.persons[0].name = "PAPA";
    this.setState({
      persons: [
        { name: newName, age: 55},
        { name: "Viginie" , age: 43},
        { name: "Nathan" , age: 15}
      ]
    } )

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
  

  render() {
    return (
      <div className="App">
        <p></p>
          <h1>Hello I am marnix en new react developer</h1>
          <p>This is realy working</p>
          <button onClick={this.switchNameHandler.bind(this, "EersteMarnix")} >Switch Name</button>
          <Person 
            name={this.state.persons[0].name}  
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name}  
            age={this.state.persons[1].age}
            click= {this.switchNameHandler.bind(this, "tweede marnix")}
            changeName = {this.changeNameHandler}/>
          <Person 
            name={this.state.persons[2].name}  
            age={this.state.persons[2].age}
            >dit is mijn zoon</Person>
      </div>
    );
  }
}

export default App;
