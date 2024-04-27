import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  verifyPasswordResetCode
} from "firebase/auth";

type Email = string;
type Password = string;

export const doCreateUserWithEmailAndPassword = async (email : Email, password : Password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email:any, password:any) => {
  return signInWithEmailAndPassword(auth, email, password);
};


export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email:Email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doResetPasword = ( code: string) => {
  return verifyPasswordResetCode (auth, code)
}



