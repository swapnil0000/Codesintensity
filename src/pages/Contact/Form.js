import React, { useState } from 'react';
import { Box, Button, InputAdornment, TextField, useMediaQuery, useTheme } from '@mui/material';
import mail from "../Contact/mail.webp"
import user from "../Contact/user.webp"
import phone from "../Contact/phone.webp"
import company from "../Contact/company.webp"
import PersonIcon from '@mui/icons-material/Person';

const Form = () => {
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("sm"))

    const [contactDetails, setContactDetails] = useState({
        name: '',
        email: '',
        mobileNo: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContactDetails({
            ...contactDetails,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Here you can do whatever you want with the form data
        // For now, let's just display an alert with the form data
        alert("Form Submit Successfully");
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onSubmit={handleSubmit}> {/* Add onSubmit handler to the form */}
                <TextField
                    sx={{
                        width:isMobileView?"350px":"550px", height: 'auto',
                        borderRadius: '3px',
                        margin: '10px',
                        backgroundColor: '#efefef',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'transparent', // default border color
                            },
                            '&:hover fieldset': {
                                borderColor: 'transparent', // border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'transparent', // border color on focus
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: 'black', // text color
                        },
                    }}
                    variant="outlined"
                    name="name"
                    value={contactDetails.name}
                    onChange={handleChange}
                    placeholder="Name"
                    InputProps={{
                        style: {
                          border: 'none',
                          borderRadius: '3px',
                        },
                      }}
                />

                <TextField
                    sx={{width:isMobileView?"350px":"550px", height: 'auto', borderRadius: '3px', margin: '10px', backgroundColor: '#efefef' , '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'transparent', // default border color
                        },
                        '&:hover fieldset': {
                            borderColor: 'transparent', // border color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'transparent', // border color on focus
                        },
                    },
                    '& .MuiInputBase-input': {
                        color: 'black', // text color
                    },}}
                    name="email"
                    value={contactDetails.email}
                    onChange={handleChange}
                    placeholder='Email'
                />

                <TextField
                    sx={{ width:isMobileView?"350px":"550px", height: 'auto',borderRadius: '3px', margin: '10px', backgroundColor: '#efefef', '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'transparent', // default border color
                        },
                        '&:hover fieldset': {
                            borderColor: 'transparent', // border color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'transparent', // border color on focus
                        },
                    },
                    '& .MuiInputBase-input': {
                        color: 'black', // text color
                    }, }}
                    name="mobileNo"
                    placeholder='Mobile No'
                    value={contactDetails.mobileNo}
                    onChange={handleChange}
                />

                <TextField
                    name="message"
                    placeholder='Message'
                    value={contactDetails.place}
                    onChange={handleChange}
                    sx={{
                        width:isMobileView?"350px":"550px", height: '100px',
                        borderRadius: '3px', margin: '10px',
                        backgroundColor: '#efefef',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'transparent', // default border color
                            },
                            '&:hover fieldset': {
                                borderColor: 'transparent', // border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'transparent', // border color on focus
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: 'black', // text color
                        },
                    }}
                />
                <Button type="submit" variant='contained' sx={{ backgroundColor: "#f91942", width: '100%' }}>Submit</Button>
            </form>
        </Box>
    );
}

export default Form;
