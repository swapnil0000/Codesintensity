import { Box, Container, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { useLocation } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';

import figma1 from "../graphic/figma1.webp"
import figma2 from "../graphic/figma2.webp"
import figma3 from "../graphic/figma3.png"
import figma4 from "../graphic/figma4.png"




const Graphic = () => {

    const figmas=[
        {
            id:1,
            img:figma1,
        },
        {
            id:3,
            img:figma3,
        },
        {
            id:4,
            img:figma4,
        },
    ]

    const data = [
        {
            id: 1,
            img: "/assets/uiux.webp",
            tittle: 'Creating UI for Web & App ',
            val: 'Designing intuitive and visually appealing interfaces for websites, mobile apps, and software applications to enhance user experience and usability.'
        },
        {
            id: 2,
            img: "/assets/logodesign.webp",
            tittle: 'Creating LOGO for Buisness',
            val: 'Creating unique and memorable visual symbols that represent a brands identity and values using ILLUSTRATOR or PHOTOSHOP'
        },
        {
            id: 3,
            img: "/assets/banner.webp",
            tittle: 'Creating Banner or Poster for marketing',
            val: 'An effective content strategy generates more engagements and social signals, allowing interaction with a broader online community.'
        },
        {
            id: 4,
            img: "/assets/icon.webp",
            tittle: 'Unique ICON for growing buisness',
            val: 'Creating unique and recognizable icons for digital interfaces, applications, websites, and other platforms to represent actions, features, or concepts.            '
        },
        {
            id: 5,
            img: "/assets/thumbnail.webp",
            tittle: 'Thumbnail for youtube or instagram',
            val: 'Creating thumbnails involves crafting visually captivating and informative materials to engage audiences effectively.'
        },
        {
            id: 6,
            img: "/assets/brochure.webp",
            tittle: 'Develop any brochure as per your choice',
            val: 'Creating brochures involves crafting visually captivating and informative materials to engage audiences effectively.'
        },
    ]
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <Box sx={{ marginTop: isMobileView ? "100px" : "", backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


            <Container sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: "space-between", width: '100%', margin: '10px' }}>
                <Box sx={{ width: 'auto', display: 'flex', flexDirection: 'column', padding: '10px' }}>
                    <Typography sx={{ color: 'white', fontSize: isMobileView ? '25px' : "35px", textAlign: isMobileView ? "center" : "start", fontWeight: '700' }}>When Your Business Needs Strong<span style={{ color: '#f91942' }}> Branding!</span></Typography>
                    <Typography sx={{ color: 'white', fontSize: isMobileView ? "16px" : '17px', maxWidth: '1000px', marginTop: '0px', hyphens: 'auto', textAlign: isMobileView ? "center" : "start" }}>
                        Graphic design is the art of visually communicating ideas and messages through typography, imagery, and layout. Choose CODESINTENSITY for graphic design excellence, From logos and branding to marketing materials and digital assets, we ensure every design reflects your unique identity and resonates with your target market. Trust CodesIntensity to elevate your brand and make a lasting impression in the competitive market.</Typography> 
                        </Box>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Paper sx={{ backgroundColor: '#802201', backgroundImage: 'linear-gradient(326deg, #802201 0%, #210d10 74%)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: 'white', fontSize: '25px', fontWeight: '700', fontFamily: 'montserrat', marginTop: '20px' }}>Features Benefits</Typography>
                        <Box sx={{ margin: '40px' }}>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Visual Communication</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Creativity</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Design & Code</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Attention to Detail</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Client Collaboration</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />24 x 7 Support</Typography>
                        </Box>
                    </Paper>
                </Box>


            </Container>

            <Box sx={{ width: '100%', height: 'auto' }}>
                <Paper elevation={1} sx={{ width: '100%', height: 'auto', backgroundColor: '#151922' ,borderRadius:'20px'}}>
                <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', color: 'white', textAlign: 'center', margin: '20px' }}>Feature <span style={{ color: '#f91942' }}>Provided</span> </Typography>
                    <Box>
                        <Grid container >
                            {data.map(item => (
                                <Grid sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }} key={item.id} item xs={12} sm={12} md={6} lg={4}>

                                    <Paper sx={{ width: '100%', height: "300px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#141415', gap: '20px', margin: '20px',borderRadius:'20px' }}>

                                        <img style={{ width: '100px', height: '100px', backgroundColor: 'transparent' }} src={item.img} alt={`Image ${item.id}`} />
                                        <Typography sx={{ fontSize: '20px', fontWeight: '700', textAlign: 'center', color: 'white' }}>{item.tittle}</Typography>
                                        <Typography sx={{ color: 'white', fontSize: isMobileView ? "15px" : "17px", fontWeight: '400', textAlign: 'center',margin:'10px' ,width:'90%'}}>{item.val}</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Paper>
            </Box>
           
            <Divider orientation='horizontal' sx={{ border: '0.5px solid white', width: '100%' }} />

            <Container>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ width: '100%', height: '150px', backgroundColor: '#151922', margin: '20px', display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: 'space-around', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 100, 0, 0.12) 0px 12px 30px, rgba(0, 100, 0, 0.12) 10px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(100, 0, 0, 0.09) 0px -3px 5px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{ color: 'white', fontSize:isMobileView?"20px":"35px", fontFamily: 'Montserrat', fontWeight: '800', maxWidth: '28 0px' }}>Let’s connect with team.</Typography>

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
            </Container>

            <Divider orientation='horizontal' sx={{ border: '0.5px solid white', width: '100%' }} />
        </Box>
    )
}

export default Graphic;
