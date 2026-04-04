// src/components/WhatsAppButton.jsx
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn" // Ab ye index.css se apni styling aur hover effect lega
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;