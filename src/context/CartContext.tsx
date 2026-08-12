import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'cartId'>) => void;
  removeFromCart: (cartId: string) => void;
  clearCart: () => void;
  discountCode: string;
  applyDiscount: (code: string) => { success: boolean; message: string };
  discountPercent: number;
  subtotalNGN: number;
  discountAmountNGN: number;
  serviceFeeNGN: number;
  totalNGN: number;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  discountCode: '',
  applyDiscount: () => ({ success: false, message: '' }),
  discountPercent: 0,
  subtotalNGN: 0,
  discountAmountNGN: 0,
  serviceFeeNGN: 0,
  totalNGN: 0
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [discountCode, setDiscountCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('manaar_cart');
      if (saved) setCart(JSON.parse(saved));
    } catch (e) {}
  }, []);

  const saveCart = (items: CartItem[]) => {
    setCart(items);
    try {
      localStorage.setItem('manaar_cart', JSON.stringify(items));
    } catch (e) {}
  };

  const addToCart = (item: Omit<CartItem, 'cartId'>) => {
    const newItem: CartItem = {
      ...item,
      cartId: `cart_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`
    };
    saveCart([...cart, newItem]);
  };

  const removeFromCart = (cartId: string) => {
    saveCart(cart.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => {
    saveCart([]);
    setDiscountCode('');
    setDiscountPercent(0);
  };

  const applyDiscount = (code: string) => {
    const cleaned = code.trim().toUpperCase();
    if (cleaned === 'UMRAH2026' || cleaned === 'MANAAR10') {
      setDiscountCode(cleaned);
      setDiscountPercent(10);
      return { success: true, message: '10% Promo Discount Applied Successfully!' };
    }
    if (cleaned === 'HAJJ2026' || cleaned === 'MANAAR15') {
      setDiscountCode(cleaned);
      setDiscountPercent(15);
      return { success: true, message: '15% Special Pilgrimage Discount Applied!' };
    }
    return { success: false, message: 'Invalid or Expired Discount Code.' };
  };

  const subtotalNGN = cart.reduce((sum, item) => sum + item.price, 0);
  const discountAmountNGN = (subtotalNGN * discountPercent) / 100;
  const serviceFeeNGN = subtotalNGN > 0 ? 15000 : 0; // ₦15,000 agency booking/processing fee
  const totalNGN = Math.max(0, subtotalNGN - discountAmountNGN + serviceFeeNGN);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      discountCode,
      applyDiscount,
      discountPercent,
      subtotalNGN,
      discountAmountNGN,
      serviceFeeNGN,
      totalNGN
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
