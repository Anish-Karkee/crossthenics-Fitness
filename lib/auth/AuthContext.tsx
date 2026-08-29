"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "staff" | "customer";
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isStaff: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("crossthenics_user");
      if (storedUser) {
        try {
          return JSON.parse(storedUser);
        } catch {
          localStorage.removeItem("crossthenics_user");
        }
      }
    }
    return null;
  });
  // Initialize isLoading to false since we read from localStorage synchronously
  const [isLoading] = useState(false);

  const login = async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const mockUsers: Record<string, User> = {
      "admin@crossthenics.com": {
        id: "USR-004",
        name: "Emily Davis",
        email: "admin@crossthenics.com",
        role: "admin",
      },
      "staff@crossthenics.com": {
        id: "USR-006",
        name: "Lisa Anderson",
        email: "staff@crossthenics.com",
        role: "staff",
      },
    };

    const foundUser = mockUsers[email];
    if (foundUser && password === "admin123") {
      setUser(foundUser);
      localStorage.setItem("crossthenics_user", JSON.stringify(foundUser));
      return;
    }
    
    throw new Error("Invalid credentials");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("crossthenics_user");
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem("crossthenics_user", JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin",
        isStaff: user?.role === "staff" || user?.role === "admin",
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}