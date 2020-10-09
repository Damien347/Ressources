import React, { Component, Fragment } from 'react';

import './Fragment.css';

import FragmentHelp from '../Fragment/FragmentHelp';

class FragmentMethode extends Component {
    state = {
        tableau: [
            { firstname: "Damien", lastname: "onolfo", age: "29" },
            { firstname: "Alison", lastname: "tricot", age: "27" },
            { firstname: "Olivier", lastname: "Legrand", age: "37" },
            { firstname: "Nicolas", lastname: "onolfo", age: "42" },
            { lastname: "sans prenom", age: "inconnue" },
            { firstname: "Simon", lastname: "Pumba" }]
    }



    render() {
        return (
            /* fragment remplace la div parent, afin d'eviter la surimbrication 
            ca evite de surchargé le DOM*/
            <Fragment>

                <table>
                    <thead>
                        <tr>
                            <th> firstname: </th>
                            <th> lastname: </th>
                            <th> age: </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableau.map((infos, index) => {
                            return (

                                /* Fragment remplace ici <div></div> pour ne pas poser de probleme dans le tableau */
                                <Fragment key={index}>

                                    {/* on passe les props dans le composant agenda via la methode map*/}
                                    <FragmentHelp firstname={infos.firstname}lastname={infos.lastname}age={infos.age}/>
                                </Fragment>
                            )
                        })}
                    </tbody>

                </table>
            </Fragment>
        );
    }
}

export default FragmentMethode;