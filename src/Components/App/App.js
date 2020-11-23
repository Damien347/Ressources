import React, { Component } from 'react';
import './App.css';

/* gestion des erreurs */
import ErrorBoundary from '../Error/ErrorBoundary';


/* Import Components */
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
import Arbre from '../MyContext/Arbre';


/* import Components for Menu (react router dom) */
import Menu from '../Menu/Menu';
import Gallery from '../Menu/Gallery';
import FAQ from '../Menu/FAQ';
import Home from '../Menu/Home';
import Construct from '../Menu/Construct';
import Profile from '../Menu/Profile';
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




        <BrowserRouter > {/* Doit contenir tout le code, la div parent peut etre remplacé par browserRouter dans le cas ou rien ne se trouve en dehors */}
          <Menu /> {/* Ce composant contient le Menu auquel on fera les liens via Link to */}
          <Switch> {/* Switch permet de ne pas recharger la page, toutes les routes doivent s'y trouver dedans */}
            <Route exact path="/" component={Home} /> {/* Exact permet d'afficher le composant home que dans home et pas dans chaque composants */}
            <Route path="/Gallery" component={Gallery} />
            <Route path="/Faq" component={FAQ} />
            <Route path="/Construct" component={Construct} />{/*Page en construction, travail de la redirection auto */}

            <Route path="/users/:profileId" component={Profile} />
            <Route component={ErrorPage} /> {/* quand une url est entré, chaque path va etre etudier, si le premier ne correspond pas, elle passe au suivant, et ainsi dessuite jusqu'a arriver a errorPage */}
          </Switch>
        </BrowserRouter>


        <Arbre />


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


{/* Une erreur est creer dans testError, grace a errorboundary l'erreur n'est que local, le site n'est pas cassé completement */}
        <ErrorBoundary> <TestError /> </ErrorBoundary>





        <Apex />
     

        <Tests test="propstest" />

      </div>
    );
  }


}

export default App;
