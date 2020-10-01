import React, { Component } from 'react';


/*on recupere les props ici, que l'on met dans un const contact.*/
const Contact = ({firstname, lastname, age}) => {

    /* on met une condition si l'age est renseigné ou non, on affiche l'age ou age non renseigné */
    const contactInfos = age ? (<p> Age: {age} </p>)
        :
        (<p>Age: non renseigné</p>);


        /* condition si firstname existe, alors tu retourne les element prenom nom et age qui se trouve dans une const */
        if(firstname){
            return(
                <div>
                    <p>Prenom: {firstname}</p>
                    <p>Nom: {lastname}</p>
                    {contactInfos}
                </div>
            )
        }else { /* sinon tu retourne fiche imcomplete si firstname n'existe pas */
            return (
                <p> Fiche imcompléte </p>
            )
        }
}

export default Contact;