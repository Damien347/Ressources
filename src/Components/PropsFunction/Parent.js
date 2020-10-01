import React, { Component } from 'react';

import Enfant from './Enfant';

class Parent extends Component {

    state = {

        question: null,
        reponse: null

    }


    questionFunction = () => {
        this.setState({
            question: "tu as ranger ta chambre ?"
        })
    }


    reponseFunction = () => {
        this.setState({
            reponse: "Oui c'est ranger"
        })
    }


    

    render() {
        return (
            <div>
                <h1> Parent </h1>



                <button onClick={this.questionFunction}> question </button>
                <p>{this.state.question}</p>



                <Enfant fils="Enfant" stateByProps={this.state} reponseByProps={this.reponseFunction} />
            </div>
        );
    }
}

export default Parent;