import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';


class App extends Component {
  state = {
    persons: [
      {id : 'qfmq' ,name: "Marnix" , age: 55},
      {id : 'pmmj' ,name: "Viginie" , age: 43},
      {id : 'fdsf' ,name: "Nathan" , age: 15}
    ],
    someOtherState: "some other value",
    showPerson : true
  } 

  changeNameHandler = (event, id) => {
    //first we search the index of the element
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    //we may not change the original so we make a copie
    //of the found person
    const locPerson = {
      ...this.state.persons[personIndex]
    };
    //then we change the name
    locPerson.name = event.target.value;
    //Now to we change the Persons object
    //but first we make a copie
    const locPersons = [...this.state.persons];
    locPersons[personIndex] = locPerson;
    //Now we change the state
    this.setState({persons : locPersons});
  }

  showPersonHandler = () => {
    let locShowPerson = this.state.showPerson;
    this.setState({showPerson : !locShowPerson});

  }
  
deletePersonHandler = (personIndex) => {
  //locPerson wordt een kopie van de pointer
  //als we dan de splice functie toepassen doen we dat in feite
  //met de originele state.person, wat in feite niet mag
  //state.person mag maar worde aangepast door de setState methode
  //Het is dus beter een kopie te maken van het origineel
  //Hieronder twee voorbeelden om dit te doen

  // const locPersons = this.state.persons; dit was het origineel

  //eerste manier, door splice() toe te passen maken we een kopie
  //const locPersons = this.state.persons.splice();

  //een nieuwere manier is met ... instructor. Dit neemt de volledige array
  const locPersons = [...this.state.persons];
  locPersons.splice(personIndex,1);
  this.setState({persons : locPersons});

}
  render() {
    let locPersons = null;
    let btnClass = '';
    if (this.state.showPerson) {
      locPersons = (
        <div>
          <Persons
          persons= {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.changeNameHandler}
          />
          {/* {this.state.persons.map((elPerson, index) => {
              return <Person
                click = {() => this.deletePersonHandler(index)}
                name={elPerson.name}
                age={elPerson.age}
                key={elPerson.id}
                changeName={(event) => this.changeNameHandler(event, elPerson.id)}/>
              }
            )

        }   */}
        </div>
      )

      btnClass = classes.Red;
    }

    const assingedClasses = [];
    if (this.state.persons.length <=2){
      assingedClasses.push(classes.red);// classes = ['red']
    }

    if (this.state.persons.length <=1){
      assingedClasses.push(classes.bold);// classes = ['red','bold']
    }
    return (
        <div className={classes.App}>
          <p></p>
            <h1>Hello I am marnix a new react developer</h1>
            <p className = {assingedClasses.join(' ')}> This is realy working</p>
            <button 
              className={btnClass}
              onClick={this.showPersonHandler}> 
                toggle person
            </button>
            {locPersons}
        </div>
    );
  }
}

//Radium gaat onze app bewerken zodat we met pseudo style command kan werken
export default (App);
