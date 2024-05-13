import { Box, Container, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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
      id: 3,
      title: 'Products',
      links: [{ name: 'Ecommerce', path: '/industry' }, { name: 'Restaurant', path: '/industry' }, { name: 'Educational', path: '/industry' }, { name: 'Gym Website', path: '/industry' }, { name: 'Real State', path: '/industry' }],
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

  return (
    <Box sx={{ backgroundColor: '#151922', backgroundImage: `url('/assets/footerback.jpg')`, backgroundSize: 'cover' }}>

      <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", justifyContent: isMobileView ? "center" : 'space-evenly', width: '100%', padding: '10px' }}  >

        <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>

          {data.map(item => (
            <Grid item key={item.id} xs={6} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h4" sx={{ color: '#666', fontWeight: '900', maxWidth: '600px', margin: '10px' }}>{item.title}</Typography>
                <Divider orientation='horizontal' sx={{ width: '100%', color: 'white', height: '1px', border: '1px solid white' }} />
                {item.links.map((link, index) => (
                  <Link key={index} to={link.path}>
                    <Typography variant="h6" sx={{ maxWidth: '200px', color: '#666', cursor: 'pointer', transition: 'color 0.1s, transform 0.3s', '&:hover': { color: 'red', transform: 'scale(1.01)' }, textAlign: 'center' }}>{link.name}</Typography>
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
