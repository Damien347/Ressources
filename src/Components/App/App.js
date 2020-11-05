import React, { Component } from 'react';
import './App.css';

import ErrorBoundary from '../Error/ErrorBoundary';


import Tests from '../Test/Tests';
import ComponentClass from '../StateAndProps/ComponentClass';
import Events from '../Events/Events';
import ChangeState from '../StateAndProps/ChangeState';
import Array from '../StateAndProps/Array';
import Parent from '../PropsFunction/Parent';
import FragmentMethode from '../Fragment/FragmentMethode';
import Display from '../Destructuring/Display';
import Form from '../Form/Form';
import StyledComponents from '../Styles/StylesComponents';
import Montage from '../LifeCycle/Montage/LifeCycle';
import ParentComponent from '../PureComponents/ParentComponent';
import Modal from '../Portail/Modal';
import Refs from '../Refs/Refs';
import Apex from '../Higher-Order/Apex';
import TestError from '../Error/TestError';
import Combat from '../RenderProps/Combat';


import Menu from '../Menu/Menu';
import Gallery from '../Menu/Gallery';
import FAQ from '../Menu/FAQ';
import Home from '../Menu/Home';
import Construct from '../Menu/Construct';
import ErrorPage from '../Menu/ErrorPage';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {


  /* je definis un state */
  state = {
    titre: "Catalogue",
  }

  render() {
    return (

      <div className="App" >




        <BrowserRouter >
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Gallery" component={Gallery} />
            <Route path="/Faq" component={FAQ} />
            <Route path="/Construct" component={Construct} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>







        {/*j'accede au state via un props que je nomme titre */}
        <ComponentClass titre={this.state.titre} />
        <hr />


        <Events />
        <hr />


        <ChangeState />
        <hr />


        <Array />
        <hr />



        <Parent />
        <hr />



        <FragmentMethode />
        <hr />

        <Display />
        <hr />


        <Form />
        <hr />



        <StyledComponents />
        <hr />



        <Montage name="phase Montage terminé " />
        <hr />



        <ParentComponent />
        <hr />



        <Modal />
        <hr />


        {/* 
        <Refs />
        <hr /> */}


        <Combat />


        <ErrorBoundary> <TestError /> </ErrorBoundary>





        <Apex />

        <Tests test="propstest" />

      </div>
    );
  }


}

export default App;
