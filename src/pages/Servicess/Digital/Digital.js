import { Box, Container, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { useLocation } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import ranking from "../Digital/ranking.png"
import exposure from "../Digital/exposure.png"
import support from "../Digital/support.png"
import reach from "../Digital/reach.png"
import brandcontrol from "../Digital/brandcontrol.png"
import targetaudience from "../Digital/targetaudience.png"

const Digital = () => {
    const data=[
        {
            id:1,
            img:reach,
             tittle:'Increasing Reach in Digital Marketing',
            val:'A strong social media marketing strategy increases brand awareness and places your company in front of the right customers.'  
        },
        {
            id:2,
            img:ranking,
            tittle:'Ranking in Digital Marketing',
            val:'Increased social media sharing of your content leads to higher website traffic and improved search rankings.'  
        },
        {
            id:3,
            img:exposure,
            tittle:'Exposure in Digital Marketing',
            val:'An effective content strategy generates more engagements and social signals, allowing interaction with a broader online community.'  
        },
        {
            id:4,
            img:brandcontrol,
            tittle:'Brand Control in Digital Marketing',
            val:'Social media marketing packages are customized to fit your needs and budget, giving you control over branding and content strategy.'  
        },
        {
            id:5,
            img:targetaudience,
            tittle:'Target Audience in Digital Marketing',
            val:'Experts analyze niche markets to craft relevant content and ads addressing customers needs based on their online behavior.'  
        },
        {
            id:6,
            img:support,
            tittle:'Support in Digital Marketing',
            val:'Using social media for marketing builds a thought leadership brand and creates meaningful connections with followers'
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
            <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', color: '#666', textAlign: 'center', margin: '20px' }}>Digital <span style={{ color: '#f91942' }}>Marketing</span> </Typography>
            <Typography sx={{ fontSize: isMobileView ? "20px" : "30px", fontWeight: '400', color: '#666', textAlign: 'center' }}>Unlock digital pontential, one code at a time!</Typography>

            <Container sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: "space-between", width: '100%', margin: '10px' }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '10px' }}>
                <Typography sx={{ color: 'white', fontSize: isMobileView ? '25px' : "20px", textAlign: isMobileView ? "center" : "start" ,fontWeight:'700'}}>The Key to Boosting Your Brand's Online <span style={{ color: '#f91942' }}>Presence!</span></Typography>
                <Typography sx={{ color: 'white', fontSize: isMobileView ? "16px" : '17px', maxWidth: '800px', marginTop: '0px', hyphens: 'auto', textAlign: isMobileView ? "center" : "start" }}>

               
                Digital marketing is the strategic use of electronic devices and online platforms to promote products, services, or brands. It employs various tactics such as search engine optimization (SEO), content marketing, social media engagement, email campaigns, and more to connect with potential customers in the digital space. By leveraging digital mediums like search engines, social media platforms, websites, and mobile apps, businesses can engage with their target audience on a global scale. Digital marketing allows companies to interact with customers in real-time and measure campaign effectiveness through data analytics, providing valuable insights for optimization and growth.</Typography>
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
        
        <Box sx={{width:'100%',height:'auto'}}>
        <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', color: '#666', textAlign: 'center', margin: '20px' }}>Feature <span style={{ color: '#f91942' }}>Provided</span> </Typography>
        <Paper elevation={1} sx={{width:'100%',height:'auto',backgroundColor:'#666'}}>
        <Box>
        <Grid container >
        {data.map(item => (
            <Grid sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}} key={item.id} item xs={12} sm={12} md={6} lg={4}>

                <Paper sx={{ width:'100%', height:"300px",display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#141415',gap:'20px',margin:'20px'}}>

                    <img style={{ width: '130px',height:'130px', backgroundColor: 'transparent'}} src={item.img} alt={`Image ${item.id}`} />
                    <Typography sx={{fontSize:'20px',fontWeight:'700',textAlign:'center',color:'white'}}>{item.tittle}</Typography>
                    <Typography sx={{color:'white',fontSize:isMobileView?"15px":"17px",fontWeight:'400',textAlign:'center',margin:'10px'}}>{item.val}</Typography>
                </Paper>
            </Grid>
        ))}
    </Grid>
    </Box>
        </Paper>
      </Box>
      <Container>
      <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <Box sx={{width:'100%',height:'190px',backgroundColor:'#110c11',margin:'20px',display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'space-around',borderRadius:'20px',boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 100, 0, 0.12) 0px 12px 30px, rgba(0, 100, 0, 0.12) 10px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(100, 0, 0, 0.09) 0px -3px 5px'}}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <Typography sx={{color:'white',fontSize:isMobileView?"15px":"20px",fontFamily:'Montserrat',fontWeight:'600'}}>Confirm your booking or any query!</Typography>
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
   </Container>

            <Divider orientation='horizontal' sx={{border:'0.5px solid white',width:'100%'}}/>
        </Box>
    )
}

export default Digital;