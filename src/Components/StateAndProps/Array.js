import React, { Component } from 'react';

import Agenda from './Agenda';

class Array extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableau : [
                {firstname: "Damien", lastname: "onolfo", age:"29"},
                {firstname: "Alison", lastname: "tricot", age:"27"},
                {firstname: "Olivier", lastname: "Legrand", age:"37"},
                {firstname: "Nicolas", lastname: "onolfo", age:"42"}]
        }
    }
    
    render() {


        return (
            <div>

                {this.state.tableau.map((infos, index) => {
                    <Agenda firstname={infos.firstname}/>
                }) }
            </div>
        );
    }
}

export default Array;