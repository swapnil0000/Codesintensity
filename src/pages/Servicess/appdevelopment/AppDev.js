import { Box, Container, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { useLocation } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import app from "../appdevelopment/apptech.jpg"


const AppDev = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box sx={{ marginTop: isMobileView ? "100px" : "", backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography sx={{ fontSize: isMobileView ? "35px" : "50px", fontWeight: '900', color: '#666', textAlign: 'center', margin: '20px',fontFamily:'montserrat' }}>App <span style={{ color: '#f91942' }}>Development</span> </Typography>

          
            <Container sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", justifyContent: "space-around", width: '100%',margin:'20px' }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column',textAlign:isMobileView?'center':"start"}}>
                    <Typography sx={{ color: 'white', fontSize:isMobileView?"20px":"35px",maxWidth:'100%' ,fontWeight:'800'}}>Streamline Your Business Operations with Our Customized <span style={{ color: '#f91942', }}>Mobile App Solution!</span></Typography>
                    <Typography sx={{ color: '#666',maxWidth:'1000px', fontSize:isMobileView?"17px":"20px" , marginTop: '1px',hyphens:'auto',textAlign:isMobileView?"center":"start"}}>
                    Mobile apps provide a direct and convenient channel for businesses to engage with their customers. Through features like push notifications, personalized content, and in-app messaging, businesses can build stronger relationships and foster customer loyalty. <span style={{ color: '#f91942' }}>Codesintensity</span>, we offer comprehensive maintenance services, including updates, security monitoring, and performance optimization, to ensure your app remains reliable and effective.</Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:'10px' }}>
                <Paper sx={{ backgroundColor: '#802201', backgroundImage: 'linear-gradient(326deg, #802201 0%, #210d10 74%)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'white', fontSize: '25px', fontWeight: '700', fontFamily: 'montserrat', marginTop: '20px' }}>Features Benefits</Typography>
                    <Box sx={{ margin: '40px' }}>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Clear Objective </Typography>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />User-Centric Design</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Testing and Quality Assurance</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />App Store Optimization (ASO)</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />App Maintenance</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />24 x 7 Support</Typography>
                    </Box>
                </Paper>
            </Box>
            
            </Container>
            <Box>
            <Box sx={{ marginTop: '20px',marginBottom:'50px',width:'100%' }}>
            <Typography sx={{ fontSize: isMobileView ? "50px" : "50px", fontWeight: '900', color: '#666', textAlign: 'center', marginTop: '20px' }}>Tech Used</Typography>
                        <Paper sx={{ width:'100%', height:'100%',display: 'flex', flexDirection: 'column', marginTop: '5px', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#141415'}}>

                            <img style={{ width: '100%',height:'100%', backgroundColor: 'transparent' }} src={app}  />
                           
                        </Paper>
             
        </Box>
        </Box>
            <Divider orientation='horizontal' sx={{border:'0.5px solid white',width:'100%'}}/>

        </Box>
    )
}

export default AppDev;
