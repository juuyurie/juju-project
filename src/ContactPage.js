import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, CssBaseline, GlobalStyles } from '@mui/material';
import { Link } from 'react-router-dom';
import contactBackgroundImage from './assets/background4.png'; 

function ContactPage() {
  return (
<>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: `url(${contactBackgroundImage})`,
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

 <Container maxWidth="sm" sx={{ mt: 5, display: 'flex', flexdirection:'colum',justifyContent:'center', alignItems: 'center',  textAlign: 'center',height: 'calc(90vh - 80px)' }}>
        <Typography variant="h4" 
              sx={{
                fontSize: '1.5rem',
               
                color: '#483248',
                fontFamily: "'Caveat', cursive", // Apply the Caveat font
                fontWeight: '700', // Font weight (700 for bold)
                fontStyle: 'normal', // Normal style
                fontOpticalSizing: 'auto', // Optional: font-optical-sizing for better readability
              }}
        gutterBottom>
       
          Our Adress: 123 Julie Street, Melbourne, Australia<br/>
          Phone number: 123-456-7890<br/>
          Email: julie.doggiesdayout@doggo.com
  
        </Typography>
      </Container>
</>
  );
}
export default ContactPage;