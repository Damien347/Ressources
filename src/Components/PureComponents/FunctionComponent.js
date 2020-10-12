import React from 'react';

function FunctionComponent(props) {

    console.log('Je suis dans le functionComponent')

    return (

        <div>
            <p> FunctionComponent : {props.name} </p>
        </div>

    )
}

export default React.memo(FunctionComponent); // react.memo est l'equivalent de de purecompoent pour une fonction