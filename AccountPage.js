import React from 'react';
import { Container, Typography } from '@mui/material';

function AccountPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1">
        Details about the services offered.
      </Typography>
    </Container>
  );
}

export default AccountPage;