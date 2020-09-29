import React, { Component } from 'react';



import ComponentFunction from './ComponentFunction';

class ComponentClass extends Component {

    
    render() {

        console.log (this);
        return (
            <div>
                <h1> {this.props.titre} </h1>

                {/* on injecte les props comme parametres (race nom age couleur ) 
                aux différents composants (ComponentFunction). Le props age est inconnu
                pour le chat tigré, on fera une condition dans le ComponentFunction pour le gérer */ }
                <ComponentFunction race="Labrador" sexe="Male" nom="Tomy" age="2" couleur="Blanc" />
                <ComponentFunction race="Berger" sexe="Male "nom="Alfy" age="3" couleur="Roux/noir" />
                <ComponentFunction race="Toyger" sexe='femelle' nom="Nouba" age="" couleur="Tigré gris" />
                <ComponentFunction race="" sexe='femelle' nom="Nouba" age="" couleur="Tigré gris" />
            </div>
        );
    }
}

export default ComponentClass;