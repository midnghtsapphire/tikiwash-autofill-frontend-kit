
import React from 'react';
import { FlameKindling } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-charcoal-gray text-light-gray/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center mb-4">
          <FlameKindling className="h-6 w-6 mr-2 text-primary" />
          <span className="font-poppins text-lg font-semibold">TikiWash</span>
        </div>
        <p className="text-sm">
          &copy; {currentYear} TikiWash Bot Autofill Kit. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          {/* Placeholder for contact or social media links if needed */}
          {/* <a href="#contact" className="hover:text-white">Contact Us</a> | <a href="#privacy" className="hover:text-white">Privacy Policy</a> */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
