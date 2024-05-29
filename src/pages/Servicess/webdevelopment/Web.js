import { Box, Container, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { useLocation, useNavigate } from 'react-router-dom';
import web from "../webdevelopment/web.jpg"
import CircleIcon from '@mui/icons-material/Circle';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger



const Web = () => {


     const lineRefs = useRef([]);

  useEffect(() => {
    gsap.to(lineRefs.current, {
      duration: 1,
      width: '100%',
      stagger: 0.5,
      ease: 'power2.out',
    });
  }, []);


    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    const elementRefs = useRef([]); // Ref for multiple elements

    useEffect(() => {
        // Use GSAP inside useEffect
        gsap.utils.toArray(".revealUp").forEach((elem) => {
            gsap.fromTo(
                elem,
                { y: 100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 80%",
                        end: "bottom 20%",
                        markers: false,
                        toggleActions: "play none none none" // Only play the animation on enter
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
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
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

    const data = [
        {
            id: 1,
            img: '/assets/html.webp',
            val: "HTML5"
        },
        {
            id: 2,
            img: '/assets/css.webp',
            val: "CSS3"
        }, {
            id: 3,
            img: '/assets/javascript.webp',
            val: "Javascript"
        }, {
            id: 4,
            img: '/assets/react.webp',
            val: "React"
        },
        {
            id: 5,
            img: '/assets/angular.png',
            val: "Angular"
        },
        {
            id: 6,
            img: '/assets/materail.webp',
            val: "MaterialUI"
        }, {
            id: 7,
            img: '/assets/tailwand.webp',
            val: "Tailwand"
        },
        {
            id: 8,
            img: '/assets/redux.webp',
            val: "Redux"
        },
        {
            id: 9,
            img: '/assets/vue.webp',
            val: "Vue"
        },
        {
            id: 10,
            img: '/assets/jquery.svg',
            val: "Jquery"
        },
        {
            id: 11,
            img: '/assets/bootstrap.webp',
            val: "Bootstrap"
        },
        {
            id: 12,
            img: '/assets/nextjs.webp',
            val: "Next JS"
        },
    ]

    const databack = [
        {
            id: 1,
            img: '/assets/nodejs.webp',
            val: "Nodejs"
        },
        {
            id: 2,
            img: '/assets/python.webp',
            val: "Python"
        }, {
            id: 3,
            img: '/assets/express.webp',
            val: "Express Js"
        }, {
            id: 4,
            img: '/assets/spring.webp',
            val: "Spring"
        },
        {
            id: 5,
            img: '/assets/net.webp',
            val: ".Net"
        },
        {
            id: 6,
            img: '/assets/java.png',
            val: "Java"
        },
    ]

    const techno = [
        {
            id: 1,
            img: '/assets/frontend.png',
            heading: 'Frontend',
            val: 'We use the most popular frontend frameworks like React.js, Vue.js, and Angular that enable us to create the surface layer of your product.'
        },
        {
            id: 2,
            img: '/assets/backend.png',
            heading: 'Backend',
            val: 'We use server-side technologies like Python, Ruby on Rails, and Node.js for prototyping and development, producing fast and scalable web apps.'
        },
        {
            id: 3,
            img: '/assets/fullstack.png',
            heading: 'Full Stack',
            val: 'We deliver end-to-end web development, combining frontend and backend solutions and other technologies necessary to make your product a success.'
        },
        {
            id: 4,
            img: '/assets/lowcode.png',
            heading: 'Low-Code',
            val: 'We also specialize in building no-code and low-code web solutions that allow clients to save time and money. We use platforms like Webflow or Mendix.'
        }
    ]

    const steps = [
        {
          title: 'Understanding Your Needs',
          description:
            'We delve into your goals, audience, and desired features to customize the development process to meet your specific requirements effectively.',
        },
        {
          title: 'Crafting Your Design',
          description:
            'Our skilled designers craft an eye-catching and intuitive website design that not only looks great but also enhances user experience.',
        },
        {
          title: 'Development Phase',
          description:
            'Our experienced developers bring your design to life, coding features and ensuring seamless functionality across various devices and platforms.',
        },
        {
          title: 'Testing & Launch',
          description:
            'Before the big reveal, we meticulously test every aspect of your website to ensure it performs flawlessly, fixing any issues before launching it to the world.',
        },
      ];


    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box sx={{ marginTop: isMobileView ? "100px" : "", backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Container sx={{ display: 'flex', overflow: 'hidden', lineHeight: 'auto', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: "center", width: '100%', margin: '10px' }}>
                <Box className="revealUp" ref={(el) => (elementRefs.current[0] = el)} sx={{ overflow: 'hidden', lineHeight: 'auto', width: '100%', display: 'flex', flexDirection: 'column', padding: '0px' }}>
                    <Typography sx={{ color: '#666', fontSize: isMobileView ? '25px' : "35px", textAlign:"center", fontWeight: '700', fontFamily: 'montserrat' }}>Transforming businesses with <span style={{ color: '#f91942' }}>stunning websites!</span></Typography>
                    <Typography sx={{ color: '#666', fontSize: isMobileView ? "15px" : '20px', maxWidth: 'auto', marginTop: '5px', hyphens: 'auto', textAlign:"center",fontFamily:'sans-serif'
                     }}>In today's digital age, having an online presence is essential for businesses to reach and engage with potential customers. At <span style={{ color: '#f91942' }}>CODESINTENSITY</span>, we specialize in crafting dynamic and effective websites that elevate businesses in the online sphere. With meticulous attention to detail and a keen understanding of user experience, our team creates bespoke websites tailored to meet the unique needs and goals of each client.</Typography>
                </Box>
            </Container>
            <Box className="revealUp" sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", marginTop:isMobileView?"10px":"50px",alignItems:'center',justifyContent:'center' }}>

                <img style={{ width: '100%', height:isMobileView?"450px":"500px" }} src="/assets/webback.svg" />

                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', marginRight: '10px' }}>

                    <Typography sx={{ fontSize: '20px', color: '#666', textAlign: isMobileView ? "center" : "" }}>At CodesIntensity, we offer every web development service you need to build a full-blown web-based product, such as:</Typography>
                    <Box sx={{ margin: '5px' }}>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', alignItems:'baseline',margin:isMobileView?"10px":'5px', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Website Development</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', alignItems:'baseline',margin:isMobileView?"10px":'5px', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Web Application Development</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', alignItems:'baseline',margin:isMobileView?"10px":'5px', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />eCommerce Solutions Development</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', alignItems:'baseline',margin:isMobileView?"10px":'5px', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Dedicated Content Management System Development</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', alignItems:'baseline',margin:isMobileView?"10px":'5px', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />No-code Development & Low-code Development</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', alignItems:'baseline',margin:isMobileView?"10px":'5px', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Ideation - Market Research - Wireframing - Prototyping</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', alignItems:'baseline',margin:isMobileView?"10px":'5px', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Project Management - UI Design - UX Design - QA Testing</Typography>
                        <Typography sx={{ fontSize: isMobileView ? "15px " : "24px", fontWeight: '700', display: 'flex', alignItems:'baseline',margin:isMobileView?"10px":'5px', color: '#666', gap: '5px', fontFamily: 'montserrat' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Cybersecurity - Consulting  - Maintenance - Support</Typography>

                    </Box>
                    <Typography sx={{ fontSize: '15px', color: '#666', margin: '5px', textAlign: isMobileView ? "center" : "start" }}>The role of a web development company is to seek and build solutions that can best fulfill the client’s unique business goals. With the right web development services, you’ll be able to build a successful product from scratch or increase the performance of an existing one.</Typography>
                </Box>
            </Box>


            <Container sx={{ marginTop: '50px' }}>
                <Typography sx={{ fontSize: isMobileView ? "30px" : "35px", color: '#366666', margin: '5px', textAlign: "center", fontWeight: '900',fontFamily:'montserrat' }}>Which technologies will bring maximum value to your business?</Typography>
                <Box>
                    <Grid container>
                        {techno.map(item => (
                            <Grid key={item.id} item xs={12} sm={6} md={6} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px', gap: '20px' }}>
                                <Box sx={{ overflow: 'hidden', lineHeight: 'auto', display: 'flex', flexDirection: 'column', marginTop: '5px', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'black', border: '1px solid #3666', margin: '20px',padding:'20px',borderRadius:'20px' }}>
                                    <img style={{ width: '100px', height: 'auto', backgroundColor: 'transparent' }} src={item.img} alt={`Image ${item.id}`} />
                                    <Typography sx={{
                                        color: '#366666', fontSize: '20px', padding: '20px', lineHeight: '1px', fontWeight: '800', lineHeight: '0px'
                                    }}>{item.heading}</Typography>
                                    <Typography sx={{ color: '#666', textAlign: 'center', hyphens: 'auto',width:'100%' }}>{item.val}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>


            <Container sx={{ marginTop: '50px' }} >

                <Typography sx={{ fontSize: isMobileView ? "30px" : "35px", fontWeight: '800', textAlign: 'center', color: '#366666',fontFamily:'montserrat' }}>Benefits of choosing <span style={{ color: '#f91942' }}>CODESINTENSITY</span> as your Website Development !</Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', lineHeight: '0px' }}>

                    <Box className="revealDown" ref={(el) => (elementRefs.current[0] = el)} sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '30px' }}>
                        {isMobileView ? (
                            <img style={{ width: '100%', height: '280px', margin: '20px', borderRadius: '30px' }} src='/assets/webdesign.webp' alt='banner' />
                        ) : (
                            <img style={{ width: '800px', height: 'auto', margin: '20px', borderRadius: '30px' }} src='/assets/webdesign.webp' alt='banner' />
                        )}
                        <Box className="revealDown" ref={(el) => (elementRefs.current[0] = el)} sx={{ overflow: 'hidden', lineHeight: '0px', width: '95%' }}>
                            <div className="section-head col-sm-7">
                                <h4 style={{ fontSize: isMobileView ? "25px" : "30px" }}><span>Stunning Website </span>Design</h4>
                            </div>
                            <Typography sx={{ fontSize: isMobileView ? "15px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row',  color: '#666', gap: '5px', fontFamily: 'montserrat',alignItems:'baseline' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />We success is our dedication to delivering visually stunning websites through collaboration with our expert web designers.</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "15px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row',  color: '#666', gap: '5px', fontFamily: 'montserrat',alignItems:'baseline' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Offering tailor-made designs that translate clients' visions into reality.</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "15px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row',  color: '#666', gap: '5px', fontFamily: 'montserrat',alignItems:'baseline' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Ensuring a seamless user experience with responsive, mobile-friendly, and user-friendly interfaces.</Typography>

                            </Box>
                    </Box>

                    <Box className="revealUp" sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%', overflow: 'hidden', lineHeight: '0px', marginTop: '100px' }}>
                        {isMobileView && (
                            <img style={{ width: '100%', height: '280px', borderRadius: '30px', overflow: 'hidden', lineHeight: '1' }} src='/assets/uniquebranding.webp' alt='banner' />
                        )}
                        <Box sx={{ overflow: 'hidden', lineHeight: '0px', width: '100%',marginTop:isMobileView?"20px":"" }}>
                            <div className="section-head col-sm-7">
                                <h4 style={{ fontSize: isMobileView ? "25px" : "30px" }}><span>Unique </span>Branding</h4>
                            </div>                             <Typography sx={{ fontSize: isMobileView ? "15px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#666', gap: '5px', fontFamily: 'montserrat',alignItems:'baseline' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />We success is our dedication to delivering visually stunning websites through collaboration with our expert web designers.</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "15px " : "15px", fontWeight: '700', display: 'flex',  color: '#666', gap: '5px', fontFamily: 'montserrat' ,alignItems:'baseline'}}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Offering tailor-made designs that translate clients' visions into reality.</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "15px " : "15px", fontWeight: '700', display: 'flex',  color: '#666', gap: '5px', fontFamily: 'montserrat',alignItems:'baseline' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Ensuring a seamless user experience with responsive, mobile-friendly, and user-friendly interfaces.</Typography>       </Box>
                        {!isMobileView && (
                            <img style={{ width: '800px', height: 'auto', borderRadius: '30px', margin: '20px' }} src='/assets/uniquebranding.webp' alt='banner' />
                        )}
                    </Box>

                    <Box className="revealUpaaa" ref={(el) => (elementRefs.current[0] = el)} sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '50px' }}>
                        {isMobileView ? (
                            <img style={{ width: '100%', height: '300px', margin: '20px', borderRadius: '30px' }} src='/assets/webdevelop.webp' alt='banner' />
                        ) : (
                            <img style={{ width: '800px', height: 'auto', margin: '20px', borderRadius: '30px' }} src='/assets/webdevelop.webp' alt='banner' />
                        )}
                        <Box sx={{ overflow: 'hidden', lineHeight: '0px', width: '95%' }}>
                            <div className="section-head col-sm-7">
                                <h4 style={{ fontSize: isMobileView ? "25px" : "30px",width:'100%' }}><span>Website </span>Development</h4>
                            </div>
                            <Typography sx={{ fontSize: isMobileView ? "15px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row',  color: '#666', gap: '5px', fontFamily: 'montserrat',alignItems:'baseline' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Crafting visually stunning websites with intelligent functionality for an effective online presence.</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "15px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row',  color: '#666', gap: '5px', fontFamily: 'montserrat',alignItems:'baseline' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Prioritizing optimized performance with faster loading speeds for user satisfaction.</Typography>
                            <Typography sx={{ fontSize: isMobileView ? "15px " : "15px", fontWeight: '700', display: 'flex', flexDirection: 'row',  color: '#666', gap: '5px', fontFamily: 'montserrat',alignItems:'baseline' }}><CircleIcon sx={{ color: '#f91942', fontSize: '10px', fontWeight: '900' }} />Ensuring security through robust measures to safeguard user data.
                            </Typography>

                            </Box>
                    </Box>

                </Box>
            </Container>
            <Box  className="revealUp" sx={{marginTop:'50px'}}>
            <Typography sx={{fontSize:isMobileView?"40px":"50px",fontWeight:'900',fontFamily:'montserrat',textAlign:'center',color:'#366666',marginBottom:'40px'}}>Process Involved</Typography>

            <Container>
            <Grid container spacing={2}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center', position: 'relative' }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: '#f91942',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                      margin: '0 auto',
                    }}
                  >
                    {index + 1}
                  </Box>
                  {index <= steps.length - 1 && (
                    <Box
                      ref={(el) => (lineRefs.current[index] = el)}
                      sx={{
                        width: 0,
                        height: 2,
                        backgroundColor: '#f91942',
                        mt: 2,
                        mx: 'auto',
                      }}
                    />
                  )}
                  <Typography  sx={{ mt: 1, color: '#666', width: '100%', textAlign: 'center',fontSize:'22px' , fontWeight:'900'}}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', padding: '10px' }}>
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          </Container>
          </Box>
    



            <Box className="revealUp" sx={{ overflow: 'hidden', lineHeight: 'auto', marginTop: '20px', marginBottom: '50px', width: '100%' }}>
                <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', color: '#366666', textAlign: 'center', marginTop: '20px',fontFamily:'montserrat' }}>Frontend Technology</Typography>

                <Grid container>
                    {data.map(item => (
                        <Grid key={item.id} item xs={6} sm={6} md={6} lg={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px', gap: '10px' }}>

                            <Paper sx={{ overflow: 'hidden', lineHeight: 'auto', width: '150px', height: 'auto', display: 'flex', flexDirection: 'column', marginTop: '5px', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'black',borderRadius:'30px' }}>

                                <img style={{ width: '100px', height: '100%', backgroundColor: 'transparent', padding: '10px' }} src={item.img} alt={`Image ${item.id}`} />
                                <Typography sx={{
                                    color: 'white', fontSize: '20px', padding: '20px', lineHeight: '1px', fontWeight: '700', lineHeight: '0px'
                                }}>{item.val}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box className="revealUp" sx={{ overflow: 'hidden', marginTop: '10px', marginBottom: '50px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', color: '#366666', textAlign: 'center', marginTop: '20px' ,fontFamily:'montserrat'}}>Backend Technology</Typography>

                <Grid container >
                    {databack.map(item => (
                        <Grid sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }} key={item.id} item xs={6} sm={6} md={6} lg={2}>

                            <Paper sx={{ width: '170px', maxHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'black', gap: '20px', margin: '20px' }}>

                                <img style={{ width: '100px', height: '100%', backgroundColor: 'transparent', padding: '10px' }} src={item.img} alt={`Image ${item.id}`} />
                                <Typography sx={{ color: 'white', fontSize: '20px', lineHeight: '0px', fontWeight: '700', padding: '15px' }}>{item.val}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>



            <Box sx={{ marginTop:'30px', display: 'flex', minWidth: '100%', flexDirection: 'column',backgroundColor:'black'}}>
    <Typography sx={{color:'#366666',fontSize: isMobileView ? "30px" : "50px",fontWeight:'800',fontFamily:'montserrat',textAlign:'center'}}>Frequently Asked Questions</Typography>
      <section style={{ backgroundColor: 'black', color: '#666', display: 'flex', minWidth: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , padding:'1px'}}>
      <div  style={{backgroundColor:'black'}}>
          <div className="" style={{Color:'black',backgroundColor:'black'}}>

            <div  style={{color:'#666',backgroundColor:'black',padding:'10px'}}>
              <h2 className="h3 mb-2" style={{lineHeight:'40px'}}>How can we help you?</h2>
              <p >We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.</p>
              <div style={{border:'1px solid white',width:'100%'}} className="accordion accordion-flush"  id="accordionExample" >
                <div className="accordion-item" style={{backgroundColor:'black',border:'1px solid white'}}>
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:'black',color:'#666'}}>
                    What services do you offer for web development?                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p style={{color:'#666'}}>
                      At CodesIntensity, we offer a comprehensive range of web development services, including custom website design, front-end and back-end development, e-commerce solutions, content management systems (CMS), responsive web design, web application development, and website maintenance and support.                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{color:'#666',backgroundColor:'black',border:'1px solid white'}}>
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{backgroundColor:'black',color:'#666'}}>
                    How much does it cost to develop a website?                      </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                  <p>  
                  The cost of developing a website varies based on the complexity, features, and design requirements. We provide tailored quotes after understanding your specific needs and project scope. Factors that influence cost include the type of website (e.g., informational, e-commerce), number of pages, custom functionalities, and design specifications.
                  </p>              </div>
                </div>

                <div className="accordion-item" style={{color:'#666',backgroundColor:'black',border:'1px solid white'}}>
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={{backgroundColor:'black',color:'#666'}}>
                    How long does it take to develop a website?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                      The timeline for website development depends on the project's size and complexity. Typically, a standard business website can take anywhere from 4 to 8 weeks, while more complex projects like e-commerce platforms or custom web applications may take several months. We work closely with clients to set realistic timelines and ensure timely delivery.
                      </p>

                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{color:'#666',backgroundColor:'black'}}>
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"  style={{backgroundColor:'black',color:'#666'}}>
                  Do you provide ongoing maintenance and support after the website is launched?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample"  style={{backgroundColor:'black',color:'#666'}}>
                  <div className="accordion-body">
                    <p>
                    Yes, we offer ongoing website maintenance and support services to ensure your website remains secure, updated, and functioning optimally. Our maintenance packages include regular updates, security checks, bug fixes, and performance optimization. We also provide support for any technical issues or updates you may need.
                    </p>

                  </div>
                </div>
              </div>
             

              <div className="accordion-item" style={{color:'#666',backgroundColor:'black'}}>
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"  style={{backgroundColor:'black',color:'#666'}}>
                Can you help improve my website's search engine ranking (SEO)?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample"  style={{backgroundColor:'black',color:'#666'}}>
                <div className="accordion-body">
                  <p>
                  Absolutely. Our web development services include SEO optimization to help improve your website's visibility on search engines. We follow best practices for on-page SEO, including keyword optimization, meta tags, and content structure. Additionally, we offer advanced SEO services such as link building, content marketing, and analytics tracking to help you achieve better search engine rankings and drive organic traffic.
                  </p>

                </div>
              </div>
            </div>
           
           

         

    
              </div>
            </div>

          </div>
        </div>
        </div>
      </section>

    </Box>



            <Container sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ width: '100%', height: '190px', backgroundColor: '#151922', margin: '20px', display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: 'space-around', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 100, 0, 0.12) 0px 12px 30px, rgba(0, 100, 0, 0.12) 10px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(100, 0, 0, 0.09) 0px -3px 5px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: 'white', fontSize: '20px', fontFamily: 'Montserrat', fontWeight: '600',textAlign:'center' }}>Let’s Build Something Extraordinary Together!</Typography>
                        <Typography sx={{ color: 'white', fontSize: '15px', fontFamily: 'Montserrat', fontWeight: '400', maxWidth: '28 0px' }}>Let’s connect with team.</Typography>

                    </Box>
                    <Box>
                        <button onClick={() => navigate('/contact')} className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <Typography onClick={() => navigate('/contact')} className="button-text">Contact Us</Typography>
                        </button>
                    </Box>
                </Box>
            </Container>
            <Divider orientation='horizontal' sx={{ border: '0.5px solid white', width: '100%' }} />
        </Box>
    )
}

export default Web;
