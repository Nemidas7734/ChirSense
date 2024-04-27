import React, { useContext,createContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { User, onAuthStateChanged } from "firebase/auth";

interface AuthState {
  userLoggedIn: boolean;
  isEmailUser: boolean;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

  
// Define the initial state
const initialAuthState: AuthState = {
  userLoggedIn: false,
  isEmailUser: false,
  currentUser: null,
  setCurrentUser: () => {} // Placeholder function
};

export const AuthContext = createContext(initialAuthState);

export  function useAuth(): AuthState {
  return useContext(AuthContext);
}




export function AuthProvider({ children }: { children: React.ReactNode }){
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user: User | null)  {
    if (user) {

      console.log(user)
      setCurrentUser({ ...user });

      // check if provider is email and password login
      const isEmail = user.providerData.some(
        (provider) => provider.providerId === "password"
      );
      setIsEmailUser(isEmail);
      setUserLoggedIn(true);
      console.log(userLoggedIn);
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
  console.log(value);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

