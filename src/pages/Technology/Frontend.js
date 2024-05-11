// import { Box, Grid, Paper, Typography } from '@mui/material'
// import React from 'react'
// import html from "../Technology/html.webp"
// import css from "../Technology/css.webp"
// import javascript from "../Technology/javascript.webp"
// import react from "../Technology/react.webp"
// import responsive from "../Technology/responsive.webp"
// import material from "../Technology/materail.webp"
// import "../Technology/frontend.css"
// import tailwand from "../Technology/tailwand.png"
// import type from "../Technology/typescript.png"



// const Frontend = () => {
    
//     const data=[
//         {
//             id:1,
//             img:html,
//             val:"HTML5"
//         },
//         {
//             id:2,
//             img:css,
//             val:"CSS3"
//         },{
//             id:3,
//             img:javascript,
//             val:"Javascript"
//         },{
//             id:4,
//             img:react,
//             val:"React"
//         },
//         {
//             id:5,
//             img:material,
//             val:"MaterialUI"
//         },{
//             id:6,
//             img:tailwand,
//             val:"Tailwand CSS"
//         },
//         {
//             id:7,
//             img:type,
//             val:"Typescript"
//         },
//     ]
//   return (
//     <Box sx={{marginTop:'60px'}}>
//     <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}} class="progress">
//      <Typography  sx={{ color: 'white', fontSize: '30px', textAlign: 'center',fontFamily:'Montserrat',fontWeight:'700' }}>Frontend</Typography>
//      </div>
//     <Grid container>
//     {data.map(item => (
//       <Grid key={item.id} item xs={12} sm={6} md={6} lg={3} sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px',gap:'10px'}}>
     
//         <Paper sx={{ width: 140, height: 100, display: 'flex', flexDirection: 'column', marginTop: '5px',alignItems:'center',justifyContent:'space-evenly',backgroundColor:'#141415', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>  
       
//           <img  style={{ width: '50px', backgroundColor: 'transparent' }} src={item.img} alt={`Image ${item.id}`}/>
//           <Typography sx={{fontSize:'15px',fontWeight:'500',color:'white'}}>{item.val}</Typography>
//         </Paper>
//       </Grid>
//     ))}
//   </Grid>
//   </Box>
//   )
// }

// export default Frontend