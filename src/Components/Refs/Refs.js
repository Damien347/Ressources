import React, { Component } from 'react';

import Enfant from './Enfant';

class Refs extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            value: ''
        }

        this.myTitle = React.createRef();
        this.inputRed = React.createRef();
        this.myInput = React.createRef();


        this.forwardRefInput = React.createRef();
        
    }

    /*les refs permettent de faire reference a un element, cela evite de passer par le dom avec document.getelementbyid par exemple */
    

    handleChange = ()=> {
        this.setState({
            value: this.inputRed.current.value //le ref va remplacer l'event object, on accede donc plus a target mais a current
        })
    }


    componentDidUpdate() {
        this.myTitle.current.style.color = "red";
    }


    componentDidMount() {
        this.myInput.current.focus();
    }




    handleClick = ()=> {
        this.forwardRefInput.current.focus()
    }


    render() {
        return (
            <div>
                <h1 ref={this.myTitle}> Valeur : {this.state.value} </h1>
                <input ref={this.inputRed} type='text' value={this.state.value} onChange={this.handleChange} placeholder='le texte sera rouge'/>

                <input ref={this.myInput} placeholder='focus activé'/>

                <hr />
{/* Ici on passe un ref dans un composant Enfant, grace a forwardRef*/}
                <Enfant ref={this.forwardRefInput} />
                <button onClick={this.handleClick}> Valider </button>
            </div>
        );
    }
}

export default Refs;