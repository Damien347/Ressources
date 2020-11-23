import React, { Component } from 'react';

class TestError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        }
    }

    // on definit qu'a chaque click, on ajoute +1 au state timer
    handleClick = () => {
        this.setState({
            timer: this.state.timer + 1
        })
    }



     



    render() {
// si timer est égale a 5, je creer une erreur
        if (this.state.timer === 5) {
            throw new Error('I crashed!');
        }
     
        return (
            <div>
                {/*Au click sur le bouton bomb, la methode handleclick est activé */}
                <button onClick={this.handleClick}> Bomb </button>
                <p> {this.state.timer} </p> {/* On affiche le nombre de click*/}
            </div>
        );
    }
}

export default TestError;