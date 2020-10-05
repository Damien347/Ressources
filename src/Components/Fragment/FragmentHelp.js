import React from 'react';

/*on recupere les props ici, que l'on met dans un const contact.*/
const FragmentHelp = ({firstname, lastname, age}) => {

    /* on met une condition si l'age est renseigné ou non, on affiche l'age ou age non renseigné
    les backtips `` remplace les balises <p> pour ne pas qu'elle soit visible dans le tableau dans les td*/
    const contactInfos = age ? (`Age: ${age} `)
        :
        (`Age: non renseigné`);


        /* condition si firstname existe, 
        alors tu retourne les element prenom nom et age qui se trouve dans une const */
        if(firstname){
            return(
                <tr>
                    <td>Prenom: {firstname}</td> {/* les <p></p> on etait supprimé, mais elle peuvent etre accepté*/}
                    <td>Nom: {lastname}</td>
                    <td>{contactInfos}</td>
                </tr>
            )
        }else { /* sinon tu retourne fiche imcomplete si firstname n'existe pas */
            return (
                <p> Fiche imcompléte </p>
            )
        }
}

export default FragmentHelp;