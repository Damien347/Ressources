import React, { Component } from 'react';

import ArriereGrandPere from './ArriereGrandPere';

import MyContext from './MyContext'; // on import MyContext dans le fichier parent le plus haut, si j'avais mis l'import
// au niveau de Pere.js, je n'aurais pu acceder a ces methodes qu'au niveau de fils.

class Arbre extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Nouba',
            age: 2,
            lieux: 'La Turbie'
        }
    }
    
    render() {
        return (// on passe en valeur a provider le state que l'on souhaite utiliser dans un de ses enfants
            <MyContext.Provider value={this.state}> 
                Je suis la base,  
                j'appelle 
                <br /> 
                <ArriereGrandPere infos={this.state}/> {/*Ici le props 'infos' est inutile si ce n'est 
                pour montrer le cheminement que l'on doit operer sans passer par Context en utilisant les props,
                et que j'emploie avec le state name et age*/}
            </MyContext.Provider>
        );
    }
}

export default Arbre;