import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import "../choose/choose.css"
const Choose = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down('md'));
  return (
   <Container sx={{marginTop:'30px'}}>
    <div class="feat bg-gray pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-head col-sm-12">
          <h4 style={{fontSize:isMobileView?"40px":"60px"}}><span>Why Choose</span> Us?</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span style={{padding:'15px',marginTop:'10px'}} class="icon feature_box_col_one"><i style={{padding:'5px',marginTop:'10px'}} class="fa fa-globe">
          </i></span>
            <h6>Modern Design</h6>
            <p>We use latest technology for the latest world because we know the demand of peoples.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span style={{padding:'15px',marginTop:'10px'}} class="icon feature_box_col_two"><i style={{padding:'5px',marginTop:'10px'}} class="fa fa-anchor"></i></span>
            <h6>Creative Design</h6>
            <p>We are always creative and and always lisen our costomers and we mix these two things.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span style={{padding:'15px',marginTop:'10px'}} class="icon feature_box_col_three"><i style={{padding:'5px',marginTop:'10px'}} class="fa fa-hourglass-half"></i></span>
            <h6>24 x 7 User Support</h6>
            <p>If our customer has any problem and any query we are always happy to help then.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span style={{padding:'15px',marginTop:'10px'}} class="icon feature_box_col_four"><i style={{padding:'5px',marginTop:'10px'}} class="fa fa-database"></i></span>
            <h6>Business Growth</h6>
            <p>Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span style={{padding:'15px',marginTop:'10px'}} class="icon feature_box_col_five"><i style={{padding:'5px',marginTop:'10px'}} class="fa fa-upload"></i></span>
            <h6>Market Strategy</h6>
            <p>Holding back technology to preserve broken business models is like allowing blacksmiths to veto the internal.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span style={{padding:'15px',marginTop:'10px'}} class="icon feature_box_col_six"><i style={{padding:'5px',marginTop:'10px'}} class="fa fa-camera"></i></span>
            <h6>Affordable cost</h6>
            <p>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

   </Container>
  )
}

export default Choose