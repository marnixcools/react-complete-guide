import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    //@mdia kan hier worden gebruikt omdat
    //we radium hebben geinstalleerd
    //LET OP : in de app moeten we de alles tussen RootStyle plaatsen
    const style = {
        '@media (min-width: 1000px)':{
            width: '450px'
        }
    };
return <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and i am {props.age} years old'</p>
            <p>{props.children}</p>
            <input onChange= {props.changeName} value={props.name}/>
        </div>};
export default Radium(person);