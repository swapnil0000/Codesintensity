import { Box, Typography } from '@mui/material'
import React from 'react'

const Faqs = () => {
  return (
    <Box sx={{ marginTop:'30px', display: 'flex', width: '100%', flexDirection: 'column',backgroundColor:'black'}}>
    <Typography sx={{color:'#666',fontSize:'50px',fontWeight:'800',fontFamily:'montserrat',textAlign:'center'}}>Frequently Asked <span style={{color:'#f91942'}}>Questions</span> </Typography>
      <section className="bg-dark" style={{ backgroundColor: 'black', color: '#666', display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , padding:'1px'}}>
      <div  style={{backgroundColor:'black'}}>
          <div className="" style={{Color:'black',backgroundColor:'black'}}>

            <div  style={{backgroundColor:'black',padding:'10px'}}>
              <h2 className="h3 mb-2" style={{lineHeight:'40px'}}>How can we help you?</h2>
              <p >We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.</p>
              <div style={{border:'1px solid white'}} className="accordion accordion-flush"  id="accordionExample" >
                <div className="accordion-item" style={{color:'#666',backgroundColor:'black',border:'1px solid white'}}>
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:'black',color:'#666'}}>
                      What is CODESINTENSITY?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>CodesIntensity is a leading software development company specializing in crafting innovative solutions for businesses worldwide. We provide a range of services including custom software development, mobile app development, web development, and more.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{color:'#666',backgroundColor:'black',border:'1px solid white'}}>
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{backgroundColor:'black',color:'#666'}}>
                    What industries does CodesIntensity serve?                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                  <p>  We cater to diverse industries such as healthcare, finance, e-commerce, education, and beyond. Our flexible approach allows us to tailor solutions to meet the unique needs of each client.    </p>              </div>
                </div>

                <div className="accordion-item" style={{color:'#666',backgroundColor:'black',border:'1px solid white'}}>
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={{backgroundColor:'black',color:'#666'}}>
                    What sets CodesIntensity apart from other software companies?                    
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>At CodesIntensity, we prioritize innovation, quality, and client satisfaction. Our team consists of highly skilled professionals who are dedicated to delivering cutting-edge solutions that drive business growth and success.</p>

                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{color:'#666',backgroundColor:'black'}}>
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"  style={{backgroundColor:'black',color:'#666'}}>
                  How can I get started with CodesIntensity?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample"  style={{backgroundColor:'black',color:'#666'}}>
                  <div className="accordion-body">
                    <p>Getting started with CodesIntensity is easy. Simply reach out to us via our website or contact us directly to discuss your project requirements. Our team will work with you to determine the best approach and provide a tailored solution to meet your needs.

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

  )
}

export default Faqs