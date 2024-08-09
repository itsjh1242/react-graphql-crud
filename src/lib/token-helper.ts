import { authTokenVar, isLoggedInVar } from "@/lib/reactiveVars";
import { LOCALSTORAGE_TOKEN } from "./constants";

export const setToken = (token: string) => {
  localStorage.setItem(LOCALSTORAGE_TOKEN, token);
  authTokenVar(token);
  isLoggedInVar(true);
};

export const removeToken = () => {
  localStorage.removeItem(LOCALSTORAGE_TOKEN);
  authTokenVar("");
  isLoggedInVar(false);
};
