import React, { Component } from 'react';

class TestError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 1
        }
    }

    handleClick = () => {
        this.setState({
            timer: this.state.timer + 1
        })
    }



     



    render() {

        if (this.state.timer === 5) {
            throw new Error('I crashed!');
        }
     
        return (
            <div>
                <button onClick={this.handleClick}> Bomb </button>
                <p> {this.state.timer} </p>
            </div>
        );
    }
}

export default TestError;