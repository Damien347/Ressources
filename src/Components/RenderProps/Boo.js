import React, { Component } from 'react';

class Boo extends Component {

    
    // state = {
    //     hits: 0,
    //     badGuys: true
    // }


    
    // addOne = () => {
    //     this.setState((prevState) => {
    //         return {
    //             hits: prevState.hits + 1
    //         }
    //     })

    // }



    /* On enleve ici le state et la methode pour les placer dans le Composant AddHits */


    render() {

        const {hits, addOne, name} = this.props;

        return (
            <div className="col">
                <img src="/assets/boo.png" alt="boo"/>

                <button onClick={addOne} className="btn btn-success m-3"> {name} Frappe </button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> Coups </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {hits} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Boo;