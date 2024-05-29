import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { Button, Divider, Drawer, Grid, IconButton, List, Menu, MenuItem, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import hosting from "../Header/assetsmenu/hosting.png"
import web from "../Header/assetsmenu/webdevelopment.png"
import app from "../Header/assetsmenu/appdevelopment.png"
import marketing from "../Header/assetsmenu/marketing.png"
import maintain from "../Header/assetsmenu/maintainence.png"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import graphic from "../Header/assetsmenu/design.png"




export default function Header() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(false);
  const openMenuTable = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(!anchorEl)
  }

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(!openMenu);
  };

  const data = [
    {
      id: 1,
      img:"/assets/uiuxlogo.webp",
      tittle: 'UI & UX',
      path:'/uiux',
      des: 'Domain & hosting services to host your website at the top.'
    },
    {
      id: 2,
      img: web,
      tittle: 'Website Development',
      path:'/web',
      des: 'Developing a user-friendly interface to engage customers.'

    },
    {
      id: 3,
      img: app,
      tittle: 'App Development',
      path:'/app',
      des: 'Developing mobile Apps for both IOS & Androids.'
    },
    {
      id: 4,
      img: marketing,
      tittle: 'Digital Marketing',
      path:'/digital',
      des: 'Improve your website’s SEO & generate more leads.'
    },
    {
      id: 5,
      img: maintain,
      tittle: 'Website Maintainence',
      path:'/maintain',
      des: 'Regular updates to site backups, security checks, & optimization.'
    },
    {
      id: 6,
      img: graphic,
      tittle: 'Graphic Designer',
      path:'/graphic',
      des: 'Designing logos, and other media to build the brand identity.'
    },
  ]
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down('md'))

  const handleServices=()=>{
    navigate('/service');
    setOpenMenu(!openMenu);

  }

  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const handleDesktopServices=()=>{
    navigate('/service');
    setAnchorEl(!anchorEl)
  }

  const handleMenuTask=(url)=>{
    navigate(url);
    setAnchorEl(false);
    setOpenMenu(!openMenu)

  }

  const handleWhatsapp = () => {
    // Replace '1234567890' with the phone number you want to send the message to
    const phoneNumber = '7017541634';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

 
  return (
    <>
      {isMobileView && (
        <AppBar sx={{ position: 'fixed', backgroundColor: 'white', boxShadow: 'none', height: '100px' }}>
        <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '100px', width: '100%' }}>
          <Drawer
            anchor="top"
            open={openMenu}
            onClose={handleClose}
            sx={{ width: '50vw', "& .MuiPaper-root": { width: '100%',height:'310px' } }} // Set width to full viewport width
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end',backgroundColor:'#212529' }}>
              <IconButton onClick={handleClose} sx={{ color: 'white',fontSize:'25px',fontWeight:'900' }}>
                <CloseIcon  sx={{fontSize:'30px',fontWeight:'600',margin:'4px'}}/> {/* Assume CloseIcon is imported */}
              </IconButton>
            </Box>

            <List
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width:'100%',
                alignItems:'center',
                justifyContent: 'center', // Center items vertically
               // Center items horizontally
                height: '40vh', // Set height to full viewport height
                backgroundColor: '#212529',
              }}
            >

              <Typography onClick={handleClose} sx={{  fontSize: '25px',textDecoration:'none',color:'white',fontWeight: '500',lineHeight:'0px',padding:'20px' }} >Home</Typography>

              <Divider orientation='horizontal' sx={{width:'90%',color:'orange',height:'1px',border:'1px solid white',marginBottom: '10px',}}/>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography
                id="basic-button"
                sx={{ fontSize: '25px', cursor: 'pointer', color: 'white', fontWeight: '500' }}
                aria-controls={openMenuTable ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenuTable ? 'true' : undefined}
                onClick={handleClick}
              >
                Services
                <ExpandMoreIcon sx={{ color: 'white' }} />
              </Typography>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenuTable}
                onClose={handleMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                  sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'auto',
                    height: 'auto',
                    fontWeight: '600',
                    backgroundColor: '#212529',
                  },
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '50px', margin: '10px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end',backgroundColor:'#212529' }}>
                <IconButton onClick={handleMenuClose} sx={{ color: 'white',fontSize:'30px',fontWeight:'900' }}>
                  <CloseIcon  sx={{fontSize:'40px',fontWeight:'600',marginTop:'4px'}}/> {/* Assume CloseIcon is imported */}
                </IconButton>
              </Box>

              <Box>
  
                  <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: '900', fontFamily: 'montserrat', cursor: 'pointer' }}>Services</Typography>
                  <Typography onClick={handleServices} sx={{ color: '#f91942', fontSize: '20px', fontWeight: '900', fontFamily: 'montserrat', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>All Services <ArrowForwardIcon /> </Typography>

                  </Box>
                </Box>
                {data.reduce((acc, curr, index) => {
                  if (index % 3 === 0) {
                    acc.push(data.slice(index, index + 3));
                  }
                  return acc;
                }, []).map((group, groupIndex) => (
                  <MenuItem key={groupIndex}>
                    <Grid container spacing={1}>
                      {group.map(item => (
                        <Grid item xs={12} sm={4} key={item.id}>
                          <Box sx={{ width: '100%', height: '130px', backgroundColor: 'black', display: 'flex', flexDirection: 'column' ,alignItems:'center',justifyContent:'center'}}>
                            <Box onClick={()=>handleMenuTask(item.path)}  sx={{ display: 'flex', flexDirection: 'row','&:hover': {
                              transform: 'scale(1.1)', /* Zoom effect */
                            },    transition: 'transform 0.3s ease',
                            alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                              <img style={{ width: '80px', marginLeft: '20px', marginTop: '10px',height:'auto' }} src={item.img} />
                              <Typography sx={{ color: 'white', fontWeight: '900' }}>{item.tittle}</Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </MenuItem>
                ))}
              </Menu>
            </div> 
        <Divider orientation='horizontal' sx={{width:'90%',color:'orange',height:'1px',border:'1px solid white',marginBottom: '10px',}}/>
        <Link onClick={handleClose} style={{  fontSize: '25px',textDecoration:'none',color:'white',fontWeight:'500' }} to="/about">About</Link>   
        <Divider orientation='horizontal' sx={{width:'90%',color:'orange',height:'1px',border:'1px solid white',marginBottom: '10px',}}/>

       


              <Link onClick={handleClose} style={{  fontSize: '25px',textDecoration:'none',color:'white',fontWeight:'500' }} to="/contact">Contact</Link>
              <Divider orientation='horizontal' sx={{width:'90%',color:'orange',height:'1px',border:'1px solid white',marginBottom: '10px',}}/>
              <Link onClick={handleClose} style={{  fontSize: '25px',textDecoration:'none',color:'white',fontWeight:'500' }} to="/industry">Industries</Link>


              {/* Add more menu items as needed */}
            </List>
          </Drawer>
          


          <img
            style={{ cursor: 'pointer',width:'100px',height:'auto' }}
            onClick={() => { navigate("/") }}
          

            src="/assets/logo.png"
            alt='logo'
          />
          


          <Box>
    




            <IconButton color="inherit" aria-label="menu" onClick={handleMenuClick}>
              {openMenu ? <CloseIcon /> : <MenuIcon sx={{color:'black',fontSize:'25px',fontWeight:'900'}}/>}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      )} 
      <Box>
      {!isMobileView && 
        <AppBar sx={{ position: 'static', backgroundColor: 'white', boxShadow: 'none', height: '100px', width: '100%' }}>
          <Toolbar disableGutters={true} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 'auto', width: '100%' }}>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '6px' }}>
              <img onClick={() => { navigate("/") }} style={{ width: '99px', contain: 'cover',height:'auto' }} src="/assets/logo.png" alt='logo' />
            </Box>
            <Box  sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'50px'}}>

                <Typography sx={{ fontSize: '20px', cursor: 'pointer', color: '#4A455E', fontWeight: '600' }} onClick={()=>navigate('/')}>Home</Typography>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography
                  id="basic-button"
                  sx={{ fontSize: '20px', cursor: 'pointer', color: '#4A455E', fontWeight: '600' }}
                  aria-controls={openMenuTable ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenuTable ? 'true' : undefined}
                  onClick={handleClick}
                >
                  Services
                  <ExpandMoreIcon sx={{ color: '#4A455E' }} />
                </Typography>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenuTable}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    sx: {
                      display: 'flex',
                      flexDirection: 'column',
                      width: 'auto',
                      height: 'auto',
                      fontWeight: '600',
                      backgroundColor: '#212529',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'row', gap: '50px', margin: '10px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: '900', fontFamily: 'montserrat', cursor: 'pointer' }}>Services</Typography>
                    <Typography  onClick={handleDesktopServices} sx={{ color: '#f91942', fontSize: '20px', fontWeight: '900', fontFamily: 'montserrat', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>All Services <ArrowForwardIcon /> </Typography>
                  </Box>
                  {data.reduce((acc, curr, index) => {
                    if (index % 3 === 0) {
                      acc.push(data.slice(index, index + 3));
                    }
                    return acc;
                  }, []).map((group, groupIndex) => (
                    <MenuItem key={groupIndex}>
                      <Grid container spacing={1}>
                        {group.map(item => (
                          <Grid item xs={12} sm={4} key={item.id}>
                            <Box sx={{ width: '250px', height: '140px', backgroundColor: 'black', display: 'flex', flexDirection: 'column',alignItems:'center',justifyContent:'center' }}>
                              <Box onClick={()=>handleMenuTask(item.path)}  sx={{ display: 'flex',transition: 'transform 0.3s ease','&:hover': {
                                transform: 'scale(1.1)', /* Zoom effect */
                              }, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                                <img style={{ width: '80px', marginLeft: '10px', marginTop: '10px',height:'auto' }} src={item.img} />
                                <Typography sx={{ color: 'white', fontWeight: '400' }}>{item.tittle}</Typography>
                              </Box>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
                
               
                <Typography sx={{ fontSize: '20px', cursor: 'pointer', color: '#4A455E', fontWeight: '600' }} onClick={()=>navigate('/about')}>About</Typography>
                <Typography sx={{ fontSize: '20px', cursor: 'pointer', color: '#4A455E', fontWeight: '600' }} onClick={()=>navigate('/industry')}>Industries</Typography>


                <Typography sx={{ fontSize: '20px', cursor: 'pointer', color: '#4A455E', fontWeight: '600' }} onClick={()=>navigate('/contact')}>Contact</Typography>

            </Box>

            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
             <Button onClick={handleWhatsapp}  sx={{width:'200px',gap:'10px',border:'none',backgroundColor:'black',color:'white','&:hover': {
              backgroundColor: 'black', // Keeping the background color same on hover
              color: 'white',
    
              border:'1px solid black' // Keeping the text color same on hover
            },}} variant='outlined' >
            <WhatsAppIcon sx={{ color: 'lightgreen', fontWeight: '700',gap:'10px' }} />
            +91-7017541634</Button>
            </Box>
           
          </Toolbar>
        </AppBar>  }
        </Box>
        </>
  );
}
