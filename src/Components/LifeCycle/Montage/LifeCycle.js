import React, { Component } from 'react';


import Child from './Child';


/* la phase de montage commence par rentré dans le constructor, ensuite dans le render et apres dans le
componentdidmount. Dans le cas ou il y aurait un enfant dans le render, la phase reprend exactement le meme procédé,
donc constructor enfant, render enfant, componentdidmount enfant, et ensuite execute le componenentdidmount (parent)*/

class Montage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phase: "Phase de montage",
            display: true
            
        }
        console.log('je suis dans le Constructor');
    }



    componentDidMount(props) {
        console.log('je suis dans le ComponentDidMount');
        this.setState({
            phase: this.props.name
        })

    }


    componentDidUpdate(prevProps, prevState){
        console.log(prevState);
        console.log(this.state);

    }


    handleChange = ()=> {
        this.setState({
            display: !this.state.display
        })
    }


    
    render() {
        console.log('je suis dans le Render, Mis a jour DOM');

        const showComponent = this.state.display ? (<Child />) : (<div></div>);

        return (
            <div>
                <p> {this.state.phase} </p>

                {showComponent}

                <button onClick={this.handleChange}> Afficher/Cacher </button>
                
            </div>
        );
    }
}

export default Montage;