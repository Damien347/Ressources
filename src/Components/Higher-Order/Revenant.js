import React, { Component } from 'react';

import revenant from './revenant.png';
import countHits from './CountHits';

class Revenant extends Component {


    render() {

        // const {name, addOneHit, hocState, life} = this.props; 
        /*Voir composant Loba si cette const est decommenté pour les props*/

        const LifeValue = this.props.life > 0 ? (<td> {this.props.life} % </td>) : (<td> Mort </td>);
        //si revenant atteint 0% de vie cela affiche mort


        const AttackButton = this.props.life > 0 ? 
        (<button onClick={this.props.addOneHit} className='btn btn-success m-3'> {this.props.name} Attaque </button>)
        :
        (<button className='btn btn-success m-3' disabled> {this.props.name} Mort </button>);

        return (
            <div className="col">
                <img src={revenant} alt="revenant" /> <br />
                {AttackButton}
                <table className='table table-stripped'>
                    <thead>
                        <tr>
                            <th scope='col'> Coups </th>
                            <th scope='col'> Vie </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {this.props.hocState.hits} </td>
                            {LifeValue}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default countHits(Revenant);