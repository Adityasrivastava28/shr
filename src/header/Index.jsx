import React, { useEffect, useState } from 'react';
import './Index.css';
import Poet from './Poet.jpeg';

const Index = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {

    setImageLoaded(true);
    
    setTimeout(() => {
      setTextVisible(true);
    }, 500); 
  }, []);

  return (
    <div className='Main-head'>
      <div className={`Head-image ${imageLoaded ? 'animate-image' : ''}`}>
        <img src={Poet} alt="Your Image" />
      </div>
      <div className={`introduction ${textVisible ? 'show' : ''}`}>
        <p className="intro-text">Hey there, I'm Shravani Rao, a poetess studying at IIIT-Delhi. My world revolves around words and imagination. Through my poetry, I invite you to embark on a journey where reality and fantasy intertwine. Welcome to my realm of creativity</p>
      </div>
    </div>
  );
}

export default Index;
