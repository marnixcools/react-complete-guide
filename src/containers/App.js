import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      {id : 'qfmq' ,name: "Marnix" , age: 55},
      {id : 'pmmj' ,name: "Viginie" , age: 43},
      {id : 'fdsf' ,name: "Nathan" , age: 15}
    ],
    someOtherState: "some other value",
    showPerson : true
  } 

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromPros', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render');
    let locPersons = null;
    if (this.state.showPerson) {
      locPersons = 
          <Persons
            persons= {this.state.persons}
            showPerson = {this.state.showPerson}
            clicked = {this.deletePersonHandler}
            changed = {this.changeNameHandler}
          />
      
    }

     return (
        <div className={classes.App}>
          <p></p>
            <Cockpit 
              title={this.props.AppTitle}
              persons={this.state.persons}
              clicked={this.showPersonHandler}
              showPerson={this.state.showPerson}/>
            {locPersons}
        </div>
    );
  }
}

//Radium gaat onze app bewerken zodat we met pseudo style command kan werken
export default (App);
