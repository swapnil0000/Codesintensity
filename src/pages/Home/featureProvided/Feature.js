import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, Container, Button, CardMedia, CardActions, useMediaQuery, useTheme } from '@mui/material';
import black from "../featureProvided/back.jpg";
import web from "../featureProvided/web.jpg"
import hosting from "../featureProvided/hostinghome.jpg"
import app from "../featureProvided/appdevelopment.jpg"
import {useNavigate} from "react-router-dom"
const Feature = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage card open/close

  const handleImageClick = () => {
    setIsOpen(!isOpen); // Toggle card open/close state
  };

  const navigate=useNavigate()


  const data=[
    {
      id:1,
      img:web,
      path:'/web',
      tittle:'Web Development',
      des:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    },
    {
      id:2,
      img:hosting,
      path:'/hosting',
      tittle:'Domain & Hosting',
      des:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    },
    {
      id:3,
      img:app,
      path:'/app',
      tittle:'App Development',
      des:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    },
  
  ]

  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down('md'))
  

  return (
    <div style={{ backgroundImage: `url(${black})`, backgroundSize: 'cover', height:isMobileView?"auto":"700px", padding: '20px' ,objectFit:'cover'}}>
    <Typography sx={{fontSize:isMobileView?"35px":"50px",fontWeight:'900',color:'white',textAlign:'center',marginTop:'30px'}}>Features Provided</Typography>
      <Container maxWidth="lg" sx={{marginTop:'20px'}}>
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={item} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Card sx={{ maxWidth: 345 , borderRadius:'10px',backgroundColor:'black'}}>
            <CardMedia
              sx={{ height: 160 }}
              image={item.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom sx={{fontSize:'30px',fontWeight:'700',color:'white'}}>
                {item.tittle}
              </Typography>
              <Typography variant="body2" color="white">
                {item.des}
              </Typography>
            </CardContent>
            <CardActions>
            <button onClick={()=>navigate(item.path)} className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <Typography className="button-text">Learn More</Typography>
        </button>
            </CardActions>
          </Card>
            </Grid>
          ))}
        </Grid>
        <Typography sx={{fontSize:'20px',color:'white',textAlign:'center',margin:'30px',fontFamily:'Montserrat'}}>Interested to See More? <span onClick={()=>navigate('/service')} style={{color:'red',fontWeight:'800',cursor:'pointer'}}> View More.</span></Typography>
      </Container>
    </div>
  );
};

export default Feature;
