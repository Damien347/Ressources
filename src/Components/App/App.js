import React, { Component } from 'react';
import './App.css';



import ComponentClass from '../StateAndProps/ComponentClass';
import Events from '../Events/Events';

class App extends Component {


  /* je definis un state */
  state = {
    titre : "Catalogue"
  }

  render() {
    return(

      <div className = "App" >

        {/*j'accede au state via un props que je nomme titre */}
        <ComponentClass titre={this.state.titre} />



        <Events />

      </div>
    );
  }
    
  
}

export default App;
