import React, { Component, Fragment } from 'react';

class AddHits extends Component {

    state = {
        hits: 0
    }


    
    addOne = () => {
        this.setState((prevState) => {
            return {
                hits: prevState.hits + 1
            }
        })

    }



    render() {
        return (
            <Fragment>

                {/* On recupère le props render auquel on y attribue nos paramètres, 
                on recupère ce props ainsi que ses parametres depuis Combats.js */}
                { this.props.render(this.state.hits, this.addOne) }
            </Fragment>
        );
    }
}

export default AddHits;