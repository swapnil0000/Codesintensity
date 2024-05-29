import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import "../banner/banner.css";
import { useLocation } from 'react-router-dom';

const Banner = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box sx={{ marginTop: '0px', border: 'none', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '100%',height:isMobileView?"400px":"600px",  objectFit: 'cover',backgroundColor:'black' }}>
      
      </Box>
      <Box sx={{ position: 'absolute', bottom:'30%', transform: 'translate(-50%, 100%)', color: 'white', fontSize: '24px', animation: 'moveUp 3s forwards',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
        <Typography sx={{ fontSize:isMobileView?"20px":"50px", width:isMobileView?"350px":"950px", fontFamily: 'Montserrat', background: `-webkit-linear-gradient(150deg, #006400, #ffffff, #0000)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '700', textAlign: 'center' }}>
          Welcome to <span style={{ fontSize:isMobileView?"30px":"100px", fontWeight: '900', fontFamily: 'Montserrat' }}>CODESINTENSITY</span>
          <span style={{ fontSize:isMobileView?"15px":"25px", fontWeight: '900' }}> We Craft Your Success Story in Every Pixel and Byte.</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
