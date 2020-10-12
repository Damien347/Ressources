import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Portail.css';




class Portail extends Component {

    constructor(props) {
        super(props);


        /*on creer une div que l'on place dans portailContainer */
        this.portailContainer = document.createElement('div'); 

        document.body.appendChild(this.portailContainer)
    }


    componentWillUnmount() { //une fois le portail fermé, le noeud enfant est supprimé du dom
        document.body.removeChild(this.portailContainer)

    }

    render() {

        /*ReactDom.createPortal creer un portail, cela sert a sortir du root principale App */
        return ReactDOM.createPortal( //besoin de 2 parametres, l'element en question et l'endroit(ici portailContainer)
            /*ici est notre modal qui sera stylisé en css via la classe modal */
            <div className='modal' onClick={this.props.close}>
                <div>
                    <p> Modal dans un Portail </p>
                    <button> Close </button>
                </div>
            </div>, this.portailContainer
        );
    }
}

export default Portail;