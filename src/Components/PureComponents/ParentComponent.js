import React, { Component } from 'react';

import SimpleComponent from './SimpleComponent';
import PureComp from './PureComponent';
import FunctionComponent from './FunctionComponent';

class ParentComponent extends Component {

    state = {
        name: 'Clark Kent'
    }



    handleChangeToSuperman = ()=> {
        this.setState ({
            name: "Superman"
        })
    }

    render() {

        console.log(' Je suis dans le render ParentComponent');

        return (
            <div>
                <p> Composant parent : {this.state.name} </p>
                <SimpleComponent name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <FunctionComponent name={this.state.name}/>

                <button onClick={this.handleChangeToSuperman}> changer en superman </button>
                
            </div>
        );
    }
}

export default ParentComponent;