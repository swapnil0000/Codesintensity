import { Box, Button, Container, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import black from "../Industry/backgroundfeature.jpg"
import education from "../Industry/educational.jpg"
import ecommerce from "../Industry/ecommerce.jpg"
import res from "../Industry/restaurant.jpg"
import { useLocation, useNavigate } from 'react-router-dom'
const Industry = () => {
    const theme=useTheme();
    const navigate=useNavigate();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
    // const { pathname } = useLocation();

    // useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, [pathname]);
    const data=[
        {
            id:1,
            img:education,
            tittle:"Coaching & Educational"
        },
        {
            id:2,
            img:ecommerce,
            tittle:"Ecommerce"
        },{
            id:3,
            img:res,
            tittle:"Restaurant"
        },
    ]
    return (
        <div style={{ backgroundColor:'black', height:isMobileView?"auto":"auto", padding: '20px' ,objectFit:'cover',marginBottom:"20px"}}>
        <Container sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "column", alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: '20px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column',alignItems:'center',justifyContent:'center' }}>
                <Typography sx={{ fontSize: isMobileView?"20px":'40px', fontWeight: '900', fontFamily: 'montserrat', color: '#666',marginTop:'30px' }}>INDUSTRIES <span style={{ color: '#f91942' }}>SERVED!</span></Typography>
                <Typography sx={{  fontSize: isMobileView?"15px":'20px', textAlign: isMobileView ? "center" : "",color:'white' }}>We Develop on the bases of your requirements and also changes done according to you  </Typography>
            </Box>

            <Box sx={{display:'flex',flexDirection:isMobileView?"column":'row',alignItems:'center',justifyContent:'space-between',width:'100%',marginTop:'20px'}}>
              {data.map((ele)=>(
                <Paper elevation={2} key={ele.id} sx={{gap:'30px',backgroundColor:'#151922',margin:'10px'}}>
                <Box sx={{gap:'20px',display:'flex',flexDirection:"column"}}>
                  <img style={{width:'100%'}} src={ele.img} alt={ele.tittle}/>
                  <Typography sx={{fontSize:'23px',fontWeight:'700',fontFamily:'montserrat',color:'whitesmoke',textAlign:'center',padding:'10px'}}>{ele.tittle}</Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
            <Button onClick={()=>navigate('/industry')} variant='contained' sx={{margin:'30px',backgroundColor:'red',width:'100px'}}>MORE</Button>
        </Container>
        </div>
    )
}

export default Industry