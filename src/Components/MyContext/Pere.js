import React, { Component } from 'react';

import Fils from './Fils';

class Pere extends Component {
    render() {
        return (
            <div>
                Père,
                j'appelle <br/>
                <Fils infos={this.props.infos} /> {/*Ici le props 'infos' est inutile si ce n'est 
                pour montrer le cheminement que l'on doit operer sans passer par Context en utilisant les props, 
                et que j'emploie avec le state name et age*/}
            </div>
        );
    }
}

export default Pere;