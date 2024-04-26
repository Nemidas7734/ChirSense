import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { User, onAuthStateChanged } from "firebase/auth";

interface AuthState {
    userLoggedIn: boolean;
    isEmailUser: boolean;
    currentUser: User | null;
    setCurrentUser: (user: User | null) => void;
  }
  
  const initialAuthState: AuthState = {
    userLoggedIn: false,
    isEmailUser: false,
    currentUser: null,
    setCurrentUser: (user) => {} // Placeholder function
  };

const AuthContext = React.createContext(initialAuthState);




export function AuthProvider({ children }: { children: React.ReactNode }){
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
//   const [isGoogleUser, setIsGoogleUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user: User | null)  {
    if (user) {

      setCurrentUser({ ...user });

      // check if provider is email and password login
      const isEmail = user.providerData.some(
        (provider) => provider.providerId === "password"
      );
      setIsEmailUser(isEmail);
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }

    setLoading(false);
  }

  const value = {
    userLoggedIn,
    isEmailUser,
    currentUser,
    setCurrentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
