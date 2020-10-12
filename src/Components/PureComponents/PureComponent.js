import React, { PureComponent } from 'react';

class PureComp extends PureComponent {

    render() {
        /*avec PureComponent, on evite des rechargement inutile quand aucun changement 
        n'a etait apporté au props, au second click sur le bouton du ParentComponent,
        le simpleComponent se recharge mais le pureComponent vois qu'il n'y a pas de changement du props,
        (superman a superman) et ne recharge donc pas.*/

        console.log(' Je suis dans le render PureComponent');
        return (
            <div>
                <p> Pure Composant : {this.props.name} </p>
            </div>
        );
    }
}

export default PureComp;