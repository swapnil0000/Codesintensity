import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useRef, useEffect } from 'react';
import "../homeAbout/homeabout.css";
import {  useNavigate } from 'react-router-dom';

const HomeAbout = () => {
  const componentRef = useRef(null);
  

  useEffect(() => {
    const handleScroll = () => {
      const element = componentRef.current;
      const bounding = element.getBoundingClientRect();

      // Check if the component is in the viewport
      if (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        element.classList.add('zoom-effect');
      } else {
        element.classList.remove('zoom-effect');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate=useNavigate();
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container ref={componentRef}>
      <Box sx={{ marginTop: '30px', display: 'flex',alignItems:'center', flexDirection:isMobileView?"column":"row", width: '100%', height:isMobileView?"600px":"400px", justifyContent: 'space-evenly' }}>
        <Box>
          <img style={{ width: '290px', borderRadius: '30px' }} src="/assets/backwhat.webp" alt='logo' />
        </Box>
        <Box sx={{display:'flex',flexDirection:'column'}}>
        <Typography sx={{ fontSize:isMobileView?"30px":"40px", fontFamily: 'Montserrat',color:'#666', fontWeight: '900',textAlign:isMobileView?"start":"start" }}>What are we?</Typography>
          <Typography sx={{maxWidth:isMobileView?"300px":"500px",color:'#666',fontSize:isMobileView?"15px":"17px",textAlign:isMobileView?"start":"start",hyphens:'initial'}}>We are a crew of builders, designers & investors building disruptive products in Web3 and empowering founders along the way We are a crew of builders, designers & investors building disruptive products in Web3 and empowering founders along the way We are a crew of builders, designers & investors. </Typography>

          <button style={{marginTop:'10px'}} className="learn-more" onClick={()=>navigate("/about")}>
          <span className="circle" aria-hidden="true">
            <span  className="icon arrow"></span>
          </span>
          <Typography sx={{textAlign:'start'}} className="button-text">Learn More</Typography>
        </button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomeAbout;
