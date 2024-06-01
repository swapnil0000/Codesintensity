import React from 'react';
import { Box, Container, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import Form from './Form';
import gmail from '../Contact/gmail.png';
import Icon from '../Icons/Icons';
import CallIcon from '@mui/icons-material/Call';
import { useSpring, animated } from '@react-spring/web';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
const Contact = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

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


  // Animation for the left side
  const leftSpring = useSpring({
    from: { transform: 'translateX(-100%)', opacity: 0 },
    to: { transform: 'translateX(0%)', opacity: 1 },
    config: { duration: 1500 },
    delay: 300,
  });

  // Animation for the right side (form)
  const rightSpring = useSpring({
    from: { transform: 'translateX(100%)', opacity: 0 },
    to: { transform: 'translateX(0%)', opacity: 1 },
    config: { duration: 1500 },
    delay: 900,
  });

  return (
    <Box sx={{backgroundColor:'black'}}>
    <Container sx={{marginTop:isMobileView?"100px":"50px"}}>
      <Box sx={{ display: 'flex', flexDirection: isMobileView ? 'column' : 'row', justifyContent: 'space-around', marginBottom: '20px' }}>
        <animated.div style={leftSpring}>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:isMobileView?"center":""}}>
            <Typography sx={{ fontSize:isMobileView?"30px":"50px", fontFamily: 'montserrat', color: '#666', fontWeight: '900' }}>
              Connect <span style={{ color: '#f91942' }}> With Us</span>
            </Typography>
            <Typography sx={{ fontSize:isMobileView?"15px":"25px", fontFamily: 'roboto', color: '#555555', fontWeight: '600' }}>
              Do not hesitate to contact us, we will answer you!
            </Typography>
            <Typography sx={{ fontSize: '25px', color: 'GrayText', fontFamily: 'montserrat', fontWeight: '800', marginTop: '40px' }}>
              Quick Connects
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
              <img style={{ width: '20px', height: '20px' }} src={gmail} alt="gmail" />
              <Typography sx={{ fontSize: '19px', fontFamily: 'roboto', fontWeight: '700', color: '#555555' }}>
                codesintensity@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
              <CallIcon sx={{ color: 'red' }} />
              <Typography sx={{ fontSize: '15px', fontFamily: 'roboto', fontWeight: '800', color: '#555555' }}>
                +91-7017541634
              </Typography>
            </Box>
            
          </Box>
        </animated.div>
        <animated.div style={rightSpring}>
          <Box>
            <Form />
          </Box>
        </animated.div>
        
      </Box>
    </Container>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Box sx={{marginTop: '20px', display: 'flex', flexDirection: isMobileView ? 'column' : 'row', backgroundColor: '#212529', color: 'white', width: '70%', height: isMobileView ? '350px' : '110px', borderRadius: '30px', alignItems: 'center', justifyContent: 'center',margin:'20px',overflow:'hidden',lineHeight:'0px'}}>
    <CounterBox icon={<XIcon sx={{ fontSize: '50px', fontWeight: '700' }} />} label='Twitter' />
    <DividerBox />
    <CounterBox icon={<InstagramIcon sx={{ fontSize: '50px', fontWeight: '700' }} />} label= 'Instagram'  />
    <DividerBox />
    <CounterBox icon={<LinkedInIcon sx={{ fontSize: '50px', fontWeight: '700' }} />}  label= 'Linkedln'  />
    </Box>
    </Box>
    <Box sx={{cursor:'pointer'}}>
         <Link to='https://maps.app.goo.gl/aaBwrsw52r3CdMnz6' target="_blank" rel="noopener noreferrer">
          <img style={{width:'100%',height:'auto'}} src='/assets/map.png' alt='map'/>
          </Link>
        </Box>
    </Box>
  );
}

export default Contact;
