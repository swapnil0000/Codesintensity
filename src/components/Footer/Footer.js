import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const Footer = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const data=[
    {
      id:1,
      title:'Pages',
      links:['About Us', 'Services', 'Contact Us', 'Technology']
    },
    {
      id:3,
      title:'Products',
      links:['Ecommerce','Restaurant', 'Educational', 'Gym Website']
    },
    
    {
      id:4,
      title:'Links',
      links:['FAQs', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy', '24*7 Support']
    },
    {
      id:2,
      title:'Services',
      links:['Domain & Hosting', 'Web Design', 'UI & UX', 'App Development', 'Digital Marketing','Others']
    },
    
  ]

  return (
    <Box sx={{backgroundColor:'black'}}>
      
      <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'space-between',width:'100%',marginTop:'20px'}}  >
      <Box>
           <img style={{width:'200px'}} src='/assets/logo.png'/>
          </Box>
          <Box sx={{maxWidth:'75%',marginLeft:isMobileView?"20px":""}}>
        <Grid container spacing={isMobileView ? 2 : 6} sx={{display:'flex',flexDirection:'row',justifyContent:'center',width:'100%'}}>
          
          {data.map(item => (
            <Grid item key={item.id} xs={6} sm={6} md={3} >
              <Box sx={{width:'300px'}}>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', marginBottom: '1rem',maxWidth:'600px' }}>{item.title}</Typography>
                {item.links.map((link, index) => (
                  <Typography key={index} variant="body1" sx={{ color: '#fff', cursor: 'pointer', transition: 'color 0.1s, transform 0.3s', '&:hover': { color: 'red', transform: 'scale(1.01)' } }}>{link}</Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
