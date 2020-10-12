import React, { Component } from 'react';

class Refs extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            value: ''
        }

        this.myTitle = React.createRef();
        this.inputRed = React.createRef();
        this.myInput = React.createRef();
        
    }
    

    handleChange = ()=> {
        this.setState({
            value: this.inputRed.current.value
        })
    }


    componentDidUpdate() {
        this.myTitle.current.style.color = "red";
    }


    componentDidMount() {
        this.myInput.current.focus();
    }


    render() {
        return (
            <div>
                <h1 ref={this.myTitle}> Valeur : {this.state.value} </h1>
                <input ref={this.inputRed} type='text' value={this.state.value} onChange={this.handleChange} placeholder='le texte sera rouge'/>

                <input ref={this.myInput} placeholder='focus activé'/>
            </div>
        );
    }
}

export default Refs;