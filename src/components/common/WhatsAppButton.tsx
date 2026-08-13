import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ customMessage }) => {
  const defaultMsg = customMessage || "Hello Manaar Travels & Tours, I would like to enquire about your Hajj, Umrah, Flight, Hotel and Visa services.";
  const encodedMsg = encodeURIComponent(defaultMsg);
  const whatsappUrl = `https://wa.me/2349033675852?text=${encodedMsg}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        background: '#25D366',
        color: '#FFFFFF',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      title="Chat on WhatsApp (0903 367 5852)"
    >
      <MessageCircle size={32} />
    </a>
  );
};
