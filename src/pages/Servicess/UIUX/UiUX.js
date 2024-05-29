import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import "../UIUX/uiux.css"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger

const UiUX = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
  gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

  const elementRefs = useRef([]); // Ref for multiple elements

  useEffect(() => {
    // Use GSAP inside useEffect
    gsap.utils.toArray(".revealUp").forEach((elem) => {
      gsap.fromTo(
        elem,
        { x: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          autoAlpha: 1,
          ease: "back",
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            markers: false,
            toggleActions: "play none none reverse" // Only play the animation on enter
          }
        }
      );
    });
  }, []); // Empty dependency array for mounting once


  useEffect(() => {
    // Use GSAP inside useEffect
    gsap.utils.toArray(".revealDown").forEach((elem) => {
      gsap.fromTo(
        elem,
        { x: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          autoAlpha: 1,
          ease: "back",
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            markers: false,
            toggleActions: "play none none reverse" // Only play the animation on enter
          }
        }
      );
    });
  }, []); // Empty dependency array for mounting once

  return (
    <Box sx={{ backgroundColor: 'black',marginTop:isMobileView?"80px":"0px" }}>
      <Container>
        <Typography sx={{ fontSize:isMobileView?"20px":"40px", fontWeight: '900', textAlign: 'center', marginTop: '30px', fontFamily: 'montserrat', color: '#666' }}>Transform Your Business with Cutting-Edge <span style={{ color: '#f91942', fontSize:isMobileView?"40px":"80px", fontWeight: '900' }}>UI/UX Design </span> for  Unmatched Website Development</Typography>

        <Box>
          <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%',marginTop:'50px' }}>
            <Box>
              <Typography sx={{ fontSize: '40px', color: '#666', fontFamily: 'montserrat', textAlign: 'center', hyphens: 'inherit' }}>UI UX DESIGN FOR <span style={{ color: '#f91942', fontSize: '40px', fontWeight: '900' }}> WEB, MOBILE </span> </Typography>
              <Typography sx={{ fontSize: '19px', color: '#666', fontFamily: 'montserrat', textAlign: 'center', hyphens: 'inherit' }}>A well-designed user interface (UI) creates an attractive first impression, encouraging visitors to stay on your site longer and explore your offerings. An appealing design can set your business apart from competitors.</Typography>
              <Typography sx={{ fontSize: '19px', color: '#666', fontFamily: 'montserrat', textAlign: 'center', hyphens: 'inherit' }}>Effective UI/UX design guides users through the customer journey smoothly, reducing friction points that can cause potential customers to abandon their journey. This leads to higher conversion rates and increased sales.</Typography>
            </Box>
          </Box>

          <Box className="revealUp" ref={(el) => (elementRefs.current[0] = el)} sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '0px' }}>
            <Box sx={{ width: '100%', margin: '0px', overflow: 'hidden', lineHeight: '0px',display:'flex',flexDirection:'column',justifyContent:'center' }}>
             
              {isMobileView && (
                <img style={{ width: '100%', height: '450px', borderRadius: '30px',display:'flex',alignItems:'center',justifyContent:'center' }} src='/assets/product.svg' alt='banner' />
              )}
              <div className="section-head col-sm-7">
              <h4 style={{ fontSize: isMobileView ? "30px" : "40px" }}><span>PRODUCT </span>DESIGN</h4>
            </div>
              <Typography sx={{ fontSize: '20px', color: '#666', fontFamily: 'roboto', textAlign: 'start' }}>
                At Codesintesity, we design intuitive, user-centered UI/UX by starting with research and persona creation. We develop and test wireframes and prototypes, ensuring responsive and accessible designs. Collaboration and iterative processes keep us adaptable. We prioritize accessibility, meet WCAG standards, and optimize performance with lazy loading and image optimization for high-quality, user-friendly products.</Typography>       </Box>
                {!isMobileView && (
                  <img style={{ width: '600px', height: 'auto', borderRadius: '30px' }} src='/assets/product.svg' alt='banner' />
                )}
          </Box>
        </Box>

        <Box>
          <Box className="revealDown" ref={(el) => (elementRefs.current[0] = el)} sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%',marginTop:'30px' }}>
          {isMobileView?(
            <img style={{ width: '100%', height: '350px', borderRadius: '100px' }} src='/assets/casestudy.svg' alt='banner' />
          ):(
            <img style={{ width: '600px', height: 'auto', borderRadius: '100px' }} src='/assets/casestudy.svg' alt='banner' />
          )}
          <Box sx={{ overflow: 'hidden', lineHeight: '0px', width: '100%' }}>     
            <div className="section-head col-sm-7">
          <h4 style={{ fontSize: isMobileView ? "30px" : "40px" }}><span>CASE </span>STUDY</h4>
        </div>              
          <Typography sx={{ fontSize: '19px', color: '#666', fontFamily: 'roboto', textAlign: 'start', hyphens: 'inherit' }}>A well-designed user interface (UI) creates an attractive first impression, encouraging visitors to stay on your site longer and explore your offerings. An appealing design can set your business apart from competitors. Effective UI/UX design guides users through the customer journey smoothly, reducing friction points that can cause potential customers to abandon their journey. This leads to higher conversion rates and increased sales.</Typography>
       </Box>
          
          </Box>


          <Box className="revealUp" sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {isMobileView && (
            <img style={{ width: '100%', height: '400px', borderRadius: '30px' }} src='/assets/wireframe.svg' alt='banner' />
          )}
            <Box sx={{ overflow: 'hidden', lineHeight: '0px', width: '100%' }}>
              <div className="section-head col-sm-7">
                <h4 style={{ fontSize: isMobileView ? "30px" : "40px" }}><span>WIREFRAME </span>DESIGN</h4>
              </div>                            <Typography sx={{ fontSize: '20px', color: '#666', fontFamily: 'roboto', textAlign: 'start' }}>
                At Codesintesity, we design intuitive, user-centered UI/UX by starting with research and persona creation. We develop and test wireframes and prototypes, ensuring responsive and accessible designs. Collaboration and iterative processes keep us adaptable. We prioritize accessibility, meet WCAG standards, and optimize performance with lazy loading and image optimization for high-quality, user-friendly products.</Typography>       </Box>
                {!isMobileView && (
                  <img style={{ width: '600px', height: 'auto', borderRadius: '30px' }} src='/assets/wireframe.svg' alt='banner' />
                )}
          </Box>

          <Box className="revealDown" sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {isMobileView?(
            <img style={{ width: '100%', height: '400px', borderRadius: '30px' }} src='/assets/design.svg' alt='banner' />

          ):(
            <img style={{ width: '600px', height: 'auto', borderRadius: '30px' }} src='/assets/design.svg' alt='banner' />

          )}
            <Box sx={{ overflow: 'hidden', lineHeight: '0px', width: '100%'}} >
              <div className="section-head col-sm-7">
                <h4 style={{ fontSize: isMobileView ? "30px" : "40px" }}><span> DESIGN </span>PROCESS</h4>
              </div>                            <Typography sx={{ fontSize: '19px', color: '#666', fontFamily: 'roboto', textAlign: 'start', hyphens: 'inherit' }}>A well-designed user interface (UI) creates an attractive first impression, encouraging visitors to stay on your site longer and explore your offerings. An appealing design can set your business apart from competitors.</Typography>
              <Typography sx={{ fontSize: '19px', color: '#666', fontFamily: 'roboto', textAlign: 'start', hyphens: 'inherit' }}>Effective UI/UX design guides users through the customer journey smoothly, reducing friction points that can cause potential customers to abandon their journey. This leads to higher conversion rates and increased sales.</Typography>
            </Box>

          </Box>


          <Box className="revealUp" sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%', }}>
          {isMobileView && (
            <img style={{ width: '100%', height: '400px', borderRadius: '30px' }} src='/assets/prototyping.svg' alt='banner' />
          )}
            <Box sx={{ overflow: 'hidden', lineHeight: '0px', width: '100%' }}>
              <div className="section-head col-sm-7">
                <h4 style={{ fontSize: isMobileView ? "30px" : "40px" }}><span>PROTOTYPE</span>DESIGN</h4>
              </div>                            <Typography sx={{ fontSize: '20px', color: '#666', fontFamily: 'roboto', textAlign: 'start' }}>
                At Codesintesity, we design intuitive, user-centered UI/UX by starting with research and persona creation. We develop and test wireframes and prototypes, ensuring responsive and accessible designs. Collaboration and iterative processes keep us adaptable. We prioritize accessibility, meet WCAG standards, and optimize performance with lazy loading and image optimization for high-quality, user-friendly products.</Typography>       </Box>
                {!isMobileView && (
                  <img style={{ width: '600px', height: 'auto', borderRadius: '30px' }} src='/assets/prototyping.svg' alt='banner' />
                )}
          </Box>





        </Box>
      </Container>
    </Box>
  )
}

export default UiUX