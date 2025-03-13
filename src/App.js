import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from './BookingForm';
import HomePage from './HomePage';
import ServicePage from './ServicePage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';
import AccountPage from './AccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;