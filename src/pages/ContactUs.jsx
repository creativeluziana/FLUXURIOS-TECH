import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contactus-container">
        <h1>Contact Us</h1>
        <p>This is the Contact Us page. Add your contact form or details here.</p>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
