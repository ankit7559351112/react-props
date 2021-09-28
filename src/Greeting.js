import React from 'react';

function Greeting(props) {
    return (
        <div>
            <h1>{props.morning}</h1>
            <h2>{props.afternoon}</h2>
            <h3>{props.evening}</h3>
            
        </div>
    );
}

export default Greeting;
