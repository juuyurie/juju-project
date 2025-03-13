import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { CssBaseline, GlobalStyles } from "@mui/material";
import backgroundImage from './assets/background.png'; 

function HomePage() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: `url(${backgroundImage})`, // wallpaper from canvas
            backgroundSize: "cover",
            backgroundPosition: "center",
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
            <Button color="inherit" component={Link} to="/service">Services</Button>
            <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
            <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
          </Box>

        </Toolbar>
      </AppBar>

      {/* Content */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'flex-start', 
          justifyContent: 'center', 
          height: 'calc(100vh - 64px)', 
          paddingLeft: 8,
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute',  // Absolute positioning
            right: '25%',          // 1/4 from the right
            bottom: '25%',         // 1/4 from the bottom
          }}
        > 
          <Button 
            variant="contained" 
            component={Link} 
            to="/booking"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              padding: "5px 10px",
              mt: 2, 
              backgroundColor: "#FFAC1C", // ORANGE color button
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

export default HomePage;


