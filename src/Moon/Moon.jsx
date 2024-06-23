import React from 'react';
import './Moon.css';
import StarIcon from '@mui/icons-material/Star';
import Image from '../header/Poet.jpeg'; 
import Moon1 from './Moon1.jpeg'
import Moon2 from './Moon2.jpeg'
import Moon3 from './Moon5.jpeg'
import Moon4 from './Moon6.jpeg'



const Moon = () => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      stars.push(
        <StarIcon
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 1}s`, 
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className='black'>
      <div class="main">
        <div className="moon">
          <img  className='mn 'src={Moon1} alt="" />
        </div>
        <div className="small-images">
          <img src={Moon4} alt="Photographer" className="small-image" />
        </div>

        <div className="small-imagesa">
          <img src={Moon2} alt="Photographer" className="small-image" />
        </div>

        <div className="small-imagesaa">
          <img src={Moon3} alt="Photographer" className="small-image" />
        </div>

        <div className="small-image-container">
          <img src={Image} alt="Photographer" className="small-image" />
        </div>
      


        {/* <div className="small-image-container bottom-left">
          <img src={Image} alt="Photographer" className="small-image" />
        </div> */}
        {/* <div className="small-image-container bottom-right">
          Add image for bottom right if needed
        </div>
        <div className="small-image-container center">
          Add image for center if needed
        </div> */}
        <div>
          Hey, I am the moon!
        </div>
      </div>
    </div>
  );
}

export default Moon;
