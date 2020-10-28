import React, { Component } from 'react';

import loba from './loba.png';
import countHits from './CountHits';

class Loba extends Component {


    render() {

        const { name, addOneHit, hocState, life } = this.props;

        const LifeValue = life > 0 ? (<td> {life} % </td>) : (<td> Mort </td>);

        const AttackButton = life > 0 ? 
        (<button onClick={addOneHit} className='btn btn-success m-3'> {name} Attaque </button>)
        :
        (<button className='btn btn-success m-3' disabled> {name} Mort </button>);

        return (
            <div className="col">
                <img src={loba} alt="loba" /> <br />
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
                            <td> {hocState.hits} </td>
                            {LifeValue}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default countHits(Loba);