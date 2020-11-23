import React, { Component } from 'react';

import Pere from './Pere';

class GrandPere extends Component {
    render() {
        return (
            <div>
                Grand Père, 
                j'appelle <br/>
                <Pere infos={this.props.infos}/> {/*Ici le props 'infos' est inutile si ce n'est 
                pour montrer le cheminement que l'on doit operer sans passer par Context en utilisant les props,
                et que j'emploie avec le state name et age*/}
            </div>
        );
    }
}

export default GrandPere;