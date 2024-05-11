import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Hosting = () => {
  return (
    <Box sx={{ backgroundColor: '#000'}}>
    <Container>
    <div style={{ flexGrow: 1, }}>
      <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} sm={6}>
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#f44336', // Light red
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          marginRight: '1rem',
        }}
      >
        1
      </div>
    </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            style={{
              padding: '1rem',
              backgroundColor: '#212121', // Dark grey
              color: '#fff',
            }}
          >
            <Typography variant="h6">Step 1: Planning</Typography>
            <Typography>
              This stage involves gathering requirements, defining goals, and
              creating a project roadmap.
            </Typography>
          </Paper>
        </Grid>
       
      </Grid>

      {/* Repeat the same structure for other steps */}
    </div>
    </Container>
    </Box>
  );
};

export default Hosting;
