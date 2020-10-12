import React, { Component } from 'react';

class SimpleComponent extends Component {

    render() {

        console.log(' Je suis dans le render SimpleComponent');

        return (
            <div>
                    <p> Composant Simple : {this.props.name} </p>
            </div>
        );
    }
}

export default SimpleComponent;