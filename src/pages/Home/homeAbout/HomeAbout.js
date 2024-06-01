import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useRef, useEffect } from 'react';
import "../homeAbout/homeabout.css";
import {  useNavigate } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

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
  const CounterBox = ({ icon, count, label }) => {
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '30px', width: '100%', height: '100%', marginBottom: isMobileView ? '5px' : '0px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }}>
        {icon}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: isMobileView ? '15px' : '17px' }}>{label}</Typography>
        </Box>
      </Box>
    );
  };

  const DividerBox = () => {
  
    return (
      <Box sx={{ width: isMobileView ? '100%' : '3px', height: isMobileView ? '4px' : '100%', backgroundColor: 'white', borderRight: '3px solid white' }} />
    );
  };


  return (
    <Container ref={componentRef}>
      <Box sx={{ marginTop: '30px', display: 'flex',alignItems:'center', flexDirection:isMobileView?"column":"row", width: '100%', height:isMobileView?"600px":"400px", justifyContent: 'space-evenly' }}>
        <Box>
          <img style={{ width:isMobileView?"270px":"350px",height:'auto', borderRadius: '30px' }} src="/assets/backwhat.webp" alt='logo' />
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
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Box sx={{marginTop: '20px', display: 'flex', flexDirection: isMobileView ? 'column' : 'row', backgroundColor: '#212529', color: 'white', width: '70%', height: isMobileView ? '350px' : '110px', borderRadius: '30px', alignItems: 'center', justifyContent: 'center',margin:'20px',overflow:'hidden',lineHeight:'0px'}}>
      <CounterBox icon={<XIcon sx={{ fontSize: '50px', fontWeight: '700' }} />} label='Twitter' />
      <DividerBox />
      <CounterBox icon={<InstagramIcon sx={{ fontSize: '50px', fontWeight: '700' }} />} label= 'Instagram'  />
      <DividerBox />
      <CounterBox icon={<LinkedInIcon sx={{ fontSize: '50px', fontWeight: '700' }} />}  label= 'Linkedln'  />
      </Box>
      </Box>
    </Container>
  );
};

export default HomeAbout;
