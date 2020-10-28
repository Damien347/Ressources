import React, { Component } from 'react';

import Vegeta from './Vegeta';
import Goku from './Goku';
import Boo from './Boo';
import Frieza from './Frieza';

import AddHits from './AddHits';



class Combat extends Component {
    render() {
        return (
            <div className="row">

                <Vegeta name="Vegeta" />
                <Goku name="Goku" />


                {/* Avec Methode de Props de Rendu  */}

                <AddHits
                    render={(hits, addOne, name) => (
                        <Boo hits={hits} addOne={addOne} name="Boo"/> //on attribue des props auquel on y passe les paramètres de la fonction 
                    )}

                />

                <AddHits
                    render={(hits, addOne, name) => (
                        <Frieza hits={hits} addOne={addOne} name="Boo" />
                    )}

                />

            </div>
        );
    }
}

export default Combat;