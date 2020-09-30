import React, { Component } from 'react';

import EnfantEnfant from './EnfantEnfant';

class TestEnfant extends Component {

    state = {
        voitures: [
            { name: 'ford', color: 'red', year: '2000' },
            { name: 'mercedes', color: 'black', year: '2010' },
            { name: 'peugeot', color: 'green', year: '2018' } //tableau voitures
        ],
        titre: 'mon catalogue voitures 2'
    }


    /* fonction qui ajoute 10 ans a chaque click */
    addTenYears = () => {

        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })

        /* nouveau state */
        this.setState({
            updatedState
        })
    }



    render() {

/* genere l'année actuelle, seulement l'année */ 
        const year = new Date().getFullYear();


        return (
            <div>
                <h1> {this.props.essaie} </h1>
                <h1> {this.props.second} </h1>







                            {/*exos voitures*/ }

                <button onClick={this.addTenYears}>+ 10ans</button> 

                <h1> {this.state.titre} </h1>
              
                {

                    //affiche le tableau 
                    this.state.voitures.map((voiture, index) => {
                        return (
                            <div key={index}>
                        <EnfantEnfant nom={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'} />
                       </div>
                        )

                    })
                }
            </div>
        );
    }
}

export default TestEnfant;