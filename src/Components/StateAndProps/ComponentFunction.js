import React from 'react';

import './ComponentFunction.css';

const ComponentFunction = ({ race, nom, age, couleur }) => {    /*ou =({props}) => */


    /*condition (ternaire) si age inconnue */
    const ageInfo = age ?
        (<p>Age : { age} </p>                 /* ou {props.age} */)
        :
        (<p> Age inconnue </p>);



    /* condition (if else) si race n'est pas renseigné */
    if (race) {
        return (<div className='Race'>
            <p>Race : {race} </p>                             {/* ou {props.race} */}
            <p>Nom : {nom} </p>                               {/* ou {props.nom} */}
            {ageInfo}                                         {/* on affiche le resultat selon la condition */}
            <p>Couleur : {couleur} </p>                       {/* ou {props.couleur} */}



        </div>)
    } else {
        return (
            <p className='Race'> Fiche imcompléte </p>
        )
    }
}

export default ComponentFunction;