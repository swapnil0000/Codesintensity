import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const Form = () => {
  
    const [contactDetails, setContactDetails] = useState({
        name: '',
        email: '',
        mobileNo: '',
        place: ''
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
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:"center"}}>
            <form style={{display:'flex',flexDirection:'column' ,alignItems:'center',justifyContent:'center'}} onSubmit={handleSubmit}> {/* Add onSubmit handler to the form */}
                <TextField
                    style={{width:'350px',height:'auto',borderRadius:'3px',margin:'20px',color:'white',backgroundColor:'white'}}
                    name="name"
                    value={contactDetails.name}
                    onChange={handleChange}  
                    placeholder='Name'
                />

                <TextField
                    sx={{width:'350px',height:'auto',borderRadius:'3px',margin:'20px',backgroundColor:'white'}}
                    name="email"
                    value={contactDetails.email}
                    onChange={handleChange}  
                    placeholder='Email'
                />

                <TextField
                    style={{width:'350px',height:'auto',borderRadius:'3px',margin:'20px',backgroundColor:'white'}}
                    name="mobileNo"
                    placeholder='Mobile No'
                    value={contactDetails.mobileNo}
                    onChange={handleChange}
                />  

                <TextField
                    name="place"
                    placeholder='Place'
                    value={contactDetails.place}
                    onChange={handleChange}
                    sx={{
                        width: '350px',height:'auto',
                        borderRadius: '3px',margin:'20px',
                        backgroundColor:'white'
                    }}
                />
                <Button type="submit" variant='contained' sx={{backgroundColor:"#f91942",width:'200px'}}>Submit</Button>
            </form>
        </Box>
    );
}

export default Form;
