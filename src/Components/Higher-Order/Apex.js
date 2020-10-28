import React, { Component } from 'react';

import Loba from './Loba';
import Revenant from './Revenant';
import './Apex.css';


class Apex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loba: 100,
            revenant: 100
        }
    }


    reduceLife = (param) => {
        if (param === 'Loba') {
            this.setState({
                revenant: this.state.revenant - 10
            })
        } else {
            this.setState({
                loba: this.state.loba - 10
            })
        }
    }

        render() {
            return (
                <div className="container text-center">
                    <h1> Loba vs Revenant </h1>
                    <hr />

                    <div className="row">
                        <Loba name="Loba" life={this.state.loba} reduceHandler={this.reduceLife} />
                        <Revenant name="Revenant" life={this.state.revenant} reduceHandler={this.reduceLife} />
                    </div>
                </div>
            );
        }
    }

    export default Apex;