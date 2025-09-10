"use client";

import { createContext, useEffect, useState } from "react";
import { setCookie } from "../utils/cookies";
import { useGetUserData } from "../services/query";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const { data } = useGetUserData();
  useEffect(() => {
    if (data) {
      setIsLogin(true);
    }
  }, [data]);
  const logout = () => {
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);
    setIsLogin(false);
  };
  return (
    <AuthContext value={{ logout, setIsLogin, isLogin }}>
      {children}
    </AuthContext>
  );
}
