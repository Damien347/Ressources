import React, { Component } from 'react';

import Agenda from './Agenda';

class Array extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableau : [
                {firstname: "Damien", lastname: "onolfo", age:"29"},
                {firstname: "Alison", lastname: "tricot", age:"27"},
                {firstname: "Olivier", lastname: "Legrand", age:"37"},
                {firstname: "Nicolas", lastname: "onolfo", age:"42"},
                {lastname:"sans prenom", age:"inconnue"},
                {firstname:"Simon", lastname:"Pumba"}]
        }
    }
    
    render() {


        return (
            <div>

                
                {this.state.tableau.map((infos, index) => {
                    return (
                        <div key={index}>

                            {/* on passe les props dans le composant agenda via la methode map*/}
                            <Agenda firstname={infos.firstname} lastname={infos.lastname} age={infos.age}/>
                            </div>
                    )
                }) }

            </div>
        );
    }
}

export default Array;