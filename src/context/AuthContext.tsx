import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, role?: UserRole) => void;
  logout: () => void;
  register: (name: string, email: string, phone: string) => void;
  switchRole: (role: UserRole) => void;
  isAuthenticated: boolean;
}

const DEFAULT_DEMO_USER: User = {
  id: 'usr-customer-01',
  name: 'Alhaji Ibrahim Bello',
  email: 'ibrahim.bello@example.com',
  phone: '0803 123 4567',
  role: 'Customer',
  address: 'Victoria Island, Lagos State',
  passportNumber: 'A08945123',
  passportExpiry: '2030-06-15',
  createdAt: '2025-01-10'
};

const AuthContext = createContext<AuthContextType>({
  user: DEFAULT_DEMO_USER,
  login: () => {},
  logout: () => {},
  register: () => {},
  switchRole: () => {},
  isAuthenticated: true
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(DEFAULT_DEMO_USER);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('manaar_user');
      if (saved) setUser(JSON.parse(saved));
    } catch (e) {}
  }, []);

  const saveUser = (u: User | null) => {
    setUser(u);
    try {
      if (u) localStorage.setItem('manaar_user', JSON.stringify(u));
      else localStorage.removeItem('manaar_user');
    } catch (e) {}
  };

  const login = (email: string, role: UserRole = 'Customer') => {
    const newUser: User = {
      id: `usr_${Date.now()}`,
      name: email.split('@')[0].toUpperCase(),
      email,
      phone: '0906 694 7477',
      role,
      createdAt: new Date().toISOString().split('T')[0]
    };
    saveUser(newUser);
  };

  const register = (name: string, email: string, phone: string) => {
    const newUser: User = {
      id: `usr_${Date.now()}`,
      name,
      email,
      phone,
      role: 'Customer',
      createdAt: new Date().toISOString().split('T')[0]
    };
    saveUser(newUser);
  };

  const switchRole = (role: UserRole) => {
    if (user) {
      saveUser({ ...user, role });
    } else {
      login('admin@manaartravels.com', role);
    }
  };

  const logout = () => {
    saveUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      register,
      switchRole,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
