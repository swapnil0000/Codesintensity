import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import contact from "../Contact/contact.mp4"
import Icon from './icons';
import Form from './Form';
import contactimg from "../Contact/contact.jpg"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import contactimgage from "../Contact/background.jpg"
const Contact = () => {
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box >
    <Box sx={{  border: 'none', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <video autoPlay muted loop style={{ width: '100%',height:isMobileView?"400px":"600px", objectFit: 'cover' }}>
      <source src={contact} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
    <Box sx={{ position: 'absolute', bottom:isMobileView?"35%":"40%", transform: 'translate(-50%, 100%)', color: 'white', fontSize: '24px', animation: 'moveUp 3s forwards' }}>
      <Typography sx={{ fontSize:isMobileView?"40px":"100px", width: '950px', fontFamily: 'Montserrat', fontWeight: '700', textAlign: 'center' }}>GET IN TOUCH</Typography>
    </Box>
  </Box>
   <Container sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',flexDirection:'column',marginTop:'20px'}}>
    <Box  sx={{width:'100%',backgroundImage: `url(${contactimgage})`, backgroundSize: 'cover',height:'auto',display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'space-evenly',padding:'10px',borderRadius:'20px'}}>
     <img style={{width:'500px',height:isMobileView?"300px":"400px",borderRadius:'20px'}} src={contactimg}/>
     <Form/>

     <Box>
      
     </Box>
    </Box>
    <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'space-around',width:'100%',margin:'20px'}}>
     <Typography sx={{color:'#666',fontSize:isMobileView?"20px":"30px",fontWeight:'900'}}><CallIcon sx={{marginRight:'10px',color:'#f91942',fontSize:'30px'}}/>+91 6386455982</Typography>
     <Typography sx={{color:'#666',fontSize:isMobileView?"20px":"30px",fontWeight:'900'}}><EmailIcon sx={{marginRight:'10px',color:'#f91942',fontSize:'30px'}}/>codesintensity@gmail.com</Typography>

    </Box>
   </Container>
  </Box>
  )
}

export default Contact

// <Box>
// <Typography sx={{fontSize:isMobileView?"25px":"50px",fontWeight:'900',color:'#666',fontFamily:'Montserrat'}}>Connect with <span style={{color:'#f91942'}}>Social media</span></Typography>
// <Icon/>
// </Box>