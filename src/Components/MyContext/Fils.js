import React, { Component } from 'react';


import MyContext from './MyContext';


class Fils extends Component {
    render() {
        return (
            <MyContext.Consumer>
               
                {
                    data => {
                        return (
                            <div>
                                je me nomme {console.log(data)}, 
                                j'ai {this.props.infos.age} ans,
                                j'habite {data.lieux} {/* Ici il n'y a pas de props utilisé, on a bien recuperé le state 'lieux' du
                                composant Arbre via le Context.Provider/Consumer  */}
                            </div>

                        )
                    }
                }
            </MyContext.Consumer>
        );
    }
}

export default Fils;