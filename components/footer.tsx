"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to Tokyo Lore!');
    setEmail('');
  };

  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>About</h3>
            <p className="text-sm leading-relaxed">
              Tokyo Lore celebrates the hidden stories, forgotten corners, and secret beauty of Japan's capital through photography, poetry, and street art.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Featured Stories</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Photo Gallery</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Street Art Map</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Tokyo Guide</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Photography Tips</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>Newsletter</h3>
            <p className="text-sm mb-4">Get the latest Tokyo stories delivered to your inbox.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                required
              />
              <button
                type="submit"
                className="w-full bg-pink-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-pink-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm">
          <div className="flex flex-col items-center space-y-2">
            <a href="/" className="cursor-pointer flex items-center space-x-2">
              <MapPin className="text-pink-600 w-6 h-6" />
              <span className="text-xl font-bold text-gray-800" style={{fontFamily: 'Playfair Display, serif'}}>
                Tokyo Lore
              </span>
            </a>
            <p>&copy; 2025 Tokyo Lore. All rights reserved. Made by <b>Arpit Sehal </b>for Tokyo's stories.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 
