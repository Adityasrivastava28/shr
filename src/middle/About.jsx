import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import './About.css';
import Project from '../header/Poems.jpg';
import Poem from '../header/work2.jpg';
import travel from '../Moon/Moon1.jpeg'

const About = () => {
  const navigate=useNavigate()
  const handleRoute=()=>{
navigate('/Poems')

  }

  const handleMoon=()=>{
navigate('/Gallery')

  }

  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    const images = document.querySelectorAll('.Imgs');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = window.prevScrollY || 0;

      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      window.prevScrollY = currentScrollY;

      images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (imageTop < windowHeight * 0.75 && scrollDirection === 'down') {
          image.classList.add('animate');
        } else {
          
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);

  return (
    <div className='About-container'>
      <div className='Child'>
        <img className='Imgs' src={Poem} alt="" />
        <p className="sherif">Projects</p>
      </div>
      <div className='Child'>
        <img className='Imgs' src={Project} alt="" onClick={handleRoute} />
        <p className="sherif">Poems</p>
      </div>
      <div className='Child'>
        <img className='Imgs' src={travel} alt=""  onClick={handleMoon}/>
        <p className="sherif">Photography</p>
      </div>
    </div>
  );
}

export default About;
