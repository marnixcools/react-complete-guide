import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let btnClass = '';

    if (props.showPerson){
        btnClass = 'Red';
    }

    
    const assingedClasses = [];
    if (props.persons.length <=2){
      assingedClasses.push(classes.red);// classes = ['red']
    }

    if (props.persons.length <=1){
      assingedClasses.push(classes.bold);// classes = ['red','bold']
    }

    return (
    <div className={classes.Cockpit}>
        <h1>Hello I am marnix a new react developer</h1>
        <p className = {assingedClasses.join(' ')}> This is realy working</p>
        <button 
        className={btnClass}
        onClick={props.clicked}> 
            toggle person
        </button>
    </div>
    )
}

export default cockpit;