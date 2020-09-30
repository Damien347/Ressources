import React, { Component } from 'react';

import TestEnfant from './TestEnfant';

class Tests extends Component {
    state = {
        test: 'salutations',
        bidon: 'hello'
    }

    handleClick = ()=> {
        this.setState({
            test: 'bravo tu as change le state'
        })
    }
    

    handleChange = (e)=> {
       this.setState({
           test: e.target.value
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.test}</h1>
                <button onClick={this.handleClick}> button </button>
                <input onChange={this.handleChange} value={this.state.test}/>
                <details>
                    <p>test de la balise details</p>
                </details>

                <TestEnfant essaie={this.state.bidon} second="coucou"/>

            </div>
        );
    }
}

export default Tests;