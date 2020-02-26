import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './compoment/pages/Nav'
import Footer from './compoment/pages/Footer'
import  $ from 'jquery';


import './App.css';
import Headergeneral from './compoment/pages/Headergeneral';
import Final from './compoment/pages/Final';
import Second from './compoment/pages/Second';
import Event from './compoment/pages/actualite/Event';
import Historique from './compoment/pages/home/Historique';



function App() {
  return (
    
    $(function(){
      var navbar = $('.navbar');
  
      $(window).scroll(function() {
         if($(window).scrollTop() <= 150) {
           $('nav').removeClass('scrolled');
         }
        else {
          $('nav').addClass('scrolled');
        }
      });
  }),
  
  
    <div className="App">
      <Nav />
       <Second />
      <Historique />
     
     
    </div>
  );
}

export default App;
