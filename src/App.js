/* eslint-disable no-unused-vars */
import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  // eslint-disable-next-line jsx-quotes
  <div className='app'>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
