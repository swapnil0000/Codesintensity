import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import tech from "../TechStackUsed/tech.png"
const TechStack = () => {
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Container sx={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'space-between',width:'100%',marginBottom:'20px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
        <Typography sx={{fontSize:isMobileView?"30px":"40px",fontWeight:'900',fontFamily:'montserrat',color:'#666',textAlign:isMobileView?"center":"start"}}>TOOLS <span style={{color:'#f91942'}}>WE USE!</span></Typography>
        <Typography sx={{fontSize:'20px',textAlign:isMobileView?"center":""}}>We Develop on the bases of your requirements and also changes done according to you  </Typography>
        </Box>    
        <Box>
        <img style={{width:'600px',height:'auto',borderRadius:'20px'}} src={tech} alt='tech'/>
        </Box>
    </Container>
  )
}

export default TechStack