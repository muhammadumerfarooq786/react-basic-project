import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Body from './Components/body';
import Details from './Components/details';
import Cards from './Components/Cards';
import ContactUs from './Components/Pages/ContactUs'
import Home from './Components/Pages/Home'
import Services from './Components/Pages/Services'
import Products from './Components/Pages/Products'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

const App =()=>{
  return(
    <div>
      <Router>

        <Navbar/>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/contactus" exact component={ContactUs}/>

        </Switch>

      </Router>









    </div>
  );
};

export default App;
