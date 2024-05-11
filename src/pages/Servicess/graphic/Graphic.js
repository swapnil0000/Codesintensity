import { Box, Container, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { useLocation } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import icon from "../graphic/icon.png"
import logo from "../graphic/logodesign.png"
import banner from "../graphic/banner.png"
import thumbnail from "../graphic/thumbnail.png"
import brochure from "../graphic/brochure.png"
import uiux from "../graphic/uiux.png"
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
            img: uiux,
            tittle: 'Creating UI for Web & App ',
            val: 'Designing intuitive and visually appealing interfaces for websites, mobile apps, and software applications to enhance user experience and usability.'
        },
        {
            id: 2,
            img: logo,
            tittle: 'Creating LOGO for Buisness',
            val: 'Creating unique and memorable visual symbols that represent a brands identity and values using ILLUSTRATOR or PHOTOSHOP'
        },
        {
            id: 3,
            img: banner,
            tittle: 'Creating Banner or Poster for marketing',
            val: 'An effective content strategy generates more engagements and social signals, allowing interaction with a broader online community.'
        },
        {
            id: 4,
            img: icon,
            tittle: 'Unique ICON for growing buisness',
            val: 'Creating unique and recognizable icons for digital interfaces, applications, websites, and other platforms to represent actions, features, or concepts.            '
        },
        {
            id: 5,
            img: thumbnail,
            tittle: 'Thumbnail for youtube or instagram',
            val: 'creating thumbnails involves crafting visually captivating and informative materials to engage audiences effectively.'
        },
        {
            id: 6,
            img: brochure,
            tittle: 'Develop any brochure as per your choice',
            val: 'creating brochures involves crafting visually captivating and informative materials to engage audiences effectively.'
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
            <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', color: '#666', textAlign: 'center', margin: '20px' }}>Graphic <span style={{ color: '#f91942' }}>Desiging</span> </Typography>
            <Typography sx={{ fontSize: isMobileView ? "20px" : "30px", fontWeight: '400', color: '#666', textAlign: 'center' }}>Unlock digital pontential, one code at a time!</Typography>

            <Container sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: "space-between", width: '100%', margin: '10px' }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '10px' }}>
                    <Typography sx={{ color: 'white', fontSize: isMobileView ? '25px' : "20px", textAlign: isMobileView ? "center" : "start", fontWeight: '700' }}>When Your Business Needs Strong<span style={{ color: '#f91942' }}> Branding!</span></Typography>
                    <Typography sx={{ color: 'white', fontSize: isMobileView ? "16px" : '17px', maxWidth: '800px', marginTop: '0px', hyphens: 'auto', textAlign: isMobileView ? "center" : "start" }}>
                        Graphic design is the art of visually communicating ideas and messages through typography, imagery, and layout. It involves creating visually appealing and effective designs for various mediums, including print, digital, and web. Graphic designers use their creativity and technical skills to solve visual problems and engage audiences effectively. </Typography> 
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

            <Box sx={{ width: '100%', height: 'auto' }}>
                <Paper elevation={1} sx={{ width: '100%', height: 'auto', backgroundColor: '#666' }}>
                <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', color: 'white', textAlign: 'center', margin: '20px' }}>Feature <span style={{ color: '#f91942' }}>Provided</span> </Typography>
                    <Box>
                        <Grid container >
                            {data.map(item => (
                                <Grid sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }} key={item.id} item xs={12} sm={12} md={6} lg={4}>

                                    <Paper sx={{ width: '100%', height: "300px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#141415', gap: '20px', margin: '20px' }}>

                                        <img style={{ width: '100px', height: '100px', backgroundColor: 'transparent' }} src={item.img} alt={`Image ${item.id}`} />
                                        <Typography sx={{ fontSize: '20px', fontWeight: '700', textAlign: 'center', color: 'white' }}>{item.tittle}</Typography>
                                        <Typography sx={{ color: 'white', fontSize: isMobileView ? "15px" : "17px", fontWeight: '400', textAlign: 'center', margin: '10px' }}>{item.val}</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Paper>
            </Box>
            <Box sx={{ width: '100%', height: 'auto' , marginBottom:'30px',backgroundColor:'black'}}>
            <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', color: 'white', textAlign: 'center', margin: '20px' }}>Some work on <span style={{ color: '#f91942' }}>Figma</span> </Typography>

            <Paper elevation={1} sx={{ width: '100%', height: 'auto',backgroundColor:'black' }}>
            <Box >
                <Grid container >
                    {figmas.map(item => (
                        <Grid sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }} key={item.id} item xs={12} sm={12} md={6} lg={4}>

                            <Paper sx={{ width: '400px', height: "300px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#141415', gap: '20px', margin: '20px' ,borderRadius:'20px'}}>

                                <img style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }} src={item.img} alt={`Image ${item.id}`} />
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
                    <Box sx={{ width: '100%', height: '150px', backgroundColor: '#110c11', margin: '20px', display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: 'space-around', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 100, 0, 0.12) 0px 12px 30px, rgba(0, 100, 0, 0.12) 10px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(100, 0, 0, 0.09) 0px -3px 5px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{ color: 'white', fontSize: isMobileView ? "15px" : "20px", fontFamily: 'Montserrat', fontWeight: '600' }}>Confirm your booking or any query!</Typography>
                            <Typography sx={{ color: 'white', fontSize: '15px', fontFamily: 'Montserrat', fontWeight: '400', maxWidth: '28 0px' }}>Let’s connect with team.</Typography>

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
