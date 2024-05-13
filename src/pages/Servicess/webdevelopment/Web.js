import { Box, Container, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { useLocation, useNavigate } from 'react-router-dom';
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
    const navigate=useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box sx={{ marginTop: isMobileView ? "100px" : "", backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img style={{ width: '100%', height: 'auto' }} src={web} />
            <Container sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: "space-around", width: '100%', margin: '20px' }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '0px' }}>
                    <Typography sx={{ color: 'white', fontSize: isMobileView ? '25px' : "35px", textAlign: isMobileView ? "center" : "start",fontWeight:'700',fontFamily: 'montserrat' }}>Transforming businesses with <span style={{ color: '#f91942' }}>stunning websites!</span></Typography>
                    <Typography sx={{ color: 'white', fontSize: isMobileView ? "15px" : '20px', maxWidth: 'auto', marginTop: '5px', hyphens: 'auto', textAlign: isMobileView ? "center" : "start" }}>In today's digital age, having an online presence is essential for businesses to reach and engage with potential customers. At <span style={{ color: '#f91942' }}>CODESINTENSITY</span>, we specialize in crafting dynamic and effective websites that elevate businesses in the online sphere. With meticulous attention to detail and a keen understanding of user experience, our team creates bespoke websites tailored to meet the unique needs and goals of each client.</Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:'10px' }}>
                    <Paper sx={{ backgroundColor: '#802201', backgroundImage: 'linear-gradient(326deg, #802201 0%, #210d10 74%)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: 'white', fontSize: '25px', fontWeight: '700', fontFamily: 'montserrat', marginTop: '20px' }}>Features Benefits</Typography>
                        <Box sx={{ margin: '25px' }}>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Responsive Design</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Cross-Browser Compatibility</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Performance Optimization</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Testing and Debugging</Typography>
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

                    <Paper sx={{ width:'170px', maxHeight:'200px',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#141415',gap:'20px',margin:'20px'}}>

                        <img style={{ width: '100%',height:'100%', backgroundColor: 'transparent',padding:'20px' }} src={item.img} alt={`Image ${item.id}`} />
                        <Typography sx={{color:'white',fontSize:'20px',lineHeight:'0px',fontWeight:'700',padding:'20px'}}>{item.val}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </Box>
            

            <Container sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Box sx={{width:'100%',height:'190px',backgroundColor:'#151922',margin:'20px',display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'space-around',borderRadius:'20px',boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 100, 0, 0.12) 0px 12px 30px, rgba(0, 100, 0, 0.12) 10px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(100, 0, 0, 0.09) 0px -3px 5px'}}>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Typography sx={{color:'white',fontSize:'20px',fontFamily:'Montserrat',fontWeight:'600'}}>Confirm with Whatsapp!</Typography>
            <Typography sx={{color:'white',fontSize:'15px',fontFamily:'Montserrat',fontWeight:'400',maxWidth:'28 0px'}}>Let’s connect with team.</Typography>
     
            </Box>
            <Box>
            <button onClick={()=>navigate('/contact')} className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <Typography onClick={()=>navigate('/contact')} className="button-text">Contact Us</Typography>
          </button>
            </Box>
            </Box>
         </Container>
            <Divider orientation='horizontal' sx={{ border: '0.5px solid white', width: '100%' }} />
        </Box>
    )
}

export default Web;
