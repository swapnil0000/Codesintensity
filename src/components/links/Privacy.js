import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Privacy = () => {
    return (
        <Box sx={{ backgroundColor: 'black' }}>
            <Typography sx={{ color: '#666', fontSize: '50px', fontWeight: '800', fontFamily: 'montserrat', textAlign: 'center' }}>Privacy <span style={{ color: '#f91942' }}>Policy</span> </Typography>
            <Container>
                <Box sx={{ marginBottom: '30px' }}>
                    <Typography sx={{ color: '#666', fontSize: '25px', fontWeight: '600', color: '#f91942' }}>Last updated: May 14, 2024!</Typography>

                    <Typography sx={{ color: '#666', fontSize: '20px' }}>
                        This Privacy Policy outlines how CodesIntensity ("we," "our," or "us") collects, uses, maintains, and discloses information collected from users (each, a "User") of our website ("Site"). This Privacy Policy applies to the Site and all products and services offered by CodesIntensity.                        </Typography>
                </Box>

                <Box sx={{ marginBottom: '30px' }}>
                    <Typography sx={{ color: '#666', fontSize: '25px', fontWeight: '600', color: '#f91942' }}>What We Are?</Typography>

                    <Typography sx={{ color: '#666', fontSize: '20px' }}>
                        CodesIntensity is a software development company specializing in providing innovative solutions for businesses worldwide. Our services include custom software development, mobile app development, web development, digital marketing, and graphic design.                                   </Typography>
                </Box>

                <Box sx={{ marginBottom: '30px' }}>
                    <Typography sx={{ color: '#666', fontSize: '25px', fontWeight: '600', color: '#f91942' }}>Data Collection
                    </Typography>
                    <Typography sx={{ color: '#666', fontSize: '20px' }}>
                        At CodesIntensity, we prioritize the protection of your personal information. We do not collect any personally identifiable information from Users unless they voluntarily submit such information to us through the contact form or other means provided on our Site.                          </Typography>
                </Box>

                <Box sx={{ marginBottom: '30px' }}>
                    <Typography sx={{ color: '#666', fontSize: '25px', fontWeight: '600', color: '#f91942' }}>Contact Form</Typography>
                    <Typography sx={{ color: '#666', fontSize: '20px' }}>
                        When Users voluntarily fill out the contact form on our Site, we collect their name, email address, phone number, and any additional information they choose to provide in the message field. This information is used solely for the purpose of responding to inquiries and communicating with Users about our services.                                  </Typography>
                </Box>

                <Box sx={{ marginBottom: '30px' }}>
                    <Typography sx={{ color: '#666', fontSize: '25px', fontWeight: '600', color: '#f91942' }}>How We Use Collected Information
                    </Typography>
                    <Typography sx={{ color: '#666', fontSize: '20px' }}>
                        Any information collected from Users through our Site is used solely for the purpose of providing and improving our services. We may use the information to respond to inquiries, process transactions, send periodic emails, and improve customer service.
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: '30px' }}>
                    <Typography sx={{ color: '#666', fontSize: '25px', fontWeight: '600', color: '#f91942' }}>Protection of Information</Typography>
                    <Typography sx={{ color: '#666', fontSize: '20px' }}> We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of Users' personal information and data stored on our Site.                                     </Typography>
                </Box>

            </Container>
        </Box>
    )
}

export default Privacy