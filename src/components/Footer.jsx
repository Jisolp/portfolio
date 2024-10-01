import React from 'react';
import { socialMedia } from '../constants';

const Footer = () => (
  <footer className="bg-third opacity-40 text-gray-950 font-semibold py-4">
    <div className="container mx-auto text-center">
      <div className="flex justify-center space-x-4 mb-2">
        {socialMedia.map((social) => (
          <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} alt={`${social.id} icon`} className="w-8 h-8 cursor-pointer hover:opacity-30" /> 
          </a>
        ))}
      </div>
      <p className="mb-2">© 2024 Jisol Park. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
