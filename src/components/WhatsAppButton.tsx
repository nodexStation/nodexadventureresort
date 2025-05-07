
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";

const WhatsAppButton = () => {
  const whatsappNumber = siteConfig.contactInfo.whatsapp.replace(/\s+/g, "");
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-green-600 transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
