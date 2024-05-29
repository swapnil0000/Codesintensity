import React from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import Form from './Form';
import gmail from '../Contact/gmail.png';
import Icon from '../Icons/Icons';
import CallIcon from '@mui/icons-material/Call';
import { useSpring, animated } from '@react-spring/web';

const Contact = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

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
    <Container sx={{marginTop:isMobileView?"100px":"50px",marginBottom:'80px'}}>
      <Box sx={{ display: 'flex', flexDirection: isMobileView ? 'column' : 'row', justifyContent: 'space-around', marginBottom: '50px' }}>
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
            <Box>
              <Icon />
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
    </Box>
  );
}

export default Contact;
