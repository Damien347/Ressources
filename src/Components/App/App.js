import React, { Component } from 'react';
import './App.css';


import Tests from '../Test/Tests';
import ComponentClass from '../StateAndProps/ComponentClass';
import Events from '../Events/Events';
import ChangeState from '../StateAndProps/ChangeState';
import Array from '../StateAndProps/Array';
import Parent from '../PropsFunction/Parent';

class App extends Component {


  /* je definis un state */
  state = {
    titre: "Catalogue"
  }

  render() {
    return (

      <div className="App" >

        {/*j'accede au state via un props que je nomme titre */}
        <ComponentClass titre={this.state.titre} />
        <hr />


        <Events />
        <hr />


        <ChangeState />
        <hr />


        <Array/>
        <hr />



        <Parent />
        <hr />

        

        <Tests test="propstest" />

      </div>
    );
  }


}

export default App;
