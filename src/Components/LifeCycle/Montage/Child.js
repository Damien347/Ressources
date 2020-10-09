import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {

            helloName: 'Hello Damien'

        }
        console.log('Je suis dans le Contructor ENFANT');
    }
    

    componentDidMount() {

        console.log('je suis dans le ComponentDidMount ENFANT ');
        this.setState({
            helloName: 'Hello Damien Onolfo'
        })
    }


    componentDidUpdate(prevProps, prevState){
        console.log(prevState);
        console.log(this.state);

    }


    componentWillUnmount() {
        console.log('je suis dans componentWillUnmount')
    }



    render() {

        console.log('MAJ DOM ENFANT');
        return (
            <div>
                <p>{this.state.helloName} </p>
            </div>
        );
    }
}

export default Child;