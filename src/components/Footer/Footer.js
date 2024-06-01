import { Box, Container, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../Footer/foooter.css"
import logo from "../Footer/logo.png"

const Footer = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const data = [
    {
      id: 1,
      title: 'Pages',
      links: [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Services', path: '/service' }, { name: 'Contact', path: '/contact' }, { name: 'Industry', path: '/industry' }],
    },
    {
      id: 4,
      title: 'Links',
      links: [{ name: 'FAQs', path: '/faqs' }, { name: 'Privacy Policy', path: '/privacy' }, { name: 'Terms & Conditions', path: '/terms' }, { name: 'Refund Policy', path: '/refund' }, { name: 'Support', path: '/support' }],
    },
    {
      id: 2,
      title: 'Services',
      links: [{ name: 'Web Design', path: '/web' }, { name: 'UI & UX', path: '/graphic' }, { name: 'App Development', path: '/app' }, { name: 'Digital Marketing', path: '/digital' }, { name: 'Graphic Design', path: '/graphic' }],
    },
  ];
  const footerStyle = {
    textAlign: 'center',
    fontSize: '20px',
    color: '#495468',
    fontFamily: 'Arial, sans-serif'
};


  return (
    <Box >
    <Divider sx={{width:'100%',color:'white'}}/>
    <footer class="footer--light">
    <div class="footer-big">
      <div  class="container">
        <div  class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="footer-widget">
              <div class="widget-about" style={{display:'flex',flexDirection:'column',alignItems:isMobileView?"center":'',justifyContent:isMobileView?"center":""}}>
                <img style={{borderRadius:'50px',width:'100px'}} decoding="async" src="/assets/loggo.jpg" alt="" class="img-fluid"/>
                <p style={{textAlign:isMobileView?"center":""}}>We Craft Your Success Story in Every Pixel and Byte.</p>
               
              </div>
            </div>
       
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="footer-widget">
              <div style={{display:'flex',flexDirection:isMobileView?"column":"column",alignItems:'center',justifyContent:isMobileView?"center":'center',width:'100%',marginTop:isMobileView?"40px":""}} class="footer-menu">
                <h4 style={{fontSize:isMobileView?'25px':'',overflow:'hidden',fontWeight:'900'}} class="footer-widget-title">Feature Provided</h4>
                <ul>
                  <li>
                    <a  href="/uiux">UI & UX</a>
                  </li>
                  <li>
                    <a  href="/web">Web Development</a>
                  </li>
                  <li>
                    <a  href="/app">App Development</a>
                  </li>
                  <li>
                    <a  href="/graphic">Graphic Design</a>
                  </li>
                  <li>
                    <a  href="/digital">Digital Marketing</a>
                  </li>
                  <li>
                    <a  href="/hosting">Domain & Hosting</a>
                  </li>
                </ul>
              </div>
            </div>
           
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="footer-widget">
              <div style={{display:'flex',flexDirection:"column",alignItems:'center',justifyContent:isMobileView?"center":'space-around',width:'100%',marginTop:isMobileView?"40px":""}} class="footer-menu">
                <h4 style={{fontSize:isMobileView?'25px':'',overflow:'hidden',fontWeight:'900'}} class="footer-widget-title">Our Company</h4>
                <ul>
                <li>
                    <a  href="/">Home</a>
                  </li>
                  <li>
                    <a  href="/about">About Us</a>
                  </li>
                  <li>
                    <a  href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a  href="/industry">Industries</a>
                  </li>
                  <li>
                    <a  href="/service">Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="footer-widget">
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:isMobileView?"center":'center',width:'100%',marginTop:isMobileView?"40px":""}} class="footer-menu p-0">
                <h4 style={{fontSize:isMobileView?'25px':'',overflow:'hidden',marginRight:isMobileView?"":"50px",fontWeight:'900'}} class="footer-widget-title">Help Support</h4>
                <ul>
                  <li>
                    <a href="/refund">Refund Policy</a>
                  </li>
                  <li>
                    <a  href="/terms">Terms & Conditions</a>
                  </li>
                  <li>
                    <a  href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                  <a  href="/support">Support</a>
                </li>
                  <li>
                    <a  href="/faqs">FAQs</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>

        </div>
       
      </div>
    </div>

    <div class="mini-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="copyright-text">
              <p>© 2024
                <a  href="#"> CodesIntensity</a>. All rights reserved. Created by
                <a  href="#"> codesintensity</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
 
  </Box>

  );
};

export default Footer;
