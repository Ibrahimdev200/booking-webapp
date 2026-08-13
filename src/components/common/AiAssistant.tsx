import React, { useState } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'ai' | 'user'; text: string }[]>([
    {
      sender: 'ai',
      text: 'Assalamu alaikum! I am Manaar AI, your virtual travel consultant. How may I assist your journey today? (Hajj, Umrah, Flights, Hotels, Visa, Tours)'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    const newMsgs = [...messages, { sender: 'user' as const, text: userMsg }];
    setMessages(newMsgs);
    setInput('');

    // Generate intelligent responses based on query keywords
    setTimeout(() => {
      let aiReply = "Thank you for reaching out to Travel Agent Demo! Our travel agents are also available on WhatsApp 0903 367 5852 for official confirmation.";
      const lower = userMsg.toLowerCase();

      if (lower.includes('hajj') || lower.includes('pilgrimage')) {
        aiReply = "Manaar Travels offers 21-Day VIP Royal Hajj & Economy Hajj Packages for 2026. Includes 5-star Haram hotels in Makkah & Madinah, Saudia flights, VIP Mina tents, and dedicated Islamic Scholars. Check our Hajj page or contact 0903 367 5852!";
      } else if (lower.includes('umrah') || lower.includes('ramadan')) {
        aiReply = "We provide Ramadan Last 10 Days VIP Umrah, 5-Star Executive Umrah, and Budget Family packages. We can also customize packages according to your preferred dates and budget.";
      } else if (lower.includes('visa') || lower.includes('dubai') || lower.includes('uk') || lower.includes('usa')) {
        aiReply = "We assist with E-Visas & Tourist Visas for UAE (Dubai), Saudi Arabia, UK, USA, Schengen Europe, Turkey, and Qatar. *Note: Visa approvals are strictly at the discretion of the embassy/immigration authority.*";
      } else if (lower.includes('flight') || lower.includes('ticket') || lower.includes('airline')) {
        aiReply = "We partner with Saudia, Emirates, Qatar Airways, Turkish Airlines, and British Airways to offer competitive fares from Lagos (LOS). Use our Flight Search widget on the homepage!";
      } else if (lower.includes('hotel') || lower.includes('makkah') || lower.includes('madinah')) {
        aiReply = "We offer 5-star luxury Haram view hotels such as Pullman Zamzam Makkah, Dar Al Taqwa Madinah, and Grand Palace Dubai. Reserve directly online with instant booking voucher generation!";
      }

      setMessages([...newMsgs, { sender: 'ai', text: aiReply }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 999,
          background: 'linear-gradient(135deg, #0B192C 0%, #1E3E62 100%)',
          color: '#D4AF37',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          padding: '0.75rem 1.25rem',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontWeight: 700,
          fontSize: '0.9rem',
          boxShadow: '0 8px 24px rgba(11, 25, 44, 0.3)',
          cursor: 'pointer'
        }}
      >
        <Sparkles size={18} className="text-gold" />
        <span>Ask Manaar AI</span>
      </button>

      {/* AI Assistant Modal Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          left: '24px',
          width: '360px',
          maxHeight: '500px',
          zIndex: 1000,
          background: '#0B192C',
          border: '1.5px solid rgba(212, 175, 55, 0.4)',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Modal Header */}
          <div style={{
            padding: '1rem',
            background: 'linear-gradient(90deg, #07111E 0%, #1E3E62 100%)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#FFF'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bot size={22} style={{ color: '#D4AF37' }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Manaar AI Travel Assistant</div>
                <div style={{ fontSize: '0.7rem', color: '#10B981' }}>● Online 24/7</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div style={{
            padding: '1rem',
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            background: '#07111E',
            fontSize: '0.85rem'
          }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: m.sender === 'user' ? '#D4AF37' : '#1E3E62',
                  color: m.sender === 'user' ? '#0B192C' : '#FFFFFF',
                  padding: '0.6rem 0.9rem',
                  borderRadius: m.sender === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0',
                  maxWidth: '85%',
                  lineHeight: '1.4'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Form Input */}
          <form onSubmit={handleSend} style={{ padding: '0.75rem', background: '#0B192C', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              placeholder="Ask about Hajj, Visas, Hotels..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: '0.55rem 0.8rem',
                borderRadius: '8px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                background: '#07111E',
                color: '#FFF',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button type="submit" className="btn btn-gold btn-sm" style={{ padding: '0.55rem 0.8rem' }}>
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
