import { makeVar } from "@apollo/client";
import { LOCALSTORAGE_TOKEN } from "./constants";

// 로컬 스토리지에서 토큰 가져오기
const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);
