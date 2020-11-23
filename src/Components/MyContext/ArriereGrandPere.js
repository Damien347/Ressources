import React, { Component } from 'react';

import GrandPere from './GrandPere'

class ArriereGrandPere extends Component {
    render() {
        return (
            <div>
                Arriere Grand Père, 
                j'appelle <br />
                <GrandPere infos={this.props.infos}/> {/*Ici le props 'infos' est inutile si ce n'est 
                pour montrer le cheminement que l'on doit operer sans passer par Context en utilisant les props,
                et que j'emploie avec le state name et age*/}
            </div>
        );
    }
}

export default ArriereGrandPere;