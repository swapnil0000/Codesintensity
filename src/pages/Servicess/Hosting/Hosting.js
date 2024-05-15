import { Box, Container, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';


const Maintain = () => {
  const data=[
    {
        id:1,
        img:"/assets/aws.webp",
         tittle:'Increasing Reach in Digital Marketing',
        val:'A strong social media marketing strategy increases brand awareness and places your company in front of the right customers.'  
    },
    {
        id:2,
        img:"/assets/firebase.webp",
        tittle:'Ranking in Digital Marketing',
        val:'Increased social media sharing of your content leads to higher website traffic and improved search rankings.'  
    },
    {
        id:3,
        img:"/assets/hostinger.webp",
        tittle:'Exposure in Digital Marketing',
        val:'An effective content strategy generates more engagements and social signals, allowing interaction with a broader online community.'  
    },
    {
        id:4,
        img:"/assets/vercel.webp",
        tittle:'Brand Control in Digital Marketing',
        val:'Social media marketing packages are customized to fit your needs and budget, giving you control over branding and content strategy.'  
    },
    {
        id:5,
        img:"/assets/godaddy.webp",
        tittle:'Target Audience in Digital Marketing',
        val:'Experts analyze niche markets to craft relevant content and ads addressing customers needs based on their online behavior.'  
    },
    {
        id:6,
        img:"/assets/github.webp",
        tittle:'Support in Digital Marketing',
        val:'Using social media for marketing builds a thought leadership brand and creates meaningful connections with followers'
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
            <Typography sx={{ fontSize: isMobileView ? "35px" : "50px", fontWeight: '900', color: '#666', textAlign: 'center', marginTop: '20px' }}>Domain & <span style={{ color: '#f91942' }}>Hosting</span> </Typography>

            <Container sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", justifyContent: "space-around", width: '100%',margin:'20px' }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column',textAlign:isMobileView?'center':"start"}}>
                    <Typography sx={{ color: 'white', fontSize:isMobileView?"18px":"30px",fontWeight:'800' }}>Unlock Your Digital Presence: Domain and Hosting Solutions for Your <span style={{ color: '#f91942' }}>Website and App!</span></Typography>
                    <Typography sx={{ color: '#666', fontSize:isMobileView?"17px":"20px" , marginTop: '5px',hyphens:'auto',textAlign:isMobileView?"center":"start"}}>
                    A custom domain name reinforces your brand identity and enhances brand recognition. It creates a professional and trustworthy image for your business or brand, increasing credibility and visibility in the online marketplace.</Typography>
                    <Typography sx={{ color: '#666', fontSize:isMobileView?"17px":"20px" , marginTop: '',hyphens:'auto',textAlign:isMobileView?"center":"start"}}>Hosting provides the infrastructure and server space needed to store and publish your website or app on the internet. Without hosting, your website or app would not be accessible to users worldwide.</Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:isMobileView?"10px":"0px" }}>
                <Paper sx={{ backgroundColor: '#802201', backgroundImage: 'linear-gradient(326deg, #802201 0%, #210d10 74%)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'white', fontSize: '25px', fontWeight: '700', fontFamily: 'montserrat', marginTop: '20px' }}>Features Benefits</Typography>
                    <Box sx={{ margin: '30px' }}>
                        <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Online Identity</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Hosting as per your Traffic & Content</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Google Analytics </Typography>
                        <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Speed of Webisite or App is High</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "18px " : "24px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '15px', fontWeight: '900' }} />Provide Security</Typography>
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
                    <img src="../assets/domainhosting.webp" alt='maintain' style={{ width:isMobileView?"500px":"400px",height:isMobileView?"300px":"350px" ,borderRadius:'40px',padding:'10px'}} />
                </Box>
                <Box sx={{width:'500px',padding:'10px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                    <Typography  sx={{ color: '#fff',fontSize:'28px',fontWeight:'500',textAlign:isMobileView?"center":"start",width:isMobileView?"350px":"500px" }}>Stay worry-free with our web <span style={{ color: '#f91942' }}>Domain & Hosting</span></Typography>
                    <Typography sx={{color:'#666',marginTop:'10px',fontSize:'17px',textAlign:isMobileView?"center":"start",width:isMobileView?"350px":"500px"}}>
                    Our team is dedicated to delivering top-notch maintenance services for your domain and hosting needs. We recognize the individuality of each online presence, which is why we tailor our solutions to suit your precise requirements. With transparent pricing and no hidden charges, you can trust us to provide clear and fair terms.                    </Typography>
                    <Typography sx={{color:'#666',marginTop:'10px',fontSize:'17px',textAlign:isMobileView?"center":"start",width:isMobileView?"350px":"500px"}}>
                    Don't let the upkeep of your domain and hosting overwhelm you. Reach out to us today to discover more about our services and how we can assist you in maintaining a reliable and secure online presence.                    </Typography>
                </Box>
            </Box>
            </Container>

            <Container>
            <Box sx={{width:'100%',height:'auto'}}>
            <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', color: '#666', textAlign: 'center', margin: '20px',fontFamily: 'montserrat' }}>Feature <span style={{ color: '#f91942' }}>Provided</span> </Typography>
            <Paper elevation={1} sx={{width:'100%',height:'auto',backgroundColor:'#151922'}}>
            <Box>
            <Grid container >
            {data.map(item => (
                <Grid sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}} key={item.id} item xs={12} sm={12} md={6} lg={4}>
    
                    <Paper sx={{ width:'300px', height:"200px",display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#141415',gap:'20px',margin:'20px'}}>
    
                        <img style={{ width: '100%',height:'100%', backgroundColor: 'transparent'}} src={item.img} alt={`Image ${item.id}`} />
            
                    </Paper>
                </Grid>
            ))}
        </Grid>
        </Box>
        </Paper>
          </Box>
            </Container>
            
            <Divider orientation='horizontal' sx={{border:'0.5px solid white',width:'100%'}}/>

        </Box>
    )
}

export default Maintain;
