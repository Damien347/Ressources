import React, { Component } from 'react';

import Portail from './Portail';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false // on definit le modal false au chargement de la page
        }
    }

/* on change le state pour afficher le modal au lancement de la methode handleShow (au clic du bouton) */
    handleShowModal = ()=> {
        this.setState({
            showModal: true
        })
    }

/* on change le state pour fermer le modal, on va passer cette methode en props de <Portail /> */
    handleHide =()=> {
        this.setState({
            showModal: false
        })
    }
    
    render() {
/* si showmodal est 'true', alors tu affihce le composant <Portail />, sinon null */
        const modal = this.state.showModal ? (<Portail close={this.handleHide}/>) : null;
        return (
            <div>
                <button onClick={this.handleShowModal}> Show Modal </button>
                {modal}
            </div>
        );
    }
}

export default Modal;