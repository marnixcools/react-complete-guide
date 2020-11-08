import React from 'react';
import Person from './Person/Person';

const persons = (props) => 
    props.persons.map((elPerson, index) => {
        return <Person
          click = {() => props.clicked(index)}
          name={elPerson.name}
          age={elPerson.age}
          key={elPerson.id}
          changeName={(event) => props.changed(event, elPerson.id)}/>
        }
      )


export default persons;