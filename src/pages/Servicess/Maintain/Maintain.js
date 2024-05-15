import { Box, Container, Divider, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';

const Maintain = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box sx={{ marginTop: isMobileView ? "100px" : "", backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography sx={{ fontSize: isMobileView ? "35px" : "50px", fontWeight: '900', color: '#666', textAlign: 'center', marginTop: '20px' }}>Website <span style={{ color: '#f91942' }}>Maintainence</span> </Typography>

            <Container sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", justifyContent: "space-around", width: '100%',margin:'20px' }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column',textAlign:isMobileView?'center':"start"}}>
                    <Typography sx={{ color: 'white', fontSize:isMobileView?"18px":"28px" }}>Keep your website performance <span style={{ color: '#f91942' }}>bugs free</span></Typography>
                    <Typography sx={{ color: '#666', fontSize:isMobileView?"17px":"20px" , marginTop: '20px',hyphens:'auto',textAlign:isMobileView?"center":"start"}}>
                    Website maintenance involves ongoing tasks to keep a website functional, secure, and up-to-date. At our <span style={{ color: '#f91942' }}>Codesintensity</span>, we offer comprehensive maintenance services, including updates, security monitoring, and performance optimization, to ensure your website remains reliable and effective.</Typography>
                    <Typography  sx={{ color: '#666',fontSize:isMobileView?"17px":"20px" , marginTop: '10px',hyphens:'auto',textAlign:isMobileView?"center":"start",marginBottom:isMobileView?"10px":"0px"}}>Our services include regular backups, security monitoring, content updates, bug fixes, and performance enhancements to keep your website running smoothly and efficiently</Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Paper sx={{ backgroundColor: '#802201', backgroundImage: 'linear-gradient(326deg, #802201 0%, #210d10 74%)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'white', fontSize: '25px', fontWeight: '700', fontFamily: 'montserrat', marginTop: '20px' }}>Features Benefits</Typography>
                    <Box sx={{ margin: '30px' }}>
                        <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Bug Fixes & Optimization</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Feature Enhancements</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Monitoring and Analytics</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Backup and Recovery</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />No Delay</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />24 x 7 Support</Typography>
                    </Box>
                </Paper>
            </Box>
            
            </Container>
            <Container>
            <Box sx={{
                width:'100%',
                display: 'flex',
                flexDirection: isMobileView ? 'column' : 'row',
                alignItems:'center',
                justifyContent:isMobileView?"center":"space-around",
                backgroundColor: '#000',
                marginBottom:'20px',
                height:'auto',
                padding: '20px',
                borderRadius: '30px',
                boxShadow: '-4px -2px  10px 4px rgba(255, 100, 10, 0.3)', // Red box shadow
                border: '0.5px solid rgba(255, 0, 0, 0.5)', // Red border
            }}>
                <Box >
                    <img src='/assets/maintain.webp' alt='maintain' style={{ width:isMobileView?"500px":"400px",height:isMobileView?"300px":"350px" ,borderRadius:'40px',padding:'10px'}} />
                </Box>
                <Box sx={{width:'500px',padding:'10px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                    <Typography  sx={{ color: '#fff',fontSize:'28px',fontWeight:'500',textAlign:isMobileView?"center":"start",width:isMobileView?"350px":"500px" }}>Stay worry-free with our web <span style={{ color: '#f91942' }}>maintenance service</span></Typography>
                    <Typography sx={{color:'#666',marginTop:'10px',fontSize:'17px',textAlign:isMobileView?"center":"start",width:isMobileView?"350px":"500px"}}>Our team is committed to providing you with the best maintenance services for your WordPress website. We understand that every website is unique, which is why we offer customized solutions to meet your specific needs. We also provide transparent pricing with no hidden fees, so you know exactly what you’re paying for.</Typography>
                    <Typography sx={{color:'#666',marginTop:'10px',fontSize:'17px',textAlign:isMobileView?"center":"start",width:isMobileView?"350px":"500px"}}>Don’t let the maintenance of your WordPress website stress you out. Contact us today to know more about our services and how we can help you keep your website running smoothly.</Typography>
                </Box>
            </Box>
            </Container>
            
            <Divider orientation='horizontal' sx={{border:'0.5px solid white',width:'100%'}}/>

        </Box>
    )
}

export default Maintain;
