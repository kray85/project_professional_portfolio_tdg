/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-quotes */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import './Header1.scss';

// eslint-disable-next-line no-unused-vars
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header1 = () => (
  <>
    <main
      className='main'
      id='home'
    >
      <section className='section banner banner-section'>
        <div className='container banner-column'>
          <img
            className='banner-image'
            src='https://i.ibb.co/vB5LTFG/Headphone.png'
            alt='banner'
          />
          <div className='banner-inner'>
            <h1 className='heading-xl'>
              Hey
              <span className='heading-span'> I'm Kendal</span>
            </h1>
            <p className='banner-p_text'>
              <i>a Software Engineer</i>
            </p>
            <p className='paragraph'>
              Enjoy award-winning stereo beats with wireless listening freedom and sleek, streamlined with premium padded and delivering first-rate
              playback.
            </p>
            {/* <button className='btn btn-darken btn-inline'>
            Discover Now <i className='bx bx-right-arrow-alt' />
          </button> */}
          </div>
        </div>
      </section>
    </main>
  </>
);

export default AppWrap(Header1, 'home');
