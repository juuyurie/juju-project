import React, { useState } from "react";
import { TextField, Button, Container, Typography, MenuItem, Select, FormControl, InputLabel, AppBar, Toolbar, Box, CssBaseline, GlobalStyles } from "@mui/material";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"; 
import { Link } from 'react-router-dom';
import backgroundImage from './assets/background2.png'; 

function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(""); 
  const [bathType, setBathType] = useState(""); // For bath selection
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Normalize current date

  const servicePrices = {
    "Full Grooming": 100,
    "Tidy Up": 70,
    "Short Coat Bath": 40,
    "Long Coat Bath": 50,
    "Day Care": 40,
  };

  const getPrice = () => {
    if (service === "Premium Bath") {
      return servicePrices[bathType] || 0;
    }
    return servicePrices[service] || 0;
  };

  const handleSubmit = () => {  
    if (!name || !phone || !service || !date || !time || (service === "Premium Bath" && !bathType)) {
      setError("All fields are required!");
      return;
    }

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0); 

    if (selectedDate < currentDate) {
      setError("Please select a valid future date.");
      return;
    }

    const selectedTime = new Date(time);
    if (selectedDate.getTime() === currentDate.getTime() && selectedTime < new Date()) {
      setError("Please select a future time.");
      return;
    }

    setError("");
    setSubmitted(true); 
  };

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
    
    
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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

      <Container maxWidth="sm" sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" 
                    sx={{
                      fontSize: '2.5rem',
                      color: '#483248',
                      fontFamily: "'Caveat', cursive", // Apply the Caveat font
                      fontWeight: '700', // Font weight (700 for bold)
                      fontStyle: 'normal', // Normal style
                      textAlign: 'center',
                      fontOpticalSizing: 'auto', // Optional: font-optical-sizing for better readability
                    }}
              gutterBottom>
             
                
             Dog Grooming Booking
              </Typography>
        
        

        {submitted ? (
          <Typography variant="h6" color="green">
            Booking Confirmed for {name} - {service} {bathType ? `(${bathType})` : ""} - **${getPrice()}**  
            on {date.toLocaleDateString()} at {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}!
          </Typography>
        ) : (
          <>
            {/* Name Input */}
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            
            {/* Phone Input */}
            <TextField
              fullWidth
              label="Phone Number"
              margin="normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={!!error && error.includes("phone")}
              helperText={error.includes("phone") ? error : ""}
            />

            {/* Service Selection */}
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Select Service</InputLabel>
              <Select
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  if (e.target.value !== "Premium Bath") setBathType(""); // Reset bathType if different service
                }}
              >
                <MenuItem value="Full Grooming">Full Grooming - from $100</MenuItem>
                <MenuItem value="Tidy Up">Tidy Up - from $70</MenuItem>
                <MenuItem value="Premium Bath">Premium Bath (Select type)</MenuItem>
                <MenuItem value="Day Care">Day Care - $40</MenuItem>
              </Select>
            </FormControl>

            {/* Bath Type Selection (Only appears when Premium Bath is selected) */}
            {service === "Premium Bath" && (
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Select Bath Type</InputLabel>
                <Select
                  value={bathType}
                  onChange={(e) => setBathType(e.target.value)}
                >
                  <MenuItem value="Short Coat Bath">Short Coat - from $40</MenuItem>
                  <MenuItem value="Long Coat Bath">Long Coat - from $50</MenuItem>
                </Select>
              </FormControl>
            )}

            {/* Date Picker */}
            <DatePicker
              label="Select Date"
              value={date}
              onChange={setDate}
              sx={{ width: "100%", mt: 2 }}
              minDate={currentDate}
            />
            
            {/* Time Picker */}
            <TimePicker
              label="Select Time"
              value={time}
              onChange={setTime}
              sx={{ width: "100%", mt: 2 }}
              minTime={date && date.toDateString() === currentDate.toDateString() ? new Date() : undefined}
            />
            
            {/* Submit Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFAC1F",
                '&:hover': {
                  backgroundColor: "#E69C00",
                },
                color: "#fff",
                mt: 3,
              }}
              fullWidth
              onClick={handleSubmit}
            >
              Book Appointment
            </Button>

            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
          </>
        )}
      </Container>
    </LocalizationProvider>
    </>
  );
  }

export default BookingForm;