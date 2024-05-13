import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Support = () => {
  return (
    <Box sx={{backgroundColor:'black'}}>
    <Typography sx={{color:'#666',fontSize:'50px',fontWeight:'800',fontFamily:'montserrat',textAlign:'center'}}>24*7 <span style={{color:'#f91942'}}>Support</span> </Typography>
    <Container>
     <Typography sx={{fontSize:'25px',color:'#666'}}>Welcome to CodesIntensity's 24/7 customer support page. We are committed to providing assistance around the clock to ensure a seamless experience for our users.</Typography>
     <Box sx={{marginTop:'30px'}}>
     <Typography sx={{color:'#666',fontSize:'25px',fontWeight:'800',color:'#f91942'}}>Support Channels</Typography>
     <Typography sx={{fontSize:'20px',color:'#666',marginBottom:'10px'}}> Access our live chat support for immediate assistance. Our knowledgeable representatives are available to help you with any inquiries or issues.</Typography>
     <Typography sx={{fontSize:'20px',color:'#666',marginBottom:'10px'}}>Reach out to our support team via email at support@codesintensity.com. We aim to respond to all inquiries promptly.</Typography>
     <Typography sx={{fontSize:'20px',color:'#666',marginBottom:'10px'}}> Call our toll-free number at 6386455983 to speak directly with a support representative during business hours.</Typography>
     </Box>
     <Box sx={{marginTop:'30px'}}>
      <Typography sx={{color:'#666',fontSize:'25px',fontWeight:'800',color:'#f91942'}}>Feedback</Typography>
      <Typography sx={{fontSize:'20px',color:'#666',marginBottom:'10px'}}>We value your feedback! Please take a moment to share your experience with our support team. Your input helps us improve our services.</Typography>
     </Box>

     <Box>
       <Typography sx={{color:'#666',fontSize:'25px',fontWeight:'800',color:'#f91942'}}>Contact Information</Typography>
       <Typography sx={{fontSize:'20px',color:'#666',marginBottom:'5px'}}>Email: codesintensity@gmail.com</Typography>
       <Typography sx={{fontSize:'20px',color:'#666',marginBottom:'5px'}}>Mobile No: 6386455982</Typography>
      </Box>
    </Container>
    </Box>
  )
}

export default Support