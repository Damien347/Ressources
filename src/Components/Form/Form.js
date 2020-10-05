import React, { Component } from 'react';

import Car from './Car';

class Form extends Component {
    state = {
        username: '',
        color:'',
        colors: ["", "red", "blue", "green", "black", "pink"]
    }

    handlePseudo = (e) => {
        this.setState({
            username: e.target.value
        })

    }

    handleColor = (e)=> {
        this.setState({
            color: e.target.value
        })

    }


    render() {
        return (
            <div>
                {/* on passe les props color et height au composant Car 
                pour modifier le svg */}
                <Car color="red" height="400" />
                <h1> Commentaires </h1>
                <form>

                    <div>
                        <label> Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo} />
                    </div>
                    <div>
                        <label> Couleur </label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {this.state.colors.map((color, index) => {
                                return (
                                    <option key={index} value={color}> {color} </option>
                                )
                            }) }
                        </select>
                    </div>

                </form>
            </div>
        );
    }
}

export default Form;