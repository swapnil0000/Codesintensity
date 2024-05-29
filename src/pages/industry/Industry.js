import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
const Industry = () => {
    const data = [
        {
            id: 1,
            img: "/assets/travel.webp",
            tittle: 'Tour & Travel',
            des: 'Domain & hosting services to host your website at the top.'
        },
        {
            id: 2,
            img: "/assets/technology.webp",
            path:'/web',
            tittle: 'Technology',
            des: 'Developing a user-friendly interface to engage customers.'

        },
        {
            id: 3,
            img: "/assets/construction.webp",
            path:'/app',
            tittle: 'Real State',
            des: 'Developing responsive mobile Apps for both IOS & Androids.'
        },
        {
            id: 4,
            img: "/assets/ecommerce1.webp",
            path:'/digital',
            tittle: 'Any Ecommerce',
            des: 'Improve your’s SEO & generate more leads.'
        },
        {
            id: 5,
            img: "/assets/restaurant.webp",
            path:'/maintain',
            tittle: 'Restaurant',
            des: 'Regular updates to site backups, security checks, & optimization.'
        },
        {
            id: 6,
            img: "/assets/education.webp",
            path:'/graphic',
            tittle: 'Educational',
            des: 'Designing logos, and other media to build the brand identity.'
        },
    ]
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: isMobileView ? "100px" : "0px", backgroundColor: '#141415',marginBottom:'20px',padding:'20px' }}>
            <Typography sx={{ fontSize: '50px', fontWeight: '900', fontFamily: 'Montserrat' ,color:'#666'}}>Industries <span style={{ color: '#f91942' }}>Cover</span> </Typography>
            <Container>
                <Grid container spacing={3}>
                    {data.map((ele, index) => (
                        <Grid item key={index} lg={4} md={4} sm={6} xs={12}>
                            <Box sx={{ height: '300px', backgroundColor: 'darkcyan', margin: '10px',border:'none', transition: 'transform 0.3s ease-in-out' , '&:hover': { transform: 'scale(1.05)' }}}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                                    <img style={{ width: '100%', height: '85%', transition: 'transform 0.3s ease-in-out',objectFit:'cover' }} src={ele.img} alt={ele.tittle} />
                                    <Typography sx={{ fontSize: '23px', fontWeight: '600', color: 'whitesmoke', fontFamily: 'Montserrat', marginTop: '10px', textAlign: 'center' }}>{ele.tittle}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
  )
}

export default Industry
