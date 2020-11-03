import React from 'react';

const person = (props) => {
return <div>
            <p onClick={props.click}>I'm {props.name} and i am {props.age} years old'</p>
            <p>{props.children}</p>
            <input onChange= {props.changeName} value={props.name}/>
        </div>};
export default person;