import React, { Component } from 'react';



class ChangeState extends Component {

    constructor(props) {
        super(props);
        this.changeViaBindSecondMethode = this.changeViaBindSecondMethode.bind(this);
        this.state = {
            titre: 'Eh toi là'
        }
    }






    changeTitre = () => {
        this.setState({
            titre: "titre bien changer via setState",

        })
    }




    changeViaParam = (param) => {
        this.setState({
            titre: param
        })
    }






    changeViaBind = (param) => {
        this.setState({
            titre: param
        })

    }


    /* on passe cette fois le bind directement dans le constructor comme le recommande react */
    changeViaBindSecondMethode = () => {
        this.setState({
            titre: "titre bien changer via bind encore",

        })
    }


    changeViaInput = (e) => {
        this.setState({
            titre: e.target.value
        })
    }


    render() {
        return (
            <div>
                <h2>{this.state.titre}</h2>
                <button onClick={this.changeTitre}> via setState </button>
                <button onClick={() => this.changeViaParam('titre changer via param')}> via param </button>
                <button onClick={this.changeViaBind.bind(this, 'titre changer via bind')}> via bind </button>
                <button onClick={this.changeViaBindSecondMethode}> via bind seconde methode </button>

                {/* Cet Input permet a l'utilisateur d'interagir en changeant le titre comme bon lui semble */}
                <input onChange={this.changeViaInput} value={this.state.titre}></input>
            </div>
        );
    }
}

export default ChangeState;