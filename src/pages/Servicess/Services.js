import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
const Services = () => {
   
    const data = [
        {
            id: 1,
            img: "/assets/uiux.webp",
            path:'/uiux',
            tittle:'UI & UX',
            des: 'Domain & hosting services to host your website at the top.'
        },
        {
            id: 2,
            img: "/assets/webdevelopmentlong.webp",
            path:'/web',
            tittle: 'Website Development',
            des: 'Developing a user-friendly interface to engage customers.'

        },
        {
            id: 3,
            img: "/assets/appdevelopmentlong.webp",
            path:'/app',
            tittle: 'App Development',
            des: 'Developing responsive mobile Apps for both IOS & Androids.'
        },
        {
            id: 4,
            img: "/assets/marketinglong.webp",
            path:'/digital',
            tittle: 'Digital Marketing',
            des: 'Improve your website’s SEO & generate more leads.'
        },
        {
            id: 5,
            img: "/assets/websitemaintainlong.webp",
            path:'/maintain',
            tittle: 'Website Maintainence',
            des: 'Regular updates to site backups, security checks, & optimization.'
        },
        {
            id: 6,
            img: "/assets/desinglong.webp",
            path:'/graphic',
            tittle: 'Graphic Designer',
            des: 'Designing logos, and other media to build the brand identity.'
        },
    ]

    const navigate=useNavigate();

    const handleClick=(path)=>{
        navigate(path)
    }

    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))


    return (
        <Box sx={{  width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:isMobileView?"100px":"0px"
         }}>
            <Typography sx={{ fontSize:isMobileView?"40px":'50px', fontWeight: '900', fontFamily: 'Montserrat' }}>Our <span style={{ color: '#f91942' }}>Services</span> </Typography>
            <Container>
                <Grid container spacing={3}>
                    {data.map((ele, index) => (
                        <Grid item key={index} lg={4} md={4} sm={6} xs={12}>
                            <Box sx={{ height: '410px', backgroundColor: '#141415', margin: '10px' }}>
                                <Box  sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                    <img style={{width:'100%'}} src={ele.img} />
                                    <Typography sx={{ fontSize: '23px', fontWeight: '800', color: 'whitesmoke', fontFamily: 'Montserrat', marginTop: '10px', textAlign: 'center' }}>{ele.tittle}</Typography>
                                    <Typography sx={{ color: 'white', marginBottom: '10px', margin: '5px' , textAlign:'center'}}>{ele.des}</Typography>

                                    <button onClick={()=>handleClick(ele.path)} style={{margin:'10px'}} className="learn-more">
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <Typography className="button-text">Learn More</Typography>
                                    </button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Services