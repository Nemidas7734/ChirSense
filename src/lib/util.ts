import { atom } from "recoil"

export const predictedState = atom({
    key: "predictedState",
    default: "",
  })


export const userLoggedInState = atom({
    key: "userLoggedInState",
    default: false,
  });
  
export const isEmailUserState = atom({
    key: "isEmailUserState",
    default: false,
  });
  
export const currentUserState = atom({
    key: "currentUserState",
    default: null,
  });