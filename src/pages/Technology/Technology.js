import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import tech from "../Technology/technology.mp4"
import Frontend from './Frontend'
const Technology = () => {
  return ( 
    <Box>
    <Box sx={{  border: 'none', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <video autoPlay muted loop style={{ width: '100%',height:'570px',  objectFit: 'cover' }}>
        <source src={tech} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <Box sx={{ position: 'absolute', bottom:'50%', transform: 'translate(-50%, 100%)', color: 'white', fontSize: '24px', animation: 'moveUp 3s forwards' }}>
        <Typography sx={{ fontSize: '50px', width: '950px', fontFamily: 'Montserrat', fontWeight: '700', textAlign: 'center' }}> <span style={{ fontSize: '40px', fontWeight: '900', fontFamily: 'Montserrat' }}>TECH STACK USED</span>
        </Typography>
      </Box>
    </Box>
    <Container>
     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
     <Typography sx={{fontSize:'40px',fontWeight:'600',color:'white'}}>Web Development</Typography> 
      <Frontend/>
     </Box>
    </Container>
    </Box>
  )
}

export default Technology