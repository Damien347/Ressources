import React from 'react';

const Enfant = (props) => {

    const btnReponse = props.stateByProps.question !== null ?
        (<button onClick={props.reponseByProps}> Reponse </button>)
        :
        (<button disabled> Reponse </button>);



    return (
        <div>
            <h1>{props.fils}</h1>
            {btnReponse}
            <p>{props.stateByProps.reponse}</p>
        </div>
    )
}

export default Enfant;