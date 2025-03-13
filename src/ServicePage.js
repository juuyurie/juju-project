import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, CssBaseline, GlobalStyles } from '@mui/material';
import { Link } from 'react-router-dom';
import serviceBackgroundImage from './assets/background2.png'; 

function ServicePage() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: `url(${serviceBackgroundImage})`, // Different background image for service page
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", // Make background image fixed
            height: "100vh",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            margin: 0,
            padding: 0,
          },
        }}
      />

      <AppBar position="fixed" sx={{ width: '100%', backgroundColor: "#BDB5D5", boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '80px' }}>
          
          {/* Box for the circle on the left */}
          <Box 
            sx={{
              backgroundColor: "#FAC898", // Circle color
              borderRadius: '50%', // Make it a circle
              padding: '10px 20px', // Adjust the circle size
              display: 'flex',
              alignItems: 'center', // Vertically center content
              justifyContent: 'center', // Horizontally center content
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: '2.0rem',
                fontFamily: "'Caveat', cursive", // Apply the Caveat font
                fontWeight: '700', // Font weight (700 for bold)
                fontStyle: 'normal', // Normal style
                fontOpticalSizing: 'auto', // Optional: font-optical-sizing for better readability
              }}
            >
              Doggies Day Out
            </Typography>
          </Box>

          {/* Box for the navigation buttons on the right */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/service">Service</Button>
            <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
            <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
          </Box>

        </Toolbar>
      </AppBar>

      {/* Spacer to offset the fixed AppBar */}
      <Toolbar />

      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h4" 
              sx={{
                fontSize: '2.5rem',
                color: "#483248",
                fontFamily: "'Caveat', cursive", // Apply the Caveat font
                fontWeight: '700', // Font weight (700 for bold)
                fontStyle: 'normal', // Normal style
                fontOpticalSizing: 'auto', // Optional: font-optical-sizing for better readability
              }}
        gutterBottom>
       
          Our Services
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold',color: "#483248" }}>
          Full Grooming
        </Typography>
        <Typography variant="body1" gutterBottom sx={{color: "#483248"}}>
          The most popular choice. Combine the style with the easy maintenance, short on body, scissor finish on legs, face and tail to your favorite style.
        </Typography>   
        <Typography variant="body2" sx={{color: "#483248"}}>
          Under 5kg: $100<br />
          5-10kg: $110<br />
          10-15kg: $120<br />
          15-20kg: $130<br />
          20-30kg: $160<br />
          30-40kg: $180<br />
          over 40kg: $200+<br />
        </Typography>
        <Typography variant="h6" gutterBottom sx={{mt:3, fontWeight: 'bold',color: "#483248"}}>
          Tidy Up
        </Typography>
        <Typography variant="body1" gutterBottom sx={{color: "#483248"}}>
          Maintenance trim around the face and tail. Services include bath, nail clipping, ear & eyes cleaning and sanitary trim.<br />
          </Typography>
          <Typography variant="body2" sx={{color: "#483248"}}>
          Under 5kg: $70<br />
          5-10kg: $75<br />
          10-15kg: $85<br />
          15-20kg: $105<br />
          20-30kg: $120<br />
          30-40kg: $135<br />
          over 40kg: $150+
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 'bold',color: "#483248" }}>
          Premium Bath - Short Coat
        </Typography>
        <Typography variant="body2" sx={{color: "#483248"}}>
          Under 5kg: $40<br />
          5-10kg: $45<br />
          10-15kg: $55<br />
          15-20kg: $65<br />
          20-30kg: $80<br />
          30-40kg: $95<br />
          over 40kg: $110+
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 'bold', color: "#483248" }}>
          Premium Bath - Long Coat
        </Typography>
        <Typography variant="body2" sx={{color: "#483248"}}>
          Under 5kg: $50<br />
          5-10kg: $55<br />
          10-15kg: $65<br />
          15-20kg: $75<br />
          20-30kg: $90<br />
          30-40kg: $105<br />
          over 40kg: $120+
        </Typography>

      </Container>
<Box 
          sx={{ 
            position: 'fixed',  // keep this thing fixed
            zIndex: 1000,       // stays above everything
            right: '15%',          
            bottom: '40%',         
          }}
        > 
      <Box sx={{ display: 'flex', justifyContent: 'left', mt: 4 }}> 
          <Button /* button to book now!! */
            variant="contained" 
            component={Link} 
            to="/booking"
            sx={{
              fontSize: "1.0rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              padding: "5px 10px",
              backgroundColor: "#FFAC1C", // Set button color
              "&:hover": {
                backgroundColor: "#E69A17", // Darker shade for hover effect
              },
            }}  
          >
            Book now
          </Button>
        </Box>
        </Box>
    </>
  );
}

export default ServicePage;