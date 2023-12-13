import React from 'react';
import './Demos.css';
import pickle from './../img/pickle.gif';
import firehands from './../img/firehands.gif';
import firebreath from './../img/firebreath.gif';
import gummybear from './../img/gummybear.gif';
import burnchip from './../img/burnchip.gif';
import pumpkin from './../img/pumpkin.gif';
import Hballoon from './../img/Hballoon.gif';
import Mgribbon from './../img/Mgribbon.gif';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Demos = () => {
  var settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 4,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1
        }
      }
    ]
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
