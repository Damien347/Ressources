import React, { Component } from 'react';

import './Events.css';

class NoCopy extends Component {


    constructor(props) {
        super(props);
        this.state = {
            clickHere: "cliquez ici",
            shots: 0
        }
    }
    

    /* fonction qui affiche une alerte a l'utilisateur */
    noCopy = () => {
        alert('merci de ne pas copier le texte');
    }



    /* fonction qui change le style quand on passe par dessus le titre h2 mouse over me*/
    mouseChangeUpercaseRed = (e) => {


        /* si une classe uppercaseRed existe, alors tu la supprime, sinon, tu l'ajoute */
        if (e.target.classList.contains('uppercaseRed')) {
            e.target.classList.remove('uppercaseRed');
        } else {
            e.target.classList.toggle('uppercaseRed');
        }

   }



   
   /* fonction qui ajoute 1 a chaque click sur le bouton */
   addOneShot = () => {
    this.setState((state)=> {
        return {shots: state.shots + 1}
        
    })
   }

    render() {
        return (
            <div>
                <h1> Events </h1>
                {/*A l'evenement oncopy, la methode noCopy se charge, ce qui affiche une alerte pour inciter a ne pas copié */}
                <p onCopy={this.noCopy}> Ce texte affiche une alerte pour indiquer
                 a l'utilisateur de ne pas copier le texte, le texte n'est pas protéger en soi </p>

                {/* on applique la fonction mouseChangeUppercaseRed grace au 
                    onMouseOver qui declanche le changement de style*/}
                <h2 onMouseOver={this.mouseChangeUpercaseRed}> Mouse over me </h2>

               <button onClick={this.addOneShot}> {this.state.clickHere} </button>
            <p> {this.state.shots} </p>


            </div>
        );
    }
}

export default NoCopy;