import React, { Component } from 'react';


const Contact = ({firstname, lastname, age}) => {
    const contactInfos = age ? (<p> Age: {age} </p>)
        :
        (<p>Age: non renseigné</p>);

        if(firstname){
            return(
                <div>
                    <p>Prenom: {firstname}</p>
                    <p>Nom: {lastname}</p>
                    {contactInfos}
                </div>
            )
        }else {
            return (
                <p> Fiche imcompléte </p>
            )
        }
}


class Agenda extends Component {
    render() {
        return (
            <div>
                <p>prenom : </p>
            </div>
        );
    }
}

export default Agenda;