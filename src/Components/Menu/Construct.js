import React from 'react';

const Construct = (props)=> {


    // redirection, pour que le props fonctionne, il faut que le composant en question est un Route
    setTimeout(() => {
        props.history.push('/') //le push cible le path de redirection
    }, 5000);
    return (

        <div>
            Page en construction, vous serez redirigez sur la page d'accueil dans 5secondes.
        </div>
    )
}

export default Construct;