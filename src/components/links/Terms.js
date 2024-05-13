import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Terms = () => {
  return (
    <Box sx={{backgroundColor:'black'}}>
      <Box>
       <Typography sx={{color:'#666',fontSize:'50px',fontWeight:'800',fontFamily:'montserrat',textAlign:'center'}}>Terms & <span style={{color:'#f91942'}}>Condition</span> </Typography>
       <Container>
        <Box>

         <Box sx={{marginBottom:'30px'}}>
        <Typography sx={{color:'#666',fontSize:'25px',fontWeight:'600'}}>Last updated: May 14, 2024!</Typography>
        <Typography sx={{color:'#666',fontSize:'20px'}}>These Terms and Conditions ("Agreement") are an agreement between CodesIntensity ("CodesIntensity" or "us" or "we") and you ("User" or "you" or "your"). This Agreement sets forth the general terms and conditions of your use of the CodesIntensity website and any of its products or services (collectively, "Website" or "Services").</Typography>
        </Box>

         <Box sx={{marginBottom:'30px'}}>
        <Typography sx={{color:'#666',fontSize:'25px',fontWeight:'600',color:'#f91942'}}>Account Registration,</Typography>
        <Typography sx={{color:'#666',fontSize:'20px',textAlign:'start'}}>By registering for an account on the Website, you agree to provide accurate, current, and complete information about yourself as prompted by the registration form. You also represent that you are at least 18 years of age. You are responsible for maintaining the confidentiality of your password and account and for any and all activities that occur under your account. You agree to notify CodesIntensity immediately of any unauthorized use of your account or password, or any other breach of security. CodesIntensity reserves the right to refuse service or terminate accounts at its sole discretion.</Typography>
        </Box>

        <Box sx={{marginBottom:'30px'}}>
        <Typography sx={{color:'#666',fontSize:'25px',fontWeight:'600',color:'#f91942'}}>License,</Typography>
        <Typography sx={{color:'#666',fontSize:'20px'}}>CodesIntensity grants you a non-exclusive, non-transferable, revocable license to access and use the Website and Services strictly in accordance with this Agreement. Your use of the Website and Services is solely for your own personal, non-commercial purposes and shall not be for the benefit of any third party.</Typography>

        </Box>

        <Box sx={{marginBottom:'30px'}}>
        <Typography sx={{color:'#666',fontSize:'25px',fontWeight:'600',color:'#f91942'}}>Content,</Typography>
        <Typography sx={{color:'#666',fontSize:'20px'}}>You grant CodesIntensity a non-exclusive license to use, reproduce, adapt, publish, translate, and distribute any content you submit, post, or display on or through the Website for the sole purpose of enabling us to provide you with the Services in accordance with our Privacy Policy.</Typography>

        </Box>

        <Box sx={{marginBottom:'30px'}}>
        <Typography sx={{color:'#666',fontSize:'25px',fontWeight:'600',color:'#f91942'}}>Limitation of Liability,</Typography>
        <Typography sx={{color:'#666',fontSize:'20px'}}>To the fullest extent permitted by applicable law, in no event will CodesIntensity, its affiliates, officers, directors, employees, agents, suppliers, or licensors be liable to any person for any indirect, incidental, special, punitive, cover, or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence, or otherwise, even if the liable party has been advised as to the possibility of such damages or could have foreseen such damages.</Typography>

        </Box>


        </Box>
       </Container>
      </Box>
    </Box>
  )
}

export default Terms