import React, { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LandscapeIcon from '@mui/icons-material/Landscape';
import Moon1 from '../Moon/Moon1.jpeg';
import Moon2 from '../Moon/Moon2.jpeg';
import Moon3 from '../Moon/Moon3.jpeg';
import Moon4 from '../Moon/Moon4.jpeg';
import Moon5 from '../Moon/Moon5.jpeg';
import Moon6 from '../Moon/Moon6.jpeg';

import './Join.css';

const MoonGallery = () => {
  const [showGalleryDescription, setShowGalleryDescription] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const toggleGalleryDescription = () => {
    setShowGalleryDescription(prev => !prev);
  };

  const handleExploreClick = () => {
   
    navigate('/Space');
  };


  const moonImages = [Moon1, Moon2, Moon3, Moon4, Moon5, Moon6];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % moonImages.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [moonImages]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#0c0c0c" 
      color="#eee"
      position="relative"
    >
      <div className="moonlit-glow"></div>
      <Box width="80%" maxWidth="800px" zIndex="1">
        
        <Button
          onClick={toggleGalleryDescription}
          variant="outlined"
          color="primary"
          startIcon={<LandscapeIcon />}
          sx={{
            '&:hover': {
              bgcolor: '#1e1e1e',
              borderColor: '#1e1e1e', 
              color: '#fff', 
            },
            transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
          }}
        >
          <Typography variant="h6">Moon Gallery</Typography>
        </Button>

        {/* Gallery description */}
        {showGalleryDescription && (
          <div  style={{ marginTop: '1rem' }}>
            <Typography className='ta' variant="h6" style={{ color: '#ddd' }}>Feel the Lunar Magic</Typography>
            <Typography className='ta' style={{ color: 'wheat' }}>
              Let the moon's serene glow captivate your soul. Immerse yourself in the tranquil beauty of lunar landscapes and discover the wonders of our celestial neighbor. Embark on a cosmic journey through these mesmerizing images captured under the moon's gentle embrace.
            </Typography>


            <div style={{ marginTop: '1rem' }}>
              <Typography className='ta' variant="body1" style={{ color: 'wheat' }}>Gaze upon the awe-inspiring majesty of the lunar surface.</Typography>
              <Typography className='ta' variant="body1" style={{ color: 'wheat' }}>Embark on a voyage of discovery through the cosmos.</Typography>

            </div>

            <div style={{ marginTop: '1rem' }}>
              <img
                src={moonImages[currentImageIndex]}
                alt="Moon Gallery"
                style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }}
              />
            </div>


            <Button
              onClick={handleExploreClick}
              variant="contained"
              color="primary"
              style={{ marginTop: '1rem' }}
              sx={{
                '&:hover': {
                  bgcolor: '#1976D2', 
                  borderColor: '#1976D2', 
                  color: '#fff', 
                  boxShadow: '0px 0px 10px #fff', 
                },
                transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              Explore Space
            </Button>

      
            <Typography className='ta' variant="body1" style={{ marginTop: '1rem', color: '#ccc' }}>Experience the wonders of the cosmos!</Typography>
            <Typography className='ta' variant="body1" style={{ marginTop: '0.5rem', color: '#ccc' }}>Discover the beauty hidden in the lunar landscape!</Typography>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default MoonGallery;
