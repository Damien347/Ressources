import React from 'react';


/*destructuring */
const Singers = ({name, age})=> {

    /* La methode habituel consiste a mettre props en parametre au lieu de {name, age} et mettre dans des variables
    var name = props.name;
    var age = props.age; */
    

    /* autre methode de destructuring : mettre props en parametre au lieu de {name, age}
    const {name, age} = props; */
    
    
    return (
        <div>
            <p> Chanteur: {name} {age} </p>
        </div>
    )

}


export default Singers;