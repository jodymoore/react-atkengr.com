import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Product from './components/Product';

import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Home from './components/Home';

import Footer from './components/Footer';
import Modal from './components/Modal';
class App extends Component {
  render() {
     return (
       <React.Fragment>  

         <Navbar />
         <Switch >
           <Route exact path="/" component={Home} />
           <Route path="/products" component={ProductList} />
           <Route path="/details" component={Details} />
           <Route path="/cart" component={Cart} />
           <Route component={Default} />
         </Switch>
         <Modal />

         <Footer />
       </React.Fragment>
      );

  }
 
}

export default App;
