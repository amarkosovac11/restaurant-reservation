import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
    </div>

    <div className='app__wrapper-content'>

      <p className='p__opensans'>Loasf, Hasfk aSBfah Str, 9888, asfii</p>
      <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
      <p className='p__opensans'>Mon - Fri: 10:00 am - 07:00 pm</p>
      <p className='p__opensans'>Sat: 10:00 am - 07:00 pm</p>

    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
