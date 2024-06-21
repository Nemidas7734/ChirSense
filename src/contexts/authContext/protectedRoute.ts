import React from "react";
import {  useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";


interface ProtectedRouteProps {
  children: React.ReactNode; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//   const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    //   setUser(uid);
      console.log("uid", uid);
    } else {
      console.log("user is logged out");
    }
    if (!user) {
        navigate("/login")// Use Navigate for cleaner routing
      }
  });   

  console.log(unsubscribe);



  return children;
};

export default ProtectedRoute;
