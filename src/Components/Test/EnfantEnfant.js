import React from 'react';


/* on recupere les props passé dans le fichier testEnfant.js au compososant EnfantEnfant */
const EnfantEnfant = ({color, nom, year}) => {
    const colorInfo = color ? (<p> Couleur: {color} </p>)
        :
        (<p>Couleur: Néant</p>);


        if(nom) {
            return (
                <div>
                    <p> Marque: {nom} </p>
                    <p>Age: {year} </p>
                    {colorInfo}
                </div>
            )
        }else {

        }
        return null;
           
    }

export default EnfantEnfant;