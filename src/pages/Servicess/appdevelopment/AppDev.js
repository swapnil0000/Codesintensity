import { Box, Container, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { useLocation } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import Form from '../../Contact/Form';


const AppDev = () => {
    const { pathname } = useLocation();
    const data = [
        {
            id: 1,
            img: "/assets/custom.webp",
            tittle: 'Custom Mobile Apps Development',
            val: 'Our expertise in custom development will help businesses to accommodate multiple features into a single app and bring out a world-class user experience.'
        },
        {
            id: 2,
            img: "/assets/solutions.webp",
            tittle: 'Enterprise Mobility Solutions',
            val: 'Our expert & highly experienced enterprise mobility team build enterprise-grade applications for native, cross-platform mobile and wearable devices.'
        },
        {
            id: 3,
            img: "/assets/cross.webp",
            tittle: 'Cross-Platform Mobile Application',
            val: 'Our cross-platform mobile applications run precisely for every platform with reduced cost, faster speed and reusable code components.'
        },
        {
            id: 4,
            img: "/assets/team.webp",
            tittle: 'Dedicated Development Teams',
            val: 'A dedicated team allows you to rapidly scale up or down as needed, cut the development costs, reduce time to market and gives an undivided attention on your project.'
        },
        {
            id: 5,
            img: "/assets/prototype.webp",
            tittle: 'Mobile App Prototype',
            val: 'For a robust mobile app, mobile prototyping lays the foundation for your app development process, and we possess the necessary knowledge in it.'
        },
        {
            id: 6,
            img: "/assets/buisness.webp",
            tittle: 'Business Consulting and Strategy',
            val: 'Our mobility consulting and strategy services help in defining mobility roadmaps, then planning and implementing them for your mobile apps.            '
        },
    ]


    const types = [
        {
            id: 1,
            img: "/assets/android.webp",
            tittle: 'Android Application',
            val: 'Widely compatible designs, quality and performance-centric Android mobile apps of the future. Streamline routine tasks for optimum results. Get the power of extensive data collaboration in your hands with smart app development.'
        },
        {
            id: 2,
            img: "/assets/ios.webp",
            tittle: 'Ios Application',
            val: 'Let your iPhone App engage with your customers. Design, Develop and Deploy smart applications that are enthralling and interactive. Reach out to millions of users to increase the revenue through flawless IOS apps.'
        },
        {
            id: 3,
            img: "/assets/hybrid.webp",
            tittle: 'Hybrid Application',
            val: 'Befit your apps with hybrid technologies that support every mobile operating system. Beat the market with impeccable, robust and glitch-free apps. Explore the intersection of the mobile app universe and the user’s expectation.'
        },
    ]

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box sx={{ marginTop: isMobileView ? "100px" : "", backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
            <Container sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row",alignItems:'center', justifyContent: "space-between", width: '100%',margin:'20px' }}>
           
            {isMobileView && (
                <img style={{width:'100%',height:'auto'}} src='/assets/appdevelopment.svg' alt='logo'/>
            )}
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column',textAlign:isMobileView?'center':"start"}}>
                <Typography sx={{fontSize:'40px',fontWeight:'900',color: '#f91942'}}>At Codesintensity,</Typography>
                    <Typography sx={{ color: '#666', fontSize:isMobileView?"17px":"20px" , marginTop: '1px',hyphens:'auto',textAlign:isMobileView?"center":"start"}}>
Unlock the full potential of your business with a custom-built app. Seamlessly connect with customers, boost brand visibility, and drive growth with personalized experiences and powerful insights. Stay ahead in today's digital landscape—invest in app development and watch your business soar.   </Typography>
                    <Typography sx={{fontSize:'25px',marginTop:'20px',color:'#66666',fontFamily:'montserrat'}}>We build mobile App for:</Typography>
                    <Box>
                    <Typography sx={{ fontSize: isMobileView ? "18px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px'}} />Buisness App</Typography>
                    <Typography sx={{ fontSize: isMobileView ? "18px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px'}} />E-Commerce App</Typography>
                    <Typography sx={{ fontSize: isMobileView ? "18px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px'}} />Educational App</Typography>
                    <Typography sx={{ fontSize: isMobileView ? "18px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px'}} />Social Networking App  </Typography>
                    <Typography sx={{ fontSize: isMobileView ? "18px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px'}} />Entertainment & Games App</Typography>
                    <Typography sx={{ fontSize: isMobileView ? "18px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px'}} />E-Books</Typography>
                </Box>
                </Box>
                {!isMobileView && (
                    <img style={{width:'100%',height:'auto'}} src='/assets/appdevelopment.svg' alt='logo'/>
                )}
            </Container>
            <Box sx={{ width: '100%', height: 'auto' }}>
            <Paper elevation={1} sx={{ width: '100%', height: 'auto', backgroundColor: '#151922' ,borderRadius:'20px'}}>
            <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', color: 'white', textAlign: 'center', margin: '20px' }}>Feature <span style={{ color: '#f91942' }}>Provided</span> </Typography>
                <Box>
                    <Grid container >
                        {data.map(item => (
                            <Grid sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }} key={item.id} item xs={12} sm={12} md={6} lg={4}>

                                <Paper sx={{ width: '100%', height: "300px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#141415', gap: '20px', margin: '20px',borderRadius:'20px',transition: 'transform 0.3s','&:hover': {   transform: 'scale(1.05)', border: '2px solid red', } }}>
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


        <Box sx={{ width: '100%', height: 'auto',marginTop:'50px' }}>
        <Paper elevation={1} sx={{ width: '100%', height: 'auto', backgroundColor: 'black' ,borderRadius:'20px'}}>
        <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', color: 'white', textAlign: 'center', margin: '20px' }}>Types of <span style={{ color: '#f91942' }}>Mobile App</span> </Typography>
            <Box>
                <Grid container >
                    {types.map(item => (
                        <Grid sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }} key={item.id} item xs={12} sm={12} md={6} lg={4}>

                            <Paper sx={{ width: '100%', height: "350px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#141415', gap: '20px', margin: '20px',borderRadius:'20px', transition: 'transform 0.3s','&:hover': {   transform: 'scale(1.05)', border: '2px solid red', }}}>

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
   
       
            <Divider orientation='horizontal' sx={{border:'0.5px solid white',width:'100%'}}/>

        </Box>
    )
}

export default AppDev;
