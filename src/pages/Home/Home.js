import { Box } from '@mui/material'
import React from 'react'
import Banner from './banner/Banner'
import HomeAbout from './homeAbout/HomeAbout'
import Feature from './featureProvided/Feature'
import Choose from './choose/Choose'
import HomeContact from './HomeContact/HomeContact'
import TechStack from './TechStackUsed/TechStack'
import Industry from './Industry/Industry'

const Home = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column'}}>
     <Banner/>
     <HomeAbout/>
     <Feature/>
     <Choose/>
     <TechStack/>
     <Industry/>
    </Box>
  )
}

export default Home