import { Box, Container, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { useLocation } from 'react-router-dom';
import web from "../webdevelopment/web.jpg"
import CircleIcon from '@mui/icons-material/Circle';
import html from "../webdevelopment/html.webp"
import css from "../webdevelopment/css.webp"
import javascript from "../webdevelopment/javascript.webp"
import react from "../webdevelopment/react.webp"
import material from "../webdevelopment/materail.webp"
import tailwand from "../webdevelopment/tailwand.png"
import type from "../webdevelopment/typescript.svg"
import angular from "../webdevelopment/angular.png"

import nodejs from "../webdevelopment/nodejs.png"
import python from "../webdevelopment/python.png"
import java from "../webdevelopment/java.png"
import php from "../webdevelopment/phpp.png"


const Web = () => {
    
    const data=[
        {
            id:1,
            img:html,
            val:"HTML5"
        },
        {
            id:2,
            img:css,
            val:"CSS3"
        },{
            id:3,
            img:javascript,
            val:"Javascript"
        },{
            id:4,
            img:react,
            val:"React"
        },
        {
            id:4,
            img:angular,
            val:"React"
        },
        {
            id:5,
            img:material,
            val:"MaterialUI"
        },{
            id:6,
            img:tailwand,
            val:"Tailwand CSS"
        },
        {
            id:7,
            img:type,
            val:"Typescript"
        },
    ]

    const databack=[
        {
            id:1,
            img:nodejs,
            val:"Nodejs"
        },
        {
            id:2,
            img:python,
            val:"Python"
        },{
            id:3,
            img:php,
            val:"PHP"
        },{
            id:4,
            img:java,
            val:"Java"
        },
    ]
   

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box sx={{ marginTop: isMobileView ? "100px" : "", backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', color: '#666', textAlign: 'center', marginTop: '20px' }}>Website <span style={{ color: '#f91942' }}>Development</span> </Typography>
            <Typography sx={{ fontSize: isMobileView ? "20px" : "30px", fontWeight: '400', color: '#666', textAlign: 'center' }}>Unlock digital pontential, one code at a time!</Typography>
            <Container sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: "space-around", width: '100%', margin: '20px' }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '20px' }}>
                    <Typography sx={{ color: 'white', fontSize: isMobileView ? '25px' : "30px", textAlign: isMobileView ? "center" : "start" }}>Creative Solutions for Your Business</Typography>
                    <Typography sx={{ color: 'white', fontSize: isMobileView ? "15px" : '20px', maxWidth: '500px', marginTop: '20px', hyphens: 'auto', textAlign: isMobileView ? "center" : "start" }}>At Codesintensity, We believe that a website is more than just an online presence. It’s a representation of your brand, your values, and your unique identity. That’s why we work closely with our clients to understand their vision, objectives, and target audience. We take the time to ask the right questions and listen to your feedback, so we can create a website that truly reflects your business.</Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Paper sx={{ backgroundColor: '#802201', backgroundImage: 'linear-gradient(326deg, #802201 0%, #210d10 74%)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: 'white', fontSize: '25px', fontWeight: '700', fontFamily: 'montserrat', marginTop: '20px' }}>Features Benefits</Typography>
                        <Box sx={{ margin: '30px' }}>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Continuous Improvement</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Streamlined Processes</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Value-added Services</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Tailored Solutions</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Delivery On Time</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />24 x 7 Support</Typography>
                        </Box>
                    </Paper>
                </Box>

            </Container>
            <Box sx={{ marginTop: '20px',marginBottom:'50px',width:'100%' }}>
            <Typography sx={{ fontSize: isMobileView ? "50px" : "50px", fontWeight: '900', color: '#666', textAlign: 'center', marginTop: '20px' }}>Frontend</Typography>
    
            <Grid container>
                {data.map(item => (
                    <Grid key={item.id} item xs={6} sm={6} md={6} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px', gap: '10px' }}>

                        <Paper sx={{ width:'170px', height:'170px',display: 'flex', flexDirection: 'column', marginTop: '5px', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#141415'}}>

                            <img style={{ width: '100%',height:'100%', backgroundColor: 'transparent' ,padding:'10px'}} src={item.img} alt={`Image ${item.id}`} />
                            <Typography sx={{color:'white',fontSize:'20px',padding:'20px',lineHeight:'1px',fontWeight:'700',lineHeight:'0px'
                            }}>{item.val}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
        <Box sx={{ marginTop: '10px',marginBottom:'50px',width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Typography sx={{ fontSize: isMobileView ? "50px" : "50px", fontWeight: '900', color: '#666', textAlign: 'center', marginTop: '20px' }}>Backend</Typography>

        <Grid container >
            {databack.map(item => (
                <Grid sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}} key={item.id} item xs={6} sm={6} md={6} lg={3}>

                    <Paper sx={{ width:'170px', height:"170px",display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#141415',gap:'20px',margin:'20px'}}>

                        <img style={{ width: '100%',height:'90%', backgroundColor: 'transparent',padding:'10px' }} src={item.img} alt={`Image ${item.id}`} />
                        <Typography sx={{color:'white',fontSize:'20px',lineHeight:'0px',fontWeight:'700',padding:'30px'}}>{item.val}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </Box>
            <img style={{ width: '100%', height: 'auto' }} src={web} />

            <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Box sx={{width:'100%',height:'190px',backgroundColor:'#110c11',margin:'20px',display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'space-around',borderRadius:'20px',boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 100, 0, 0.12) 0px 12px 30px, rgba(0, 100, 0, 0.12) 10px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(100, 0, 0, 0.09) 0px -3px 5px'}}>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Typography sx={{color:'white',fontSize:'20px',fontFamily:'Montserrat',fontWeight:'600'}}>Confirm your booking or any query!</Typography>
            <Typography sx={{color:'white',fontSize:'15px',fontFamily:'Montserrat',fontWeight:'400',maxWidth:'28 0px'}}>Let’s connect with team.</Typography>
     
            </Box>
            <Box>
            <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <Typography className="button-text">Learn More</Typography>
          </button>
            </Box>
            </Box>
         </Box>
            <Divider orientation='horizontal' sx={{ border: '0.5px solid white', width: '100%' }} />
        </Box>
    )
}

export default Web;
