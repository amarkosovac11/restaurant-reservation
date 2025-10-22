import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Intro, SpecialMenu, Gallery2 } from './container';

import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs /> 
    <SpecialMenu />
    
    <Intro />
    
    <Gallery />
{/*     <Gallery2 /> 
 */}   {/* <Gallery3 />  */}
    <FindUs />
    <Footer />   

  </div>
);

export default App;
