//Demos.js
import React, { useEffect, useState } from 'react';
import './Demos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pickle from './../img/pickle.gif';
import firehands from './../img/firehands.gif';
import firebreath from './../img/firebreath.gif';
import gummybear from './../img/gummybear.gif';
import burnchip from './../img/burnchip.gif';
import pumpkin from './../img/pumpkin.gif';
import Hballoon from './../img/Hballoon.gif';
import Mgribbon from './../img/Mgribbon.gif';

const Demos = () => {
  const [isCarouselDisabled, setIsCarouselDisabled] = useState(false);

  const disableCarouselBreakpoint = 689;

  useEffect(() => {
    const handleResize = () => {
      setIsCarouselDisabled(window.innerWidth <= disableCarouselBreakpoint);
    };

    window.addEventListener('resize', handleResize);

    // Initial check on load
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [disableCarouselBreakpoint]);

  if (isCarouselDisabled) {
    return (
      <div className='demos' id='demos'>
        <div className='demo-gif-container'>
          <img alt='Me on Fire' src={firehands} className='demo-gif' />
          <img alt='Electrocuting Pickle' src={pickle} className='demo-gif' />
          <img alt='Gummy Bear Redox' src={gummybear} className='demo-gif' />
          <img alt='Me Breathing Fire' src={firebreath} className='demo-gif wide-gif' />
          <img alt='Exploding Pumpkin' src={pumpkin} className='demo-gif' />
          <img alt='Exploding Hydrogen Balloon' src={Hballoon} className='demo-gif' />
          <img alt='Burning Chip Thermo' src={burnchip} className='demo-gif' />
          <img alt='Burning Magnesium' src={Mgribbon} className='demo-gif' />
        </div>
      </div>
    );
  }

  const settings = {
    centerMode: false,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 4,
    variableWidth: true,

  };

  return (
    <div className='demos'>
      <Slider {...settings}>
        <div>
          <img alt='Me on Fire' src={firehands} className='demo-gif' />
        </div>
        <div>
          <img alt='Electrocuting Pickle' src={pickle} className='demo-gif' />
        </div>
        <div>
          <img alt='Gummy Bear Redox' src={gummybear} className='demo-gif' />
        </div>
        <div>
          <img alt='Me Breathing Fire' src={firebreath} className='demo-gif wide-gif' />
        </div>
        <div>
          <img alt='Exploding Pumpkin' src={pumpkin} className='demo-gif' />
        </div>
        <div>
          <img alt='Exploding Hydrogen Balloon' src={Hballoon} className='demo-gif' />
        </div>
        <div>
          <img alt='Burning Chip Thermo' src={burnchip} className='demo-gif' />
        </div>
        <div>
          <img alt='Burning Magnesium' src={Mgribbon} className='demo-gif' />
        </div>
      </Slider>
    </div>
  );
};

export default Demos;
