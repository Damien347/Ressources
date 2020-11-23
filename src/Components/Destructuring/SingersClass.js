import React, { Component } from 'react';

class SingersClass extends Component {

    render() {

        // destructuring //
        const {name, age} = this.props;

        return (
            <div>
            <p> Chanteur: {name} {age} </p>
        </div>
    )
    }
}

export default SingersClass;