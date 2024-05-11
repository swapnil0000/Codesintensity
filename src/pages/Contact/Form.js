import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

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
    
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:"center"}}>
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
      onChange={handleChange}/>  
    

    <TextField
      name="place"
      label="Place"
      placeholder='Place'
      value={contactDetails.place}
      onChange={handleChange}
      sx={{
        width: '350px',height:'auto',
        borderRadius: '3px',margin:'20px',
        
        backgroundColor:'white'
      }}/>
      <Button variant='contained' sx={{backgroundColor:"#f91942"}}>Submit</Button>
  </Box>
  )
}

export default Form