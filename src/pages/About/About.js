import React, { useEffect } from 'react'
import aboutvideo from "../About/about.mp4"
import mission from "../About/ourmission.jpg"
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useLocation } from 'react-router-dom'
const About = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box>
    <Box sx={{ border: 'none', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <video autoPlay muted loop style={{ width: '100%',height:isMobileView?"400px":"600px", objectFit: 'cover' }}>
        <source src={aboutvideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <Box sx={{ position: 'absolute', bottom:'40%', transform: 'translate(-50%, 100%)', color: 'white', fontSize: '24px', animation: 'moveUp 3s forwards' }}>
        <Typography sx={{ fontSize:isMobileView?"50px":"100px", width: '950px', fontFamily: 'Montserrat', fontWeight: '700', textAlign: 'center' }}>ABOUT US
        </Typography>
      </Box>
    </Box>
     <Container sx={{marginTop:'40px'}}>
       <Box sx={{display:'flex',flexDirection:'row'}}>
        <Box>
         <Typography style={{ fontSize: '40px', fontWeight: '900', fontFamily: 'Montserrat',color:'#f91942' }}>ABOUT,</Typography>
         <Typography sx={{ fontSize: '20px', fontFamily: 'Montserrat',color:'#666', fontWeight: '400', textAlign: 'start' }}><span style={{ fontSize: '25px', fontWeight: '900', fontFamily: 'Montserrat' }}>CODESINTENSITY</span> is to revolutionize the digital landscape by providing innovative solutions that empower businesses to thrive in the modern world. We are committed to leveraging our expertise in web development, design, and digital marketing to deliver cutting-edge solutions tailored to meet the unique needs of each of our clients</Typography>
        </Box>  
       </Box>
       <Box sx={{display:'flex',flexDirection:'row',marginTop:'30px'}}>
       <Box>
        <Typography style={{ fontSize: '40px', fontWeight: '900', fontFamily: 'Montserrat',color:'#f91942' }}>MISSION & STORY,</Typography>
        <Typography sx={{ fontSize: '20px', fontFamily: 'Montserrat',color:'#666', fontWeight: '400', textAlign: 'start' }}> at <span style={{ fontSize: '25px', fontWeight: '900', fontFamily: 'Montserrat' }}>CODESINTENSITY</span> is to revolutionize the digital landscape by providing innovative solutions that empower businesses to thrive in the modern world. We are committed to leveraging our expertise in web development, design, and digital marketing to deliver cutting-edge solutions tailored to meet the unique needs of each of our clients</Typography>
       </Box>  
      </Box>
      <Box sx={{ marginTop:'30px', display: 'flex', width: '100%', flexDirection: 'column',}}>
      <Typography style={{ fontSize: '40px', fontWeight: '900', fontFamily: 'Montserrat',color:'#f91942' }}>FAQs,</Typography>
      <section className="bg-dark" style={{ backgroundColor: 'black', color: '#666', display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , padding:'1px'}}>
      <div className="container" style={{backgroundColor:'black'}}>
          <div className="" style={{Color:'black',backgroundColor:'black'}}>

            <div  style={{backgroundColor:'black'}}>
              <h2 className="h3 mb-1">How can we help you?</h2>
              <p >We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.</p>
              <div className="accordion accordion-flush"  id="accordionExample" >
                <div className="accordion-item" style={{color:'#666',backgroundColor:'black'}}>
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:'black',color:'#666'}}>
                      What is UPSC?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>UPSC stands for the Union Public Service Commission. It is India's central recruiting agency responsible for conducting examinations for various civil services and government jobs.</p>

                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{color:'#666',backgroundColor:'black'}}>
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{backgroundColor:'black',color:'#666'}}>
                    What exams does UPSC conduct?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    UPSC conducts a range of exams including the Civil Services Examination (CSE), Indian Forest Service Examination (IFoS), Engineering Services Examination (ESE), Combined Defence Services Examination (CDS), and many more.                      </div>
                  </div>
                </div>

                <div className="accordion-item" style={{color:'#666',backgroundColor:'black'}}>
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={{backgroundColor:'black',color:'#666'}}>
                    How should I start my UPSC preparation?
                    
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Begin by understanding the exam pattern, syllabus, and eligibility criteria. Devise a study plan and start with basic NCERT books for building a strong foundation in various subjects. Aspirant can go through our YouTube and Instagram channel for better support.

                      </p>

                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{color:'#666',backgroundColor:'black'}}>
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"  style={{backgroundColor:'black',color:'#666'}}>
                What subjects should I focus on for UPSC?                    
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample"  style={{backgroundColor:'black',color:'#666'}}>
                  <div className="accordion-body">
                    <p>The UPSC syllabus covers a wide range of subjects including History, Geography, Indian Polity, Economics, Science & Technology, Environment & Ecology, and Current Affairs. Each subject carries different weightage in the exam.

                    </p>

                  </div>
                </div>
              </div>
             
           

         

    
              </div>
            </div>

          </div>
        </div>
      </section>

    </Box>

    <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
       <Box sx={{width:'100%',height:'190px',backgroundColor:'#110c11',margin:'20px',display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'space-around',borderRadius:'20px',boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 100, 0, 0.12) 0px 12px 30px, rgba(0, 100, 0, 0.12) 10px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(100, 0, 0, 0.09) 0px -3px 5px'}}>
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
       <Typography sx={{color:'white',fontSize:'20px',fontFamily:'Montserrat',fontWeight:'600'}}>Get Free Consultation Now!</Typography>
       <Typography sx={{color:'white',fontSize:'15px',fontFamily:'Montserrat',fontWeight:'400',maxWidth:'28 0px'}}>Let’s create a powerful website that grows with your business.</Typography>

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
    </Box>
  )
}

export default About