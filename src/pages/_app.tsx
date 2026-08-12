import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import { CurrencyProvider } from '../context/CurrencyContext';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { AiAssistant } from '../components/common/AiAssistant';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <CurrencyProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              <Component {...pageProps} />
            </main>
            <Footer />
            <WhatsAppButton />
            <AiAssistant />
          </div>
        </CurrencyProvider>
      </CartProvider>
    </AuthProvider>
  );
}
