import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import  SubHeading  from '../../components/SubHeading/SubHeading';
import { images } from "../../constants";
import './Gallery2.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.bg, images.logo, images.knife, images.findus];


const Gallery2 = () => {


    const scrollRef = React.useRef(null);


    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        }
        else {
            current.scrollLeft += 300;
        }
    }


    return (
        <div className='app__gallery2' id='gallery'>
            
            <div className='app__gallery2-content'>
                
                <h1 className='headtext__cormorant'>Photo Gallery</h1>
                <p className='p__opensans' style={{ color: "#AAA", marginTop: "2rem", marginBottom: "2rem" }}>AA AAA AAA AAAA AAA AAA AAA AAAA AAA AAAA AAA AAAAA AA A AA A AA AA A AA</p>
                
            </div>


            <div className='app__gallery-images'>
                    <div className='app__gallery-images_container' ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                      <div className='app__gallery-images_card flex__center' key={'gallery_image-${index+1}'}>
                      <img src={image} alt="gallery" />
                      <button type='button' className='custom__button'>View All</button>
                      </div>

                    ))}
                    </div>
            
                    <div className='app__gallery-images_arrows'>
                      <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
                      <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
            
                    </div>
                  </div>
        </div>
    )
}

export default Gallery2;
