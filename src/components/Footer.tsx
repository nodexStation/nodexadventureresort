
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.siteName}</h3>
            <p className="mb-4">
              Experience adventure and luxury in the heart of nature.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/accommodation" className="hover:text-gray-300 transition-colors">
                  Accommodation
                </a>
              </li>
              <li>
                <a href="/activities" className="hover:text-gray-300 transition-colors">
                  Activities
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-gray-300 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <FaPhone className="mr-2" />
                <a href={`tel:${siteConfig.contactInfo.phone.replace(/\s+/g, "")}`}>
                  {siteConfig.contactInfo.phone}
                </a>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href={`mailto:${siteConfig.contactInfo.email}`}>
                  {siteConfig.contactInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
